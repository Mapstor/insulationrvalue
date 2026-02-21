'use client'

import { useState, useMemo, useRef } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import materialsData from '@/data/insulation-materials.json'

interface Material {
  id: string
  name: string
  shortName: string
  rValuePerInch: { min: number; max: number } | null
  costPerSqFtInstalled: { min: number; max: number }
  costPerSqFtDIY: { min: number; max: number } | null
  diyFriendly: boolean
  diyNotes?: string
  form: string
  bestFor: string[]
  applicableLocations: string[]
}

const materials = materialsData.materials as Material[]

const locationOptions = [
  { value: 'attic-floor', label: 'Attic Floor (Blown-In)' },
  { value: 'attic-roof-deck', label: 'Attic Roof Deck / Rafters' },
  { value: 'walls', label: 'Walls (Interior Cavities)' },
  { value: 'walls-exterior', label: 'Walls (Exterior Continuous)' },
  { value: 'basement', label: 'Basement Walls' },
  { value: 'crawl-space', label: 'Crawl Space' },
  { value: 'rim-joist', label: 'Rim Joists' },
  { value: 'garage', label: 'Garage' },
  { value: 'cathedral-ceiling', label: 'Cathedral Ceiling' },
]

interface CostResult {
  material: Material
  areaSqFt: number
  costRangeDIY: { min: number; max: number } | null
  costRangePro: { min: number; max: number }
  rValueRange: { min: number; max: number } | null
  savings: number | null
  isDiyFriendly: boolean
}

// Helper function to provide context about each material
function getMaterialInsight(materialId: string, location: string): string {
  const insights: Record<string, Record<string, string>> = {
    'fiberglass-batts': {
      default: 'Affordable and widely available. Best for standard stud cavities with easy access. Requires careful installation to avoid gaps.',
      'attic-floor': 'Easy DIY install between attic joists. Watch for compression around obstacles.',
      'walls': 'Standard choice for wall cavities. Cut carefully around outlets and pipes.',
    },
    'fiberglass-blown': {
      default: 'Excellent coverage in irregular spaces. Equipment rental makes this accessible for DIY attic projects.',
      'attic-floor': 'Ideal for attics — fills around obstacles and achieves uniform coverage quickly.',
    },
    'cellulose-blown': {
      default: 'Made from recycled paper, eco-friendly choice. Excellent at filling gaps and settling into irregular spaces.',
      'attic-floor': 'Great eco-friendly option. Dense-pack provides excellent air sealing.',
      'walls': 'Can be dense-packed into existing walls through small holes — good for retrofits.',
    },
    'spray-foam-open': {
      default: 'Expands to fill gaps and provides air sealing. Good for irregular spaces where air leakage is a concern.',
      'attic-roof-deck': 'Creates conditioned attic space. Good for HVAC systems in the attic.',
    },
    'spray-foam-closed': {
      default: 'Highest R-value per inch plus moisture barrier. Premium option for maximum performance in limited space.',
      'basement': 'Excellent for basement walls — provides insulation and moisture protection.',
      'crawl-space': 'Ideal for sealing and insulating crawl spaces against moisture.',
      'rim-joist': 'Perfect for rim joists — air seals and insulates in one step.',
    },
    'mineral-wool-batts': {
      default: 'Fire-resistant and excellent sound dampening. Higher R-value than fiberglass at same thickness.',
      'walls': 'Great for interior walls needing fire rating or sound control.',
      'garage': 'Fire-resistant properties make it ideal for garage-to-house walls.',
    },
    'rigid-foam-xps': {
      default: 'Moisture-resistant with consistent R-value. Excellent for exterior applications and below-grade.',
      'basement': 'Great for basement walls — resists moisture and provides continuous insulation.',
      'walls-exterior': 'Standard choice for exterior continuous insulation over sheathing.',
    },
    'rigid-foam-eps': {
      default: 'Most affordable rigid foam option. Good for applications where moisture resistance is less critical.',
    },
    'rigid-foam-polyiso': {
      default: 'Highest R-value per inch of rigid foams. Best for above-grade exterior applications.',
      'walls-exterior': 'Best R-value for exterior wall sheathing. Performance decreases in cold temperatures.',
      'cathedral-ceiling': 'Excellent for cathedral ceilings where space is limited.',
    },
    'radiant-barrier': {
      default: 'Reflects radiant heat rather than slowing conduction. Most effective in hot climates.',
      'attic-roof-deck': 'Reduces attic temperatures by 20-30°F in summer. Best combined with other insulation.',
    },
  }

  return insights[materialId]?.[location] || insights[materialId]?.default || 'Suitable for this application. Compare R-value per dollar to find best value.'
}

export default function CostCalculator() {
  const [area, setArea] = useState('')
  const [location, setLocation] = useState('')
  const [installType, setInstallType] = useState<'diy' | 'pro'>('pro')
  const [results, setResults] = useState<CostResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)

  const scrollToResults = () => {
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const applicableMaterials = useMemo(() => {
    if (!location) return []
    return materials.filter((m) => m.applicableLocations.includes(location))
  }, [location])

  const handleCalculate = () => {
    const areaSqFt = parseFloat(area)

    if (isNaN(areaSqFt) || areaSqFt <= 0) {
      return
    }

    const results: CostResult[] = applicableMaterials.map((material) => {
      const costRangePro = {
        min: Math.round(areaSqFt * material.costPerSqFtInstalled.min),
        max: Math.round(areaSqFt * material.costPerSqFtInstalled.max),
      }

      const costRangeDIY = material.costPerSqFtDIY
        ? {
            min: Math.round(areaSqFt * material.costPerSqFtDIY.min),
            max: Math.round(areaSqFt * material.costPerSqFtDIY.max),
          }
        : null

      const savings =
        costRangeDIY && material.diyFriendly
          ? costRangePro.min - costRangeDIY.max
          : null

      return {
        material,
        areaSqFt,
        costRangeDIY,
        costRangePro,
        rValueRange: material.rValuePerInch,
        savings,
        isDiyFriendly: material.diyFriendly,
      }
    })

    // Sort by cost (lowest first)
    results.sort((a, b) => {
      if (installType === 'diy') {
        const aCost = a.costRangeDIY?.min ?? a.costRangePro.min
        const bCost = b.costRangeDIY?.min ?? b.costRangePro.min
        return aCost - bCost
      }
      return a.costRangePro.min - b.costRangePro.min
    })

    setResults(results)
    setShowResults(true)
    scrollToResults()
  }

  const handleReset = () => {
    setArea('')
    setLocation('')
    setInstallType('pro')
    setResults([])
    setShowResults(false)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <Card variant="elevated" className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Calculate Insulation Costs</CardTitle>
          <p className="text-text-muted mt-2">
            Enter your project details to get cost estimates for different insulation materials.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Area Input */}
            <Input
              label="Area to Insulate (square feet)"
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="e.g., 1000"
              min="1"
              helpText="Measure length × width of the area"
            />

            {/* Location Select */}
            <Select
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              options={locationOptions}
              placeholder="Select location..."
            />

            {/* Install Type */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Installation Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="installType"
                    value="pro"
                    checked={installType === 'pro'}
                    onChange={() => setInstallType('pro')}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span>Professional Installation</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="installType"
                    value="diy"
                    checked={installType === 'diy'}
                    onChange={() => setInstallType('diy')}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span>DIY</span>
                </label>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="flex gap-3">
              <Button
                onClick={handleCalculate}
                disabled={!area || !location || parseFloat(area) <= 0}
                className="flex-1"
              >
                Calculate Costs
              </Button>
              {showResults && (
                <Button variant="outline" onClick={handleReset}>
                  Reset
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {showResults && results.length > 0 && (
        <div ref={resultsRef} className="space-y-6 scroll-mt-4">
          {/* Summary Header */}
          <Card variant="outlined" className="bg-primary-50 border-primary-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-primary">
                  Your Cost Estimates: {parseFloat(area).toLocaleString()} sq ft
                </h3>
                <p className="text-text-muted mt-1">
                  {locationOptions.find((l) => l.value === location)?.label} •{' '}
                  {installType === 'diy' ? 'DIY' : 'Professional'} Installation
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-text-muted">Showing {results.length} options</p>
              </div>
            </div>
          </Card>

          {/* Input Parameters Summary */}
          <div className="bg-surface-50 border border-surface-200 rounded-lg p-4">
            <h4 className="text-sm font-bold text-primary mb-3">Input Parameters</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-text-muted block">Area</span>
                <span className="font-mono font-medium">{parseFloat(area).toLocaleString()} ft²</span>
              </div>
              <div>
                <span className="text-text-muted block">Location</span>
                <span className="font-medium">{locationOptions.find((l) => l.value === location)?.label}</span>
              </div>
              <div>
                <span className="text-text-muted block">Installation</span>
                <span className="font-medium">{installType === 'diy' ? 'DIY' : 'Professional'}</span>
              </div>
              <div>
                <span className="text-text-muted block">Data Source</span>
                <span className="font-medium">2024 National Avg</span>
              </div>
            </div>
          </div>

          {/* Regional Cost Variance Table */}
          <details className="border border-surface-200 rounded-lg">
            <summary className="px-4 py-3 bg-surface-50 cursor-pointer text-sm font-medium text-primary hover:bg-surface-100">
              Regional Cost Variance Factors
            </summary>
            <div className="p-4">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-surface-200">
                    <th className="text-left py-2 font-medium text-text-muted">Factor</th>
                    <th className="text-right py-2 font-medium text-text-muted">Variance</th>
                    <th className="text-left py-2 pl-4 font-medium text-text-muted hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  <tr>
                    <td className="py-2">Regional labor rates</td>
                    <td className="py-2 text-right font-mono">±30-50%</td>
                    <td className="py-2 pl-4 text-text-muted hidden sm:table-cell">Northeast/West Coast higher</td>
                  </tr>
                  <tr>
                    <td className="py-2">Access difficulty</td>
                    <td className="py-2 text-right font-mono">+15-40%</td>
                    <td className="py-2 pl-4 text-text-muted hidden sm:table-cell">Tight spaces, low clearance</td>
                  </tr>
                  <tr>
                    <td className="py-2">Old insulation removal</td>
                    <td className="py-2 text-right font-mono">+$1-3/ft²</td>
                    <td className="py-2 pl-4 text-text-muted hidden sm:table-cell">Disposal fees additional</td>
                  </tr>
                  <tr>
                    <td className="py-2">Seasonal demand</td>
                    <td className="py-2 text-right font-mono">±10-20%</td>
                    <td className="py-2 pl-4 text-text-muted hidden sm:table-cell">Off-peak: Nov-Feb lower</td>
                  </tr>
                  <tr>
                    <td className="py-2">Project size (&gt;2000 ft²)</td>
                    <td className="py-2 text-right font-mono">-5-15%</td>
                    <td className="py-2 pl-4 text-text-muted hidden sm:table-cell">Volume discounts apply</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>

          {/* Quick Summary Stats */}
          <div className="grid sm:grid-cols-3 gap-4">
            <Card className="text-center">
              <CardContent className="py-4">
                <p className="text-sm text-text-muted mb-1">Lowest Option</p>
                <p className="text-xl font-bold text-accent">
                  {formatCurrency(results[0]?.costRangePro.min || 0)}
                </p>
                <p className="text-xs text-text-muted">{results[0]?.material.shortName}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="py-4">
                <p className="text-sm text-text-muted mb-1">Mid-Range</p>
                <p className="text-xl font-bold text-primary">
                  {formatCurrency(results[Math.floor(results.length / 2)]?.costRangePro.min || 0)}
                </p>
                <p className="text-xs text-text-muted">{results[Math.floor(results.length / 2)]?.material.shortName}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="py-4">
                <p className="text-sm text-text-muted mb-1">Premium Option</p>
                <p className="text-xl font-bold text-secondary">
                  {formatCurrency(results[results.length - 1]?.costRangePro.max || 0)}
                </p>
                <p className="text-xs text-text-muted">{results[results.length - 1]?.material.shortName}</p>
              </CardContent>
            </Card>
          </div>

          {/* Material Comparison */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-primary">Compare Your Options</h3>
            <p className="text-sm text-text-muted mb-4">
              Materials are sorted by cost. Consider both upfront cost and long-term performance when choosing.
            </p>
          </div>
          <div className="grid gap-4">
            {results.map((result, index) => {
              const isLowest = index === 0
              const isHighestValue = result.rValueRange && result.rValueRange.max >= 6
              const showDIY = installType === 'diy' && result.costRangeDIY
              const costRange = showDIY ? result.costRangeDIY! : result.costRangePro
              const costPerRValue = result.rValueRange
                ? ((costRange.min + costRange.max) / 2) / ((result.rValueRange.min + result.rValueRange.max) / 2 * result.areaSqFt)
                : null

              return (
                <Card
                  key={result.material.id}
                  className={isLowest ? 'border-accent border-2' : ''}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Material Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-bold text-primary">
                          {result.material.name}
                        </h4>
                        {isLowest && (
                          <span className="px-2 py-0.5 bg-accent text-white text-xs font-semibold rounded">
                            Lowest Cost
                          </span>
                        )}
                        {isHighestValue && (
                          <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded">
                            Best R-Value
                          </span>
                        )}
                        {result.isDiyFriendly && installType === 'diy' && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                            DIY Friendly
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-muted mb-2">
                        {result.rValueRange
                          ? `R-${result.rValueRange.min} to R-${result.rValueRange.max} per inch — ${result.rValueRange.max >= 6 ? 'excellent' : result.rValueRange.max >= 4 ? 'good' : 'moderate'} thermal performance`
                          : 'Reflective barrier — blocks radiant heat transfer, not conductive heat'}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {result.material.bestFor.slice(0, 3).map((use) => (
                          <span
                            key={use}
                            className="px-2 py-0.5 bg-surface-100 text-text-muted text-xs rounded"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Cost Display */}
                    <div className="text-right lg:min-w-[200px]">
                      <p className="text-2xl font-bold text-primary">
                        {formatCurrency(costRange.min)} – {formatCurrency(costRange.max)}
                      </p>
                      <p className="text-sm text-text-muted">
                        {installType === 'diy' && result.costRangeDIY
                          ? 'Materials Only'
                          : 'Installed'}{' '}
                        ({((costRange.min + costRange.max) / 2 / result.areaSqFt).toFixed(2)}/sq ft)
                      </p>
                      {/* Show savings for DIY */}
                      {installType === 'diy' &&
                        result.isDiyFriendly &&
                        result.savings &&
                        result.savings > 0 && (
                          <p className="text-sm text-accent font-semibold mt-1">
                            Save up to {formatCurrency(result.savings)} vs pro
                          </p>
                        )}
                      {/* Show not DIY friendly warning */}
                      {installType === 'diy' && !result.isDiyFriendly && (
                        <p className="text-sm text-orange-600 mt-1">
                          Professional installation recommended
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Material Insights */}
                  <div className="mt-4 pt-4 border-t border-surface-200">
                    <p className="text-sm text-text">
                      <strong>Why choose {result.material.shortName}:</strong>{' '}
                      {getMaterialInsight(result.material.id, location)}
                    </p>
                  </div>

                  {/* DIY Notes */}
                  {installType === 'diy' &&
                    result.isDiyFriendly &&
                    result.material.diyNotes && (
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>DIY Tip:</strong>{' '}
                          {result.material.diyNotes}
                        </p>
                      </div>
                    )}
                </Card>
              )
            })}
          </div>

          {/* Pro vs DIY Comparison */}
          {installType === 'pro' && results.some((r) => r.isDiyFriendly) && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="py-4">
                <h4 className="font-semibold text-blue-700 mb-2">
                  Considering DIY?
                </h4>
                <p className="text-sm text-text mb-3">
                  Some of these materials are DIY-friendly. Switch to DIY mode to see potential
                  savings on materials.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setInstallType('diy')
                    handleCalculate()
                  }}
                  className="border-blue-500 text-blue-700 hover:bg-blue-100"
                >
                  Show DIY Costs
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Cost Breakdown Methodology */}
          <details className="border border-surface-200 rounded-lg">
            <summary className="px-4 py-3 bg-surface-50 cursor-pointer text-sm font-medium text-primary hover:bg-surface-100">
              Cost Calculation Methodology
            </summary>
            <div className="p-4 text-xs text-text-muted space-y-3">
              <div>
                <strong className="text-text">Professional Installation Cost:</strong>
                <p className="mt-1 font-mono bg-surface-50 p-2 rounded">
                  Total = Area (ft²) × Material Cost per ft² (installed)
                </p>
                <p className="mt-1">Includes: materials, labor, equipment, disposal, standard prep work.</p>
              </div>
              <div>
                <strong className="text-text">DIY Material Cost:</strong>
                <p className="mt-1 font-mono bg-surface-50 p-2 rounded">
                  Total = Area (ft²) × Material Cost per ft² (materials only)
                </p>
                <p className="mt-1">Excludes: tool rental ($50-150/day), PPE ($30-80), time investment.</p>
              </div>
              <div>
                <strong className="text-text">Data Sources:</strong>
                <ul className="mt-1 space-y-0.5">
                  <li>• RSMeans Construction Cost Data (2024)</li>
                  <li>• National contractor pricing surveys (n=500+)</li>
                  <li>• Major retailer MSRP (Home Depot, Lowe's, specialty)</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-surface-200">
                <strong className="text-text">Limitations:</strong> Assumes standard installation conditions, single-story access, no demolition required, minimum order quantities met.
              </div>
            </div>
          </details>

          {/* CTA Section */}
          <Card className="bg-accent-50 border-accent-200">
            <CardContent className="text-center py-6">
              <h3 className="text-lg font-bold text-accent-700 mb-2">
                Not Sure Which Material to Choose?
              </h3>
              <p className="text-text-muted mb-4">
                Take our quiz to get a personalized recommendation based on your specific situation.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="primary"
                  onClick={() => (window.location.href = '/what-insulation-do-i-need')}
                  className="bg-accent hover:bg-accent-600"
                >
                  Take the Quiz
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = '/r-value-calculator')}
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Check R-Value Requirements
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Empty State */}
      {showResults && results.length === 0 && (
        <Card className="text-center py-8">
          <p className="text-text-muted">
            No insulation materials found for this location. Please try a different location.
          </p>
        </Card>
      )}
    </div>
  )
}
