'use client'

import { useState, useMemo, useRef } from 'react'
import Link from 'next/link'
import { getZoneDataFromZip, getZoneData } from '@/lib/climate-zones'

interface SavingsInputs {
  currentRValue: number
  targetRValue: number
  zipCode: string
  climateZone: number | null
  homeSquareFeet: number
  annualEnergyBill: number
  upgradeCost: number
  location: 'attic' | 'walls' | 'basement' | 'crawl-space' | 'whole-house'
}

interface SavingsResults {
  annualSavings: number
  savingsPercent: number
  paybackYears: number
  tenYearSavings: number
  twentyYearSavings: number
  roi10Year: number
  roi20Year: number
  lifetimeSavings: number // 30 years
}

// Heating/cooling energy allocation by location
const locationEnergyShare: Record<string, number> = {
  attic: 0.25, // 25% of heating/cooling loss through attic
  walls: 0.35, // 35% through walls
  basement: 0.10, // 10% through basement
  'crawl-space': 0.10, // 10% through crawl space
  'whole-house': 0.70, // 70% total thermal envelope
}

// Typical heating/cooling portion of energy bill by zone
const hvacEnergyPortion: Record<number, number> = {
  1: 0.55, // Hot climates - more AC
  2: 0.50,
  3: 0.45,
  4: 0.45,
  5: 0.50, // Cold climates - more heating
  6: 0.55,
  7: 0.60,
  8: 0.65,
}

// Average upgrade costs for estimates
const typicalUpgradeCosts: Record<string, { perSqFt: number; description: string }> = {
  attic: { perSqFt: 1.50, description: 'Blown-in insulation to R-49' },
  walls: { perSqFt: 2.50, description: 'Dense-pack cellulose retrofit' },
  basement: { perSqFt: 2.00, description: 'Rigid foam on walls' },
  'crawl-space': { perSqFt: 3.00, description: 'Encapsulation with insulation' },
  'whole-house': { perSqFt: 2.00, description: 'Full envelope upgrade' },
}

// Common R-value presets
const commonUpgrades = [
  { from: 11, to: 38, label: 'R-11 → R-38 (Attic)', location: 'attic' },
  { from: 19, to: 49, label: 'R-19 → R-49 (Attic)', location: 'attic' },
  { from: 0, to: 38, label: 'Uninsulated → R-38 (Attic)', location: 'attic' },
  { from: 11, to: 21, label: 'R-11 → R-21 (Walls)', location: 'walls' },
  { from: 0, to: 13, label: 'Uninsulated → R-13 (Walls)', location: 'walls' },
  { from: 0, to: 15, label: 'Uninsulated → R-15 (Basement)', location: 'basement' },
]

export default function SavingsCalculator() {
  const [inputs, setInputs] = useState<SavingsInputs>({
    currentRValue: 11,
    targetRValue: 38,
    zipCode: '',
    climateZone: null,
    homeSquareFeet: 1500,
    annualEnergyBill: 2400,
    upgradeCost: 0,
    location: 'attic',
  })

  const [zipError, setZipError] = useState('')
  const [showResults, setShowResults] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)

  const scrollToResults = () => {
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleZipLookup = () => {
    const zoneData = getZoneDataFromZip(inputs.zipCode)
    if (zoneData) {
      setInputs(prev => ({ ...prev, climateZone: zoneData.zone.zone }))
      setZipError('')
    } else {
      setZipError('Could not find climate zone. Select manually below.')
    }
  }

  const estimatedUpgradeCost = useMemo(() => {
    const costInfo = typicalUpgradeCosts[inputs.location]
    return Math.round(inputs.homeSquareFeet * costInfo.perSqFt)
  }, [inputs.homeSquareFeet, inputs.location])

  const results = useMemo<SavingsResults | null>(() => {
    if (!inputs.climateZone || inputs.currentRValue >= inputs.targetRValue) {
      return null
    }

    const zone = inputs.climateZone
    const hvacPortion = hvacEnergyPortion[zone] || 0.50
    const locationShare = locationEnergyShare[inputs.location] || 0.25

    // Calculate R-value improvement ratio
    // Heat loss is inversely proportional to R-value
    // % reduction = (1 - R_old/R_new) × location_share × hvac_portion
    const rImprovement = 1 - (inputs.currentRValue / inputs.targetRValue)
    const annualHVACSpend = inputs.annualEnergyBill * hvacPortion
    const savingsPercent = rImprovement * locationShare * 100
    const annualSavings = annualHVACSpend * rImprovement * locationShare

    // Use provided upgrade cost or estimate
    const cost = inputs.upgradeCost > 0 ? inputs.upgradeCost : estimatedUpgradeCost
    const paybackYears = cost > 0 ? cost / annualSavings : 0

    // Long-term savings (assuming 2% annual energy cost increase)
    const annualIncrease = 1.02
    let tenYearSavings = 0
    let twentyYearSavings = 0
    let lifetimeSavings = 0 // 30 years

    for (let year = 1; year <= 30; year++) {
      const yearSavings = annualSavings * Math.pow(annualIncrease, year - 1)
      lifetimeSavings += yearSavings
      if (year <= 10) tenYearSavings += yearSavings
      if (year <= 20) twentyYearSavings += yearSavings
    }

    const roi10Year = cost > 0 ? ((tenYearSavings - cost) / cost) * 100 : 0
    const roi20Year = cost > 0 ? ((twentyYearSavings - cost) / cost) * 100 : 0

    return {
      annualSavings: Math.round(annualSavings),
      savingsPercent: Math.round(savingsPercent * 10) / 10,
      paybackYears: Math.round(paybackYears * 10) / 10,
      tenYearSavings: Math.round(tenYearSavings),
      twentyYearSavings: Math.round(twentyYearSavings),
      roi10Year: Math.round(roi10Year),
      roi20Year: Math.round(roi20Year),
      lifetimeSavings: Math.round(lifetimeSavings),
    }
  }, [inputs, estimatedUpgradeCost])

  const handleCalculate = () => {
    if (inputs.climateZone && inputs.currentRValue < inputs.targetRValue) {
      setShowResults(true)
      scrollToResults()
    }
  }

  const applyPreset = (preset: typeof commonUpgrades[0]) => {
    setInputs(prev => ({
      ...prev,
      currentRValue: preset.from,
      targetRValue: preset.to,
      location: preset.location as SavingsInputs['location'],
    }))
  }

  const getZoneName = (zone: number): string => {
    const zoneData = getZoneData(zone)
    return zoneData ? zoneData.zone.name : `Zone ${zone}`
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">Insulation Savings Calculator</h2>
            <p className="text-sm text-text-muted">Estimate energy savings and payback period</p>
          </div>
        </div>

        {/* Common Upgrade Presets */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-text mb-2">
            Quick Presets
          </label>
          <div className="flex flex-wrap gap-2">
            {commonUpgrades.map((preset, i) => (
              <button
                key={i}
                onClick={() => applyPreset(preset)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  inputs.currentRValue === preset.from &&
                  inputs.targetRValue === preset.to &&
                  inputs.location === preset.location
                    ? 'bg-primary text-white border-primary'
                    : 'bg-surface-50 text-text border-surface-200 hover:border-primary'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Left Column - Location & R-Values */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Area Being Upgraded
              </label>
              <select
                value={inputs.location}
                onChange={e => setInputs(prev => ({ ...prev, location: e.target.value as SavingsInputs['location'] }))}
                className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              >
                <option value="attic">Attic</option>
                <option value="walls">Walls</option>
                <option value="basement">Basement</option>
                <option value="crawl-space">Crawl Space</option>
                <option value="whole-house">Whole House</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Current R-Value
                </label>
                <input
                  type="number"
                  value={inputs.currentRValue || ''}
                  onChange={e => setInputs(prev => ({ ...prev, currentRValue: Number(e.target.value) }))}
                  className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 11"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Target R-Value
                </label>
                <input
                  type="number"
                  value={inputs.targetRValue || ''}
                  onChange={e => setInputs(prev => ({ ...prev, targetRValue: Number(e.target.value) }))}
                  className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 38"
                  min="1"
                  max="100"
                />
              </div>
            </div>

            {/* Climate Zone */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Climate Zone
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={inputs.zipCode}
                  onChange={e => setInputs(prev => ({ ...prev, zipCode: e.target.value.replace(/\D/g, '').slice(0, 5) }))}
                  placeholder="ZIP code"
                  className="flex-1 px-4 py-3 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  maxLength={5}
                />
                <button
                  onClick={handleZipLookup}
                  disabled={inputs.zipCode.length !== 5}
                  className="px-4 py-3 bg-surface-100 text-primary rounded-lg hover:bg-surface-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  Look Up
                </button>
              </div>
              {zipError && <p className="text-red-600 text-sm mb-2">{zipError}</p>}
              <div className="grid grid-cols-8 gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(zone => {
                  const colors: Record<number, string> = {
                    1: 'bg-red-500',
                    2: 'bg-orange-500',
                    3: 'bg-yellow-500',
                    4: 'bg-lime-500',
                    5: 'bg-green-500',
                    6: 'bg-cyan-500',
                    7: 'bg-blue-500',
                    8: 'bg-violet-500',
                  }
                  return (
                    <button
                      key={zone}
                      onClick={() => setInputs(prev => ({ ...prev, climateZone: zone }))}
                      className={`p-2 rounded text-white font-bold text-sm transition-all ${colors[zone]} ${
                        inputs.climateZone === zone ? 'ring-2 ring-offset-2 ring-primary' : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      {zone}
                    </button>
                  )
                })}
              </div>
              {inputs.climateZone && (
                <p className="text-sm text-accent mt-2 font-medium">
                  Selected: {getZoneName(inputs.climateZone)}
                </p>
              )}
            </div>
          </div>

          {/* Right Column - Home & Cost Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Home Size (sq ft)
              </label>
              <input
                type="number"
                value={inputs.homeSquareFeet || ''}
                onChange={e => setInputs(prev => ({ ...prev, homeSquareFeet: Number(e.target.value) }))}
                className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., 1500"
                min="100"
                max="50000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Annual Energy Bill ($)
              </label>
              <input
                type="number"
                value={inputs.annualEnergyBill || ''}
                onChange={e => setInputs(prev => ({ ...prev, annualEnergyBill: Number(e.target.value) }))}
                className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., 2400"
                min="0"
                max="100000"
              />
              <p className="text-xs text-text-muted mt-1">Total annual gas + electric costs</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Estimated Upgrade Cost ($)
              </label>
              <input
                type="number"
                value={inputs.upgradeCost || ''}
                onChange={e => setInputs(prev => ({ ...prev, upgradeCost: Number(e.target.value) }))}
                className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder={`Est: $${estimatedUpgradeCost.toLocaleString()}`}
                min="0"
                max="100000"
              />
              <p className="text-xs text-text-muted mt-1">
                Leave blank to use estimate: ${estimatedUpgradeCost.toLocaleString()} ({typicalUpgradeCosts[inputs.location].description})
              </p>
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="mt-6">
          <button
            onClick={handleCalculate}
            disabled={!inputs.climateZone || inputs.currentRValue >= inputs.targetRValue}
            className="w-full py-4 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:bg-surface-300 disabled:cursor-not-allowed transition-colors font-semibold text-lg"
          >
            Calculate Energy Savings
          </button>
          {inputs.currentRValue >= inputs.targetRValue && inputs.currentRValue > 0 && (
            <p className="text-red-600 text-sm mt-2 text-center">
              Target R-value must be higher than current R-value
            </p>
          )}
        </div>

        {/* Results */}
        {showResults && results && (
          <div ref={resultsRef} className="mt-8 pt-8 border-t border-surface-200 scroll-mt-4">
            <h3 className="text-lg font-bold text-primary mb-4">Analysis Results</h3>

            {/* Primary Metrics Table */}
            <div className="border border-surface-200 rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium">Metric</th>
                    <th className="px-4 py-2 text-right font-medium">Value</th>
                    <th className="px-4 py-2 text-left font-medium hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Annual Savings</td>
                    <td className="px-4 py-3 text-right font-mono">${results.annualSavings}/yr</td>
                    <td className="px-4 py-3 text-text-muted hidden sm:table-cell">{results.savingsPercent}% of total energy bill</td>
                  </tr>
                  <tr className="bg-surface-50">
                    <td className="px-4 py-3 font-medium">Monthly Savings</td>
                    <td className="px-4 py-3 text-right font-mono">${Math.round(results.annualSavings / 12)}/mo</td>
                    <td className="px-4 py-3 text-text-muted hidden sm:table-cell">Average across all months</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Simple Payback</td>
                    <td className="px-4 py-3 text-right font-mono">{results.paybackYears} yrs</td>
                    <td className="px-4 py-3 text-text-muted hidden sm:table-cell">Cost / annual savings</td>
                  </tr>
                  <tr className="bg-surface-50">
                    <td className="px-4 py-3 font-medium">Heat Transfer Reduction</td>
                    <td className="px-4 py-3 text-right font-mono">{Math.round((1 - inputs.currentRValue / inputs.targetRValue) * 100)}%</td>
                    <td className="px-4 py-3 text-text-muted hidden sm:table-cell">1 - (R<sub>old</sub> / R<sub>new</sub>)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Calculation Parameters */}
            <div className="bg-surface-50 border border-surface-200 rounded-lg p-4 mb-6">
              <h4 className="text-sm font-bold text-primary mb-3">Calculation Parameters</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-text-muted block">R-Value Change</span>
                  <span className="font-mono font-medium">R-{inputs.currentRValue} → R-{inputs.targetRValue}</span>
                </div>
                <div>
                  <span className="text-text-muted block">Location Factor</span>
                  <span className="font-mono font-medium">{(locationEnergyShare[inputs.location] * 100)}% of envelope</span>
                </div>
                <div>
                  <span className="text-text-muted block">HVAC Load (Zone {inputs.climateZone})</span>
                  <span className="font-mono font-medium">{(hvacEnergyPortion[inputs.climateZone || 5] * 100)}% of bill</span>
                </div>
                <div>
                  <span className="text-text-muted block">Project Cost</span>
                  <span className="font-mono font-medium">${(inputs.upgradeCost || estimatedUpgradeCost).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Long-term Projection Table */}
            <div className="border border-surface-200 rounded-lg overflow-hidden mb-6">
              <div className="bg-surface-100 px-4 py-2 border-b border-surface-200">
                <h4 className="text-sm font-bold text-primary">Long-Term Projection (2% annual energy cost escalation)</h4>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-surface-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-text-muted">Period</th>
                    <th className="px-4 py-2 text-right font-medium text-text-muted">Cumulative Savings</th>
                    <th className="px-4 py-2 text-right font-medium text-text-muted">Net ROI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-200">
                  <tr className="bg-white">
                    <td className="px-4 py-2">10 Years</td>
                    <td className="px-4 py-2 text-right font-mono">${results.tenYearSavings.toLocaleString()}</td>
                    <td className="px-4 py-2 text-right font-mono">{results.roi10Year >= 0 ? '+' : ''}{results.roi10Year}%</td>
                  </tr>
                  <tr className="bg-surface-50">
                    <td className="px-4 py-2">20 Years</td>
                    <td className="px-4 py-2 text-right font-mono">${results.twentyYearSavings.toLocaleString()}</td>
                    <td className="px-4 py-2 text-right font-mono">{results.roi20Year >= 0 ? '+' : ''}{results.roi20Year}%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">30 Years</td>
                    <td className="px-4 py-2 text-right font-mono">${results.lifetimeSavings.toLocaleString()}</td>
                    <td className="px-4 py-2 text-right font-mono">+{Math.round(((results.lifetimeSavings - (inputs.upgradeCost || estimatedUpgradeCost)) / (inputs.upgradeCost || estimatedUpgradeCost)) * 100)}%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tax Credit Adjustment */}
            <div className="border border-surface-200 rounded-lg overflow-hidden mb-6">
              <div className="bg-surface-100 px-4 py-2 border-b border-surface-200">
                <h4 className="text-sm font-bold text-primary">Federal Tax Credit Impact (IRA 25C)</h4>
              </div>
              <div className="p-4">
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-text-muted block text-xs">Credit Amount (30%, max $1,200)</span>
                    <span className="font-mono font-medium">${Math.min(Math.round((inputs.upgradeCost || estimatedUpgradeCost) * 0.3), 1200).toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-text-muted block text-xs">Adjusted Project Cost</span>
                    <span className="font-mono font-medium">${((inputs.upgradeCost || estimatedUpgradeCost) - Math.min((inputs.upgradeCost || estimatedUpgradeCost) * 0.3, 1200)).toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-text-muted block text-xs">Adjusted Payback</span>
                    <span className="font-mono font-medium">{Math.round(((inputs.upgradeCost || estimatedUpgradeCost) - Math.min((inputs.upgradeCost || estimatedUpgradeCost) * 0.3, 1200)) / results.annualSavings * 10) / 10} yrs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Assumptions & Limitations */}
            <details className="border border-surface-200 rounded-lg mb-6">
              <summary className="px-4 py-3 bg-surface-50 cursor-pointer text-sm font-medium text-primary hover:bg-surface-100">
                Assumptions & Limitations
              </summary>
              <div className="p-4 text-xs text-text-muted space-y-2">
                <p><strong>Heat transfer model:</strong> Q = ΔT / R. Savings proportional to (1 - R<sub>old</sub>/R<sub>new</sub>).</p>
                <p><strong>Location energy share:</strong> Based on DOE estimates for typical single-family homes. Attic=25%, Walls=35%, Basement/Crawl=10%.</p>
                <p><strong>HVAC portion:</strong> Varies by climate zone (45-65% of total energy bill per EIA data).</p>
                <p><strong>Inflation:</strong> 2% annual energy cost escalation (historical average).</p>
                <p><strong>Not included:</strong> Air sealing benefits, HVAC sizing reduction, comfort improvements, peak demand reduction.</p>
              </div>
            </details>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/insulation-cost-calculator"
                className="flex-1 px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary-700 transition-colors font-medium text-center"
              >
                Detailed Cost Estimate
              </Link>
              <Link
                href="/r-value-calculator"
                className="flex-1 px-4 py-2 bg-surface-200 text-primary text-sm rounded hover:bg-surface-300 transition-colors font-medium text-center"
              >
                R-Value Requirements
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Methodology Note */}
      <div className="bg-surface-50 p-6 border-t border-surface-200">
        <h4 className="font-semibold text-primary mb-2">How We Calculate Savings</h4>
        <p className="text-sm text-text-muted">
          Our calculator uses the inverse relationship between R-value and heat transfer.
          We estimate that {locationEnergyShare[inputs.location] * 100}% of HVAC energy loss occurs through your {inputs.location.replace('-', ' ')},
          with {(hvacEnergyPortion[inputs.climateZone || 5] * 100)}% of your energy bill going to heating/cooling in your climate zone.
          Actual savings vary based on home construction, HVAC efficiency, and usage patterns.
        </p>
      </div>
    </div>
  )
}
