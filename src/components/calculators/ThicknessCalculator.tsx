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
  form: string
  bestFor: string[]
  diyFriendly: boolean
}

const materials = materialsData.materials.filter(
  (m) => m.rValuePerInch !== null
) as Material[]

// Common R-value targets for quick selection
const commonRValues = [
  { value: '13', label: 'R-13 (2×4 wall)' },
  { value: '15', label: 'R-15 (2×4 wall premium)' },
  { value: '19', label: 'R-19 (2×6 wall min)' },
  { value: '21', label: 'R-21 (2×6 wall)' },
  { value: '30', label: 'R-30 (Attic floor Zone 1-3)' },
  { value: '38', label: 'R-38 (Attic floor Zone 4-5)' },
  { value: '49', label: 'R-49 (Attic floor Zone 5-7)' },
  { value: '60', label: 'R-60 (Attic floor Zone 6-8)' },
]

interface ThicknessResult {
  material: Material
  targetRValue: number
  thicknessInchesMin: number
  thicknessInchesMax: number
  thicknessInchesAvg: number
  fitsStuds: string | null
}

export default function ThicknessCalculator() {
  const [targetRValue, setTargetRValue] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [results, setResults] = useState<ThicknessResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [compareAll, setCompareAll] = useState(true)
  const resultsRef = useRef<HTMLDivElement>(null)

  const scrollToResults = () => {
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const materialOptions = useMemo(
    () =>
      materials.map((m) => ({
        value: m.id,
        label: `${m.name} (R-${m.rValuePerInch!.min}-${m.rValuePerInch!.max}/inch)`,
      })),
    []
  )

  const handleCalculate = () => {
    const rValue = parseFloat(targetRValue)

    if (isNaN(rValue) || rValue <= 0) {
      return
    }

    const materialsToCalculate = compareAll
      ? materials
      : materials.filter((m) => m.id === selectedMaterial)

    const results: ThicknessResult[] = materialsToCalculate.map((material) => {
      const rPerInch = material.rValuePerInch!

      // Thickness = R-value / R-per-inch
      // Higher R-per-inch = less thickness needed
      const thicknessMin = rValue / rPerInch.max // Max R gives min thickness
      const thicknessMax = rValue / rPerInch.min // Min R gives max thickness
      const thicknessAvg = (thicknessMin + thicknessMax) / 2

      // Check standard stud/joist depths
      let fitsStuds: string | null = null
      if (thicknessAvg <= 3.5) {
        fitsStuds = 'Fits 2×4 stud cavity'
      } else if (thicknessAvg <= 5.5) {
        fitsStuds = 'Fits 2×6 stud cavity'
      } else if (thicknessAvg <= 7.25) {
        fitsStuds = 'Fits 2×8 joist'
      } else if (thicknessAvg <= 9.25) {
        fitsStuds = 'Fits 2×10 joist'
      } else if (thicknessAvg <= 11.25) {
        fitsStuds = 'Fits 2×12 joist'
      }

      return {
        material,
        targetRValue: rValue,
        thicknessInchesMin: thicknessMin,
        thicknessInchesMax: thicknessMax,
        thicknessInchesAvg: thicknessAvg,
        fitsStuds,
      }
    })

    // Sort by thickness (thinnest first)
    results.sort((a, b) => a.thicknessInchesAvg - b.thicknessInchesAvg)

    setResults(results)
    setShowResults(true)
    scrollToResults()
  }

  const handleReset = () => {
    setTargetRValue('')
    setSelectedMaterial('')
    setResults([])
    setShowResults(false)
  }

  const formatThickness = (inches: number) => {
    if (inches < 1) {
      return `${(inches * 16).toFixed(1)}⁄16"`
    }
    return `${inches.toFixed(1)}"`
  }

  const formatCm = (inches: number) => {
    return `${(inches * 2.54).toFixed(1)} cm`
  }

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <Card variant="elevated" className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Calculate Required Thickness</CardTitle>
          <p className="text-text-muted mt-2">
            Enter your target R-value to see how thick each insulation material needs to be.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Target R-Value */}
            <div>
              <Input
                label="Target R-Value"
                type="number"
                value={targetRValue}
                onChange={(e) => setTargetRValue(e.target.value)}
                placeholder="e.g., 38"
                min="1"
                max="100"
                helpText="The total R-value you need to achieve"
              />
              {/* Quick R-value buttons */}
              <div className="mt-3">
                <p className="text-sm text-text-muted mb-2">Quick select:</p>
                <div className="flex flex-wrap gap-2">
                  {commonRValues.map((rv) => (
                    <button
                      key={rv.value}
                      onClick={() => setTargetRValue(rv.value)}
                      className={`
                        px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                        ${
                          targetRValue === rv.value
                            ? 'bg-primary text-white'
                            : 'bg-surface-100 text-text hover:bg-primary-100 hover:text-primary'
                        }
                      `}
                    >
                      {rv.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Compare All or Specific Material */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Materials to Compare
              </label>
              <div className="flex gap-4 mb-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="compareMode"
                    checked={compareAll}
                    onChange={() => setCompareAll(true)}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span>Compare all materials</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="compareMode"
                    checked={!compareAll}
                    onChange={() => setCompareAll(false)}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span>Specific material</span>
                </label>
              </div>

              {!compareAll && (
                <Select
                  label="Material"
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  options={materialOptions}
                  placeholder="Select material..."
                />
              )}
            </div>

            {/* Calculate Button */}
            <div className="flex gap-3">
              <Button
                onClick={handleCalculate}
                disabled={!targetRValue || parseFloat(targetRValue) <= 0 || (!compareAll && !selectedMaterial)}
                className="flex-1"
              >
                Calculate Thickness
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
                  Your Results: R-{parseFloat(targetRValue).toFixed(0)} Thickness Requirements
                </h3>
                <p className="text-text-muted mt-1">
                  {compareAll
                    ? `Comparing ${results.length} insulation materials`
                    : `For ${results[0]?.material.name}`}
                </p>
              </div>
            </div>
          </Card>

          {/* Calculation Parameters */}
          <div className="bg-surface-50 border border-surface-200 rounded-lg p-4">
            <h4 className="text-sm font-bold text-primary mb-3">Calculation Parameters</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-text-muted block">Target R-Value</span>
                <span className="font-mono font-medium text-lg">R-{parseFloat(targetRValue).toFixed(0)}</span>
              </div>
              <div>
                <span className="text-text-muted block">Materials Compared</span>
                <span className="font-mono font-medium">{results.length}</span>
              </div>
              <div>
                <span className="text-text-muted block">Min Thickness</span>
                <span className="font-mono font-medium">{formatThickness(results[0]?.thicknessInchesAvg)}</span>
              </div>
              <div>
                <span className="text-text-muted block">Max Thickness</span>
                <span className="font-mono font-medium">{formatThickness(results[results.length - 1]?.thicknessInchesAvg)}</span>
              </div>
            </div>
          </div>

          {/* Calculation Formula */}
          <details className="border border-surface-200 rounded-lg">
            <summary className="px-4 py-3 bg-surface-50 cursor-pointer text-sm font-medium text-primary hover:bg-surface-100">
              Calculation Methodology
            </summary>
            <div className="p-4 text-xs text-text-muted space-y-3">
              <div>
                <strong className="text-text">Thickness Formula:</strong>
                <p className="mt-1 font-mono bg-surface-50 p-2 rounded">
                  Thickness (inches) = Target R-Value / R-Value per inch
                </p>
              </div>
              <div>
                <strong className="text-text">Range Calculation:</strong>
                <p className="mt-1">Min thickness uses maximum R/inch rating. Max thickness uses minimum R/inch rating. Average displayed is arithmetic mean.</p>
              </div>
              <div>
                <strong className="text-text">Framing Compatibility:</strong>
                <table className="w-full mt-2">
                  <tbody className="text-xs">
                    <tr><td className="py-1">2×4:</td><td className="font-mono">3.5&quot; cavity</td></tr>
                    <tr><td className="py-1">2×6:</td><td className="font-mono">5.5&quot; cavity</td></tr>
                    <tr><td className="py-1">2×8:</td><td className="font-mono">7.25&quot; cavity</td></tr>
                    <tr><td className="py-1">2×10:</td><td className="font-mono">9.25&quot; cavity</td></tr>
                    <tr><td className="py-1">2×12:</td><td className="font-mono">11.25&quot; cavity</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          {/* Results Table */}
          <Card>
            <CardHeader>
              <CardTitle>Thickness Comparison</CardTitle>
              <p className="text-text-muted text-sm mt-1">
                Materials sorted from thinnest (most efficient) to thickest.
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-4 font-semibold">Material</th>
                      <th className="text-left py-3 px-4 font-semibold">Thickness</th>
                      <th className="text-left py-3 px-4 font-semibold hidden sm:table-cell">
                        R-Value/Inch
                      </th>
                      <th className="text-left py-3 px-4 font-semibold hidden md:table-cell">
                        Fits In
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result, index) => {
                      const isThinnest = index === 0
                      return (
                        <tr
                          key={result.material.id}
                          className={`border-b border-surface-200 hover:bg-surface-50 ${
                            isThinnest ? 'bg-accent-50' : ''
                          }`}
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{result.material.name}</span>
                              {isThinnest && (
                                <span className="px-2 py-0.5 bg-accent text-white text-xs font-semibold rounded">
                                  Most Efficient
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-text-muted mt-0.5">{result.material.form}</p>
                          </td>
                          <td className="py-3 px-4">
                            <p className="font-bold text-primary text-lg">
                              {formatThickness(result.thicknessInchesAvg)}
                            </p>
                            <p className="text-xs text-text-muted">
                              ({formatThickness(result.thicknessInchesMin)} –{' '}
                              {formatThickness(result.thicknessInchesMax)})
                            </p>
                            <p className="text-xs text-text-muted">
                              {formatCm(result.thicknessInchesAvg)}
                            </p>
                          </td>
                          <td className="py-3 px-4 hidden sm:table-cell">
                            <span className="font-medium text-secondary">
                              R-{result.material.rValuePerInch!.min} to R-
                              {result.material.rValuePerInch!.max}
                            </span>
                          </td>
                          <td className="py-3 px-4 hidden md:table-cell">
                            {result.fitsStuds ? (
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                                {result.fitsStuds}
                              </span>
                            ) : (
                              <span className="text-text-muted text-sm">
                                Exceeds standard framing
                              </span>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Visual Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Visual Thickness Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results.slice(0, 6).map((result) => {
                  // Scale bar width: max 16" = 100%
                  const maxThickness = 16
                  const widthPercent = Math.min(
                    (result.thicknessInchesAvg / maxThickness) * 100,
                    100
                  )

                  return (
                    <div key={result.material.id} className="flex items-center gap-4">
                      <div className="w-32 sm:w-40 text-sm font-medium truncate">
                        {result.material.shortName}
                      </div>
                      <div className="flex-1 bg-surface-100 rounded-full h-6 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${widthPercent}%` }}
                        >
                          <span className="text-white text-xs font-bold whitespace-nowrap">
                            {formatThickness(result.thicknessInchesAvg)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="text-xs text-text-muted mt-4 text-center">
                Bar length represents relative thickness (scale: 0-16 inches)
              </p>
            </CardContent>
          </Card>

          {/* Standard Framing Reference */}
          <Card variant="outlined" className="bg-surface-50">
            <CardHeader>
              <CardTitle>Standard Framing Depths</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-surface-200">
                  <p className="font-semibold text-primary">2×4 Stud</p>
                  <p className="text-2xl font-bold text-primary">3.5&quot;</p>
                  <p className="text-sm text-text-muted">Interior walls, some exterior</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-surface-200">
                  <p className="font-semibold text-primary">2×6 Stud</p>
                  <p className="text-2xl font-bold text-primary">5.5&quot;</p>
                  <p className="text-sm text-text-muted">Exterior walls (code standard)</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-surface-200">
                  <p className="font-semibold text-primary">2×8 Joist</p>
                  <p className="text-2xl font-bold text-primary">7.25&quot;</p>
                  <p className="text-sm text-text-muted">Floors, rafters</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-surface-200">
                  <p className="font-semibold text-primary">2×10 Joist</p>
                  <p className="text-2xl font-bold text-primary">9.25&quot;</p>
                  <p className="text-sm text-text-muted">Floor/ceiling joists</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-surface-200">
                  <p className="font-semibold text-primary">2×12 Joist</p>
                  <p className="text-2xl font-bold text-primary">11.25&quot;</p>
                  <p className="text-sm text-text-muted">Large spans, rafters</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-surface-200">
                  <p className="font-semibold text-primary">Attic Floor</p>
                  <p className="text-2xl font-bold text-primary">12-20&quot;</p>
                  <p className="text-sm text-text-muted">Blown-in depth varies</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thermal Performance Factors */}
          <details className="border border-surface-200 rounded-lg">
            <summary className="px-4 py-3 bg-surface-50 cursor-pointer text-sm font-medium text-primary hover:bg-surface-100">
              Performance Factors & Derating
            </summary>
            <div className="p-4">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-surface-200">
                    <th className="text-left py-2 font-medium text-text-muted">Factor</th>
                    <th className="text-right py-2 font-medium text-text-muted">R-Value Impact</th>
                    <th className="text-left py-2 pl-4 font-medium text-text-muted hidden sm:table-cell">Mitigation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100 text-text-muted">
                  <tr>
                    <td className="py-2">Thermal bridging (16&quot; OC framing)</td>
                    <td className="py-2 text-right font-mono">-10 to -15%</td>
                    <td className="py-2 pl-4 hidden sm:table-cell">Add continuous exterior insulation</td>
                  </tr>
                  <tr>
                    <td className="py-2">Thermal bridging (24&quot; OC framing)</td>
                    <td className="py-2 text-right font-mono">-8 to -12%</td>
                    <td className="py-2 pl-4 hidden sm:table-cell">Wider spacing reduces loss</td>
                  </tr>
                  <tr>
                    <td className="py-2">Batt compression (10%)</td>
                    <td className="py-2 text-right font-mono">-5 to -8%</td>
                    <td className="py-2 pl-4 hidden sm:table-cell">Use correct batt size</td>
                  </tr>
                  <tr>
                    <td className="py-2">Cellulose settlement</td>
                    <td className="py-2 text-right font-mono">-15 to -20%</td>
                    <td className="py-2 pl-4 hidden sm:table-cell">Initial overfill per mfr specs</td>
                  </tr>
                  <tr>
                    <td className="py-2">Air gaps/voids (poor install)</td>
                    <td className="py-2 text-right font-mono">-25 to -50%</td>
                    <td className="py-2 pl-4 hidden sm:table-cell">Full contact, no gaps</td>
                  </tr>
                  <tr>
                    <td className="py-2">Polyiso cold derating (&lt;40°F)</td>
                    <td className="py-2 text-right font-mono">-15 to -25%</td>
                    <td className="py-2 pl-4 hidden sm:table-cell">Use XPS/EPS for cold climates</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-text-muted mt-3 pt-3 border-t border-surface-200">
                <strong>Effective R-value:</strong> Whole-wall R-value = nominal R-value × (1 - thermal bridge factor). ASHRAE 90.1 appendix A provides detailed calculation methods.
              </p>
            </div>
          </details>

          {/* CTA Section */}
          <Card className="bg-accent-50 border-accent-200">
            <CardContent className="text-center py-6">
              <h3 className="text-lg font-bold text-accent-700 mb-2">
                Know the Thickness — Now Calculate the Cost
              </h3>
              <p className="text-text-muted mb-4">
                Use our cost calculator to estimate material and installation costs.
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
                  onClick={() => (window.location.href = '/r-value-calculator')}
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Find Required R-Value
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
