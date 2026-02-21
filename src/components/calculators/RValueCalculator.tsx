'use client'

import { useState, useRef } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import {
  getZoneDataFromZip,
  getZoneData,
  formatLocationDisplay,
  isValidZipCode,
  getZoneCharacteristics,
  type ZoneData,
} from '@/lib/climate-zones'

interface ResultsData {
  zoneData: ZoneData
  lookupMethod: 'zip' | 'manual'
  zipCode?: string
}

// Helper function to provide context for each location's R-value
function getLocationContext(location: string, rValue: string): string {
  if (rValue === 'NR') {
    return 'Not required in your climate zone, but may still improve comfort.'
  }

  const contexts: Record<string, string> = {
    ceilingAttic: 'Most critical area - typically provides best ROI on insulation investment.',
    ceilingCathedral: 'Limited space requires high-performance materials like spray foam.',
    walls: 'Accounts for 25-30% of heat loss in most homes.',
    floors: 'Important over garages, crawl spaces, or unconditioned basements.',
    basement: 'Reduces heat loss and helps maintain consistent indoor temperatures.',
    crawlSpace: 'Critical for comfort and preventing moisture issues.',
    slabEdge: 'Prevents heat loss at the foundation perimeter.',
    slabUnder: 'Required in colder zones for radiant floor systems.',
  }

  return contexts[location] || 'Meets minimum energy code requirements.'
}

export default function RValueCalculator() {
  const [zipCode, setZipCode] = useState('')
  const [manualZone, setManualZone] = useState('')
  const [results, setResults] = useState<ResultsData | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)

  const scrollToResults = () => {
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleZipLookup = () => {
    setError('')
    setLoading(true)

    // Simulate brief loading for UX
    setTimeout(() => {
      if (!isValidZipCode(zipCode)) {
        setError('Please enter a valid 5-digit ZIP code')
        setLoading(false)
        return
      }

      const zoneData = getZoneDataFromZip(zipCode)

      if (!zoneData) {
        setError('Could not find climate zone for this ZIP code. Please try selecting manually.')
        setLoading(false)
        return
      }

      setResults({
        zoneData,
        lookupMethod: 'zip',
        zipCode,
      })
      setLoading(false)
      scrollToResults()
    }, 300)
  }

  const handleManualSelect = (zone: number) => {
    const zoneData = getZoneData(zone)

    if (zoneData) {
      setResults({
        zoneData,
        lookupMethod: 'manual',
      })
      setManualZone(String(zone))
      setError('')
      scrollToResults()
    }
  }

  const handleReset = () => {
    setZipCode('')
    setManualZone('')
    setResults(null)
    setError('')
  }

  const requirements = results?.zoneData.requirements
  const energyStar = results?.zoneData.energyStarRecommended
  const zoneInfo = results?.zoneData.zone
  const characteristics = zoneInfo ? getZoneCharacteristics(zoneInfo.zone) : null

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <Card variant="elevated" className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Find Your R-Value Requirements</CardTitle>
          <p className="text-text-muted mt-2">
            Enter your ZIP code to find the IECC-recommended insulation R-values for your climate zone.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* ZIP Code Lookup */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Option 1: Enter ZIP Code
              </label>
              <div className="flex gap-3">
                <Input
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="e.g., 90210"
                  className="flex-1"
                  maxLength={5}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleZipLookup()
                    }
                  }}
                />
                <Button
                  onClick={handleZipLookup}
                  disabled={loading || zipCode.length !== 5}
                >
                  {loading ? 'Looking up...' : 'Look Up'}
                </Button>
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-text-muted">or</span>
              </div>
            </div>

            {/* Manual Zone Selection */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Option 2: Select Climate Zone Manually
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((zone) => (
                  <button
                    key={zone}
                    onClick={() => handleManualSelect(zone)}
                    className={`
                      py-2 px-3 rounded-lg border-2 text-sm font-semibold transition-colors
                      ${
                        manualZone === String(zone)
                          ? 'border-primary bg-primary text-white'
                          : 'border-surface-300 hover:border-primary hover:text-primary'
                      }
                    `}
                  >
                    {zone}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-text-muted">
                Zone 1 = Hottest (Florida, Hawaii) | Zone 8 = Coldest (Alaska)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {results && (
        <div ref={resultsRef} className="space-y-6 scroll-mt-4">
          {/* Zone Info Header */}
          <Card variant="outlined" className="bg-primary-50 border-primary-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-primary">
                  Your Results: {zoneInfo?.name}
                </h3>
                <p className="text-text-muted mt-1">{zoneInfo?.description}</p>
                {results.lookupMethod === 'zip' && (
                  <p className="text-sm text-primary mt-2">
                    Based on ZIP code: {results.zipCode}
                  </p>
                )}
              </div>
              <Button variant="outline" size="sm" onClick={handleReset}>
                Start Over
              </Button>
            </div>
          </Card>

          {/* Zone Parameters */}
          <div className="bg-surface-50 border border-surface-200 rounded-lg p-4">
            <h4 className="text-sm font-bold text-primary mb-3">Zone Parameters</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-text-muted block">Climate Zone</span>
                <span className="font-mono font-medium text-lg">{zoneInfo?.zone}</span>
              </div>
              <div>
                <span className="text-text-muted block">Dominant Load</span>
                <span className="font-medium">
                  {characteristics?.type === 'heating' ? 'Heating' : characteristics?.type === 'cooling' ? 'Cooling' : 'Mixed'}
                </span>
              </div>
              <div>
                <span className="text-text-muted block">HDD Base 65°F</span>
                <span className="font-mono font-medium">
                  {zoneInfo?.heatingDegreeDays.min.toLocaleString()}-{zoneInfo?.heatingDegreeDays.max.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-text-muted block">CDD Base 65°F</span>
                <span className="font-mono font-medium">
                  {zoneInfo?.coolingDegreeDays.min.toLocaleString()}-{zoneInfo?.coolingDegreeDays.max.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* IECC Code Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>2021 IECC Code Minimum Requirements</CardTitle>
              <p className="text-text-muted text-sm mt-1">
                These are the minimum R-values required by the International Energy Conservation Code for new construction and major renovations.
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-4 font-semibold">Location</th>
                      <th className="text-left py-3 px-4 font-semibold">Minimum R-Value</th>
                      <th className="text-left py-3 px-4 font-semibold hidden sm:table-cell">What This Means</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requirements &&
                      (Object.keys(requirements) as Array<keyof typeof requirements>).map(
                        (key) => (
                          <tr key={key} className="border-b border-surface-200 hover:bg-surface-50">
                            <td className="py-3 px-4 font-medium">
                              {formatLocationDisplay(key)}
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`font-semibold ${
                                  requirements[key] === 'NR'
                                    ? 'text-text-muted'
                                    : 'text-primary'
                                }`}
                              >
                                {requirements[key]}
                              </span>
                              {requirements[key] === 'NR' && (
                                <span className="text-sm text-text-muted ml-2">
                                  (Not Required)
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-sm text-text-muted hidden sm:table-cell">
                              {getLocationContext(key, requirements[key])}
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>

              {/* Mobile context cards */}
              <div className="mt-4 space-y-3 sm:hidden">
                <p className="text-sm font-medium text-primary">What These Values Mean:</p>
                {requirements && (
                  <div className="space-y-2 text-sm text-text-muted">
                    <p><strong>Attic/Ceiling:</strong> The most critical area - heat rises and escapes through inadequately insulated attics. This is typically your best ROI.</p>
                    <p><strong>Walls:</strong> Account for 25-30% of heat loss. The R-value shown may include both cavity and continuous insulation.</p>
                    <p><strong>Floor:</strong> Important over unconditioned spaces like garages or crawl spaces.</p>
                  </div>
                )}
              </div>

              {/* Technical Notes Collapsible */}
              <details className="mt-4 border border-surface-200 rounded-lg">
                <summary className="px-4 py-3 bg-surface-50 cursor-pointer text-sm font-medium text-primary hover:bg-surface-100">
                  R-Value Technical Reference
                </summary>
                <div className="p-4 text-xs text-text-muted space-y-3">
                  <div>
                    <strong className="text-text">R-Value Definition:</strong>
                    <p className="mt-1 font-mono bg-surface-50 p-2 rounded">
                      R = ΔT / Q (thermal resistance in ft²·°F·h/BTU)
                    </p>
                  </div>
                  <div>
                    <strong className="text-text">Notation Key:</strong>
                    <table className="w-full mt-2">
                      <tbody className="text-xs">
                        <tr><td className="py-1 pr-4">ci</td><td>Continuous insulation (no framing penetrations)</td></tr>
                        <tr><td className="py-1 pr-4">+</td><td>Indicates cavity + continuous (e.g., R-13 + R-5ci)</td></tr>
                        <tr><td className="py-1 pr-4">NR</td><td>Not required per IECC for this climate zone</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <strong className="text-text">Code Basis:</strong>
                    <p className="mt-1">2021 IECC Table R402.1.2 (residential), ASHRAE 90.1-2019 (commercial). Local amendments may supersede.</p>
                  </div>
                </div>
              </details>
            </CardContent>
          </Card>

          {/* Energy Star Recommendations */}
          <Card className="border-secondary-200 bg-secondary-50">
            <CardHeader>
              <CardTitle className="text-secondary-700">
                Energy Star Recommended Levels (Beyond Minimum)
              </CardTitle>
              <p className="text-text-muted text-sm mt-1">
                These enhanced levels can reduce your heating and cooling costs by an additional 10-20% compared to code minimums.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 border border-secondary-200">
                  <p className="text-sm text-text-muted mb-1">Attic</p>
                  <p className="text-xl font-bold text-secondary-700">{energyStar?.attic}</p>
                  <p className="text-xs text-text-muted mt-1">10-14 inches of blown insulation</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-secondary-200">
                  <p className="text-sm text-text-muted mb-1">Walls</p>
                  <p className="text-xl font-bold text-secondary-700">{energyStar?.walls}</p>
                  <p className="text-xs text-text-muted mt-1">Cavity + continuous insulation</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-secondary-200">
                  <p className="text-sm text-text-muted mb-1">Floor</p>
                  <p className="text-xl font-bold text-secondary-700">{energyStar?.floor}</p>
                  <p className="text-xs text-text-muted mt-1">Over unconditioned spaces</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-secondary-200 mb-4">
                <p className="text-sm font-medium text-secondary-700 mb-2">Why Go Beyond Code Minimum?</p>
                <ul className="text-sm text-text space-y-1">
                  <li>• <strong>Lower utility bills</strong> - Exceeding minimums typically pays for itself in 3-7 years</li>
                  <li>• <strong>Better comfort</strong> - Fewer drafts, more consistent temperatures throughout your home</li>
                  <li>• <strong>Future-proofing</strong> - Energy costs trend upward; more insulation protects against rising prices</li>
                  <li>• <strong>Higher resale value</strong> - Energy-efficient homes command premium prices</li>
                </ul>
              </div>

              {energyStar?.notes && (
                <div className="bg-white rounded-lg p-4 border border-secondary-200">
                  <p className="text-sm font-medium text-secondary-700">Pro Tip:</p>
                  <p className="text-sm text-text mt-1">{energyStar.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Zone Characteristics */}
          {characteristics && (
            <Card>
              <CardHeader>
                <CardTitle>Climate Zone Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`
                      px-3 py-1 rounded-full text-sm font-semibold
                      ${
                        characteristics.type === 'heating'
                          ? 'bg-blue-100 text-blue-700'
                          : characteristics.type === 'cooling'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-purple-100 text-purple-700'
                      }
                    `}
                  >
                    {characteristics.type === 'heating'
                      ? 'Heating Dominant'
                      : characteristics.type === 'cooling'
                      ? 'Cooling Dominant'
                      : 'Mixed Climate'}
                  </div>
                </div>
                <p className="text-text mb-4">{characteristics.description}</p>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Key Recommendations:</h4>
                  <ul className="space-y-2">
                    {characteristics.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-text">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Degree Days Info */}
          {zoneInfo && (
            <Card variant="outlined">
              <CardContent className="py-4">
                <div className="grid sm:grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-text-muted">Heating Degree Days (HDD)</p>
                    <p className="text-lg font-bold text-primary">
                      {zoneInfo.heatingDegreeDays.min.toLocaleString()} –{' '}
                      {zoneInfo.heatingDegreeDays.max.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Cooling Degree Days (CDD)</p>
                    <p className="text-lg font-bold text-secondary">
                      {zoneInfo.coolingDegreeDays.min.toLocaleString()} –{' '}
                      {zoneInfo.coolingDegreeDays.max.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* CTA Section */}
          <Card className="bg-accent-50 border-accent-200">
            <CardContent className="text-center py-6">
              <h3 className="text-lg font-bold text-accent-700 mb-2">
                Ready to Calculate Costs?
              </h3>
              <p className="text-text-muted mb-4">
                Now that you know your R-value requirements, estimate material and installation costs.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="primary"
                  onClick={() => (window.location.href = '/insulation-cost-calculator')}
                  className="bg-accent hover:bg-accent-600"
                >
                  Cost Calculator
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = '/insulation-thickness-calculator')}
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Thickness Calculator
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
