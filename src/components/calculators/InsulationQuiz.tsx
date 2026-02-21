'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { getZoneDataFromZip } from '@/lib/climate-zones'
import materialsData from '@/../data/insulation-materials.json'

interface Material {
  id: string
  name: string
  shortName: string
  rValuePerInch: { min: number; max: number } | null
  costPerSqFtInstalled: { min: number; max: number }
  costPerSqFtDIY?: { min: number; max: number } | null
  diyFriendly: boolean
  diyNotes?: string
  form: string
  bestFor: string[]
  notRecommendedFor?: string[]
  applicableLocations: string[]
}

type Location = 'attic' | 'walls' | 'basement' | 'crawl-space' | 'garage'
type ProjectType = 'new-construction' | 'retrofit'
type BudgetPriority = 'cheapest' | 'balanced' | 'best-performance'
type InstallationType = 'diy' | 'professional'

interface QuizAnswers {
  location: Location | null
  projectType: ProjectType | null
  zipCode: string
  climateZone: number | null
  budget: BudgetPriority | null
  installation: InstallationType | null
}

interface Recommendation {
  primary: Material
  alternatives: Material[]
  reasons: string[]
  costEstimate: { min: number; max: number }
  rValueTarget: number
  guideLink: string
}

const locationOptions = [
  { id: 'attic', label: 'Attic', icon: '🏠', description: 'Floor or roof deck insulation' },
  { id: 'walls', label: 'Walls', icon: '🧱', description: 'Exterior wall cavities' },
  { id: 'basement', label: 'Basement', icon: '🏗️', description: 'Basement walls or ceiling' },
  { id: 'crawl-space', label: 'Crawl Space', icon: '🕳️', description: 'Floor above or encapsulation' },
  { id: 'garage', label: 'Garage', icon: '🚗', description: 'Attached garage walls/ceiling' },
]

const projectTypeOptions = [
  {
    id: 'new-construction',
    label: 'New Construction',
    description: 'Building new or full remodel with open cavities'
  },
  {
    id: 'retrofit',
    label: 'Retrofit / Existing Home',
    description: 'Adding insulation to existing structure'
  },
]

const budgetOptions = [
  {
    id: 'cheapest',
    label: 'Most Affordable',
    icon: '💰',
    description: 'Lowest upfront cost, meets code minimum'
  },
  {
    id: 'balanced',
    label: 'Best Value',
    icon: '⚖️',
    description: 'Balance of cost and performance'
  },
  {
    id: 'best-performance',
    label: 'Maximum Performance',
    icon: '🏆',
    description: 'Highest R-value and energy savings'
  },
]

const installationOptions = [
  {
    id: 'diy',
    label: 'DIY',
    icon: '🔨',
    description: 'I plan to install it myself'
  },
  {
    id: 'professional',
    label: 'Hire a Professional',
    icon: '👷',
    description: 'I want it professionally installed'
  },
]

// R-value targets by climate zone and location
const rValueTargets: Record<number, Record<string, number>> = {
  1: { attic: 30, walls: 13, basement: 0, 'crawl-space': 0, garage: 13 },
  2: { attic: 38, walls: 13, basement: 0, 'crawl-space': 0, garage: 13 },
  3: { attic: 38, walls: 13, basement: 5, 'crawl-space': 5, garage: 13 },
  4: { attic: 49, walls: 13, basement: 10, 'crawl-space': 10, garage: 13 },
  5: { attic: 49, walls: 20, basement: 10, 'crawl-space': 10, garage: 20 },
  6: { attic: 49, walls: 20, basement: 15, 'crawl-space': 15, garage: 20 },
  7: { attic: 60, walls: 21, basement: 15, 'crawl-space': 15, garage: 21 },
  8: { attic: 60, walls: 21, basement: 15, 'crawl-space': 15, garage: 21 },
}

// Guide links by location
const guideLinks: Record<Location, string> = {
  attic: '/attic-insulation',
  walls: '/wall-insulation',
  basement: '/basement-insulation',
  'crawl-space': '/crawl-space-insulation',
  garage: '/garage-insulation',
}

export default function InsulationQuiz() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<QuizAnswers>({
    location: null,
    projectType: null,
    zipCode: '',
    climateZone: null,
    budget: null,
    installation: null,
  })
  const [zipError, setZipError] = useState('')
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const scrollToResults = () => {
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const materials = materialsData.materials as Material[]

  const handleLocationSelect = (location: Location) => {
    setAnswers(prev => ({ ...prev, location }))
    setStep(2)
  }

  const handleProjectTypeSelect = (projectType: ProjectType) => {
    setAnswers(prev => ({ ...prev, projectType }))
    setStep(3)
  }

  const handleZipSubmit = () => {
    const zoneData = getZoneDataFromZip(answers.zipCode)
    if (zoneData) {
      setAnswers(prev => ({ ...prev, climateZone: zoneData.zone.zone }))
      setZipError('')
      setStep(4)
    } else {
      setZipError('Could not find climate zone for this ZIP code. Please try another or select a zone manually.')
    }
  }

  const handleZoneSelect = (zone: number) => {
    setAnswers(prev => ({ ...prev, climateZone: zone }))
    setStep(4)
  }

  const handleBudgetSelect = (budget: BudgetPriority) => {
    setAnswers(prev => ({ ...prev, budget }))
    setStep(5)
  }

  const handleInstallationSelect = (installation: InstallationType) => {
    setAnswers(prev => ({ ...prev, installation }))
    generateRecommendation({ ...answers, installation })
    setStep(6)
    scrollToResults()
  }

  const generateRecommendation = (finalAnswers: QuizAnswers) => {
    const { location, projectType, climateZone, budget, installation } = finalAnswers
    if (!location || !projectType || !climateZone || !budget || !installation) return

    const rValueTarget = rValueTargets[climateZone][location]

    // Map quiz location to material applicableLocations
    const locationMapping: Record<Location, string[]> = {
      attic: ['attic-floor', 'attic-roof-deck'],
      walls: ['walls', 'walls-exterior'],
      basement: ['basement'],
      'crawl-space': ['crawl-space'],
      garage: ['garage', 'walls'],
    }

    // Filter materials applicable to this location
    let applicableMaterials = materials.filter(m => {
      const locations = locationMapping[location]
      return locations.some(loc => m.applicableLocations.includes(loc))
    })

    // Filter by DIY if needed
    if (installation === 'diy') {
      applicableMaterials = applicableMaterials.filter(m => m.diyFriendly)
    }

    // Filter out materials not recommended for specific scenarios
    if (projectType === 'retrofit') {
      // For retrofit walls, blown-in and spray foam work better
      if (location === 'walls') {
        applicableMaterials = applicableMaterials.filter(m =>
          m.form === 'blown' || m.form === 'spray' ||
          (installation === 'diy' && m.form === 'batt') // DIY can still use batts in accessible areas
        )
      }
    }

    // Score and sort materials based on budget priority
    const scoredMaterials = applicableMaterials.map(m => {
      let score = 0
      const reasons: string[] = []

      // R-value per inch scoring
      const avgRPerInch = m.rValuePerInch
        ? (m.rValuePerInch.min + m.rValuePerInch.max) / 2
        : 0

      // Cost scoring (use DIY cost if DIY, else installed)
      const cost = installation === 'diy' && m.costPerSqFtDIY
        ? m.costPerSqFtDIY
        : m.costPerSqFtInstalled
      const avgCost = (cost.min + cost.max) / 2

      // Budget-based scoring
      if (budget === 'cheapest') {
        score += (5 - avgCost) * 30 // Lower cost = higher score
        if (avgCost < 1) reasons.push('Most affordable option')
      } else if (budget === 'best-performance') {
        score += avgRPerInch * 10 // Higher R-value = higher score
        if (avgRPerInch >= 5) reasons.push('Excellent R-value per inch')
      } else { // balanced
        score += avgRPerInch * 5 + (5 - avgCost) * 15
      }

      // DIY bonus
      if (installation === 'diy' && m.diyFriendly && m.costPerSqFtDIY) {
        score += 10
        reasons.push('DIY-friendly with significant cost savings')
      }

      // Location-specific bonuses
      if (location === 'attic') {
        if (m.form === 'blown') {
          score += 15
          if (projectType === 'retrofit') reasons.push('Easy to add to existing attic')
        }
        if (climateZone >= 1 && climateZone <= 3 && m.id === 'radiant-barrier') {
          score += 20
          reasons.push('Radiant barriers are very effective in hot climates')
        }
      }

      if (location === 'basement' || location === 'crawl-space') {
        if (m.id === 'xps' || m.id === 'closed-cell-spray-foam') {
          score += 15
          reasons.push('Excellent moisture resistance for below-grade')
        }
      }

      if (location === 'walls' && projectType === 'new-construction') {
        if (m.form === 'batt') {
          score += 10
          reasons.push('Standard choice for new construction wall cavities')
        }
      }

      // Climate zone bonuses
      if (climateZone >= 5) {
        if (m.id === 'closed-cell-spray-foam') {
          score += 10
          reasons.push('Superior air sealing for cold climates')
        }
        if (m.id === 'xps') {
          score += 5
          reasons.push('Stable R-value in cold temperatures')
        }
        // Penalize polyiso in cold climates
        if (m.id === 'polyiso') {
          score -= 10
        }
      } else if (climateZone <= 3) {
        // Warmer climates
        if (m.id === 'polyiso') {
          score += 5
          reasons.push('High R-value, performs well in warm climates')
        }
      }

      return { material: m, score, reasons }
    }).sort((a, b) => b.score - a.score)

    if (scoredMaterials.length === 0) {
      return // No suitable materials found
    }

    const primary = scoredMaterials[0]
    const alternatives = scoredMaterials.slice(1, 4).map(s => s.material)

    // Calculate cost estimate for 500 sq ft (reasonable project size)
    const projectSqFt = 500
    const cost = answers.installation === 'diy' && primary.material.costPerSqFtDIY
      ? primary.material.costPerSqFtDIY
      : primary.material.costPerSqFtInstalled

    setRecommendation({
      primary: primary.material,
      alternatives,
      reasons: primary.reasons.slice(0, 3),
      costEstimate: {
        min: Math.round(cost.min * projectSqFt),
        max: Math.round(cost.max * projectSqFt),
      },
      rValueTarget,
      guideLink: guideLinks[location],
    })
  }

  const resetQuiz = () => {
    setStep(1)
    setAnswers({
      location: null,
      projectType: null,
      zipCode: '',
      climateZone: null,
      budget: null,
      installation: null,
    })
    setRecommendation(null)
    setZipError('')
  }

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1)
      // Clear the answer for the step we're going back from
      if (step === 6) setRecommendation(null)
    }
  }

  // Progress indicator
  const totalSteps = 5
  const progress = Math.min(step, totalSteps)

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Progress Bar */}
      {step < 6 && (
        <div className="bg-surface-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text-muted">
              Step {progress} of {totalSteps}
            </span>
            {step > 1 && (
              <button
                onClick={goBack}
                className="text-sm text-primary hover:text-primary-700 font-medium"
              >
                ← Back
              </button>
            )}
          </div>
          <div className="w-full bg-surface-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(progress / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Step 1: Location */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Where do you need insulation?
            </h2>
            <p className="text-text-muted mb-6">
              Select the area of your home you want to insulate.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {locationOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleLocationSelect(option.id as Location)}
                  className="p-4 border-2 border-surface-200 rounded-lg hover:border-primary hover:bg-primary-50 transition-colors text-left group"
                >
                  <span className="text-3xl mb-2 block">{option.icon}</span>
                  <h3 className="font-semibold text-primary group-hover:text-primary-700">
                    {option.label}
                  </h3>
                  <p className="text-sm text-text-muted">{option.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Project Type */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              What type of project is this?
            </h2>
            <p className="text-text-muted mb-6">
              This helps us recommend the best installation method.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {projectTypeOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleProjectTypeSelect(option.id as ProjectType)}
                  className="p-6 border-2 border-surface-200 rounded-lg hover:border-primary hover:bg-primary-50 transition-colors text-left group"
                >
                  <h3 className="font-semibold text-lg text-primary group-hover:text-primary-700 mb-1">
                    {option.label}
                  </h3>
                  <p className="text-text-muted">{option.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Climate Zone */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              What&apos;s your climate zone?
            </h2>
            <p className="text-text-muted mb-6">
              Enter your ZIP code or select your zone.
            </p>

            {/* ZIP Code Lookup */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-text mb-2">
                ZIP Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={answers.zipCode}
                  onChange={e => setAnswers(prev => ({ ...prev, zipCode: e.target.value.replace(/\D/g, '').slice(0, 5) }))}
                  placeholder="Enter ZIP code"
                  className="flex-1 px-4 py-3 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  maxLength={5}
                />
                <button
                  onClick={handleZipSubmit}
                  disabled={answers.zipCode.length !== 5}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 disabled:bg-surface-300 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  Look Up
                </button>
              </div>
              {zipError && (
                <p className="text-red-600 text-sm mt-2">{zipError}</p>
              )}
            </div>

            {/* Or Select Zone */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-text-muted">
                  Or select your climate zone
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mt-6">
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
                    onClick={() => handleZoneSelect(zone)}
                    className={`p-3 rounded-lg text-white font-bold text-lg ${colors[zone]} hover:opacity-90 transition-opacity`}
                  >
                    {zone}
                  </button>
                )
              })}
            </div>
            <p className="text-center text-sm text-text-muted mt-4">
              <Link href="/climate-zone-map" className="text-primary hover:underline">
                View climate zone map →
              </Link>
            </p>
          </div>
        )}

        {/* Step 4: Budget Priority */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              What&apos;s your priority?
            </h2>
            <p className="text-text-muted mb-6">
              Help us balance cost vs. performance in our recommendation.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {budgetOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleBudgetSelect(option.id as BudgetPriority)}
                  className="p-6 border-2 border-surface-200 rounded-lg hover:border-primary hover:bg-primary-50 transition-colors text-center group"
                >
                  <span className="text-4xl mb-3 block">{option.icon}</span>
                  <h3 className="font-semibold text-lg text-primary group-hover:text-primary-700 mb-1">
                    {option.label}
                  </h3>
                  <p className="text-sm text-text-muted">{option.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Installation Type */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Who will install it?
            </h2>
            <p className="text-text-muted mb-6">
              This affects which materials we recommend and cost estimates.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {installationOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleInstallationSelect(option.id as InstallationType)}
                  className="p-6 border-2 border-surface-200 rounded-lg hover:border-primary hover:bg-primary-50 transition-colors text-center group"
                >
                  <span className="text-4xl mb-3 block">{option.icon}</span>
                  <h3 className="font-semibold text-lg text-primary group-hover:text-primary-700 mb-1">
                    {option.label}
                  </h3>
                  <p className="text-text-muted">{option.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Results */}
        {step === 6 && recommendation && (
          <div ref={resultsRef} className="scroll-mt-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Your Personalized Recommendation
              </h2>
              <p className="text-text-muted">
                Based on your {answers.location?.replace('-', ' ')}, climate zone {answers.climateZone}, and {answers.budget?.replace('-', ' ')} priority.
              </p>
            </div>

            {/* Primary Recommendation */}
            <div className="bg-primary-50 border-2 border-primary rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-2">
                    Top Pick
                  </span>
                  <h3 className="text-2xl font-bold text-primary">
                    {recommendation.primary.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-text-muted">Est. Cost (500 sq ft)</p>
                  <p className="text-xl font-bold text-accent">
                    ${recommendation.costEstimate.min.toLocaleString()} – ${recommendation.costEstimate.max.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Key Details */}
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-text-muted">R-Value Per Inch</p>
                  <p className="font-semibold text-primary">
                    {recommendation.primary.rValuePerInch
                      ? `R-${recommendation.primary.rValuePerInch.min} to R-${recommendation.primary.rValuePerInch.max}`
                      : 'N/A (reflective)'}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-text-muted">Target R-Value</p>
                  <p className="font-semibold text-primary">R-{recommendation.rValueTarget}</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-text-muted">Form</p>
                  <p className="font-semibold text-primary capitalize">
                    {recommendation.primary.form.replace('-', ' ')}
                  </p>
                </div>
              </div>

              {/* Why We Recommend */}
              {recommendation.reasons.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">Why we recommend this:</p>
                  <ul className="space-y-1">
                    {recommendation.reasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text">
                        <span className="text-accent mt-0.5">✓</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Technical Specifications Table */}
            <div className="border border-surface-200 rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium">Parameter</th>
                    <th className="px-4 py-2 text-right font-medium">Value</th>
                    <th className="px-4 py-2 text-left font-medium hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Target R-Value</td>
                    <td className="px-4 py-3 text-right font-mono">R-{recommendation.rValueTarget}</td>
                    <td className="px-4 py-3 text-text-muted hidden sm:table-cell">Per 2021 IECC Zone {answers.climateZone}</td>
                  </tr>
                  <tr className="bg-surface-50">
                    <td className="px-4 py-3 font-medium">R-Value/Inch</td>
                    <td className="px-4 py-3 text-right font-mono">
                      {recommendation.primary.rValuePerInch
                        ? `R-${recommendation.primary.rValuePerInch.min}–${recommendation.primary.rValuePerInch.max}`
                        : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-text-muted hidden sm:table-cell">{recommendation.primary.shortName} nominal rating</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Thickness Required</td>
                    <td className="px-4 py-3 text-right font-mono">
                      {recommendation.primary.rValuePerInch
                        ? `~${Math.ceil(recommendation.rValueTarget / ((recommendation.primary.rValuePerInch.min + recommendation.primary.rValuePerInch.max) / 2))}"`
                        : '—'}
                    </td>
                    <td className="px-4 py-3 text-text-muted hidden sm:table-cell">Calculated: R-target ÷ R/inch</td>
                  </tr>
                  <tr className="bg-surface-50">
                    <td className="px-4 py-3 font-medium">Cost/ft² ({answers.installation === 'diy' ? 'DIY' : 'Installed'})</td>
                    <td className="px-4 py-3 text-right font-mono">
                      ${(recommendation.costEstimate.min / 500).toFixed(2)}–${(recommendation.costEstimate.max / 500).toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-text-muted hidden sm:table-cell">2024 national average</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Installation Method</td>
                    <td className="px-4 py-3 text-right capitalize">{recommendation.primary.form}</td>
                    <td className="px-4 py-3 text-text-muted hidden sm:table-cell">
                      {recommendation.primary.diyFriendly ? 'DIY suitable' : 'Professional recommended'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Application-Specific Technical Notes */}
            <details className="border border-surface-200 rounded-lg mb-6">
              <summary className="px-4 py-3 bg-surface-50 cursor-pointer text-sm font-medium text-primary hover:bg-surface-100">
                Installation Technical Notes
              </summary>
              <div className="p-4 text-xs text-text-muted space-y-3">
                {answers.location === 'attic' && (
                  <div>
                    <strong className="text-text">Attic Installation:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Air seal all penetrations before insulating (reduces R-value loss 15-25%)</li>
                      <li>• Maintain soffit ventilation clearance (min 1&quot; gap with baffles)</li>
                      <li>• Avoid compressing material around obstacles</li>
                      <li>• For blown-in: verify settled density meets mfr specs</li>
                    </ul>
                  </div>
                )}
                {(answers.location === 'basement' || answers.location === 'crawl-space') && (
                  <div>
                    <strong className="text-text">Below-Grade Considerations:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Verify no active water intrusion before installation</li>
                      <li>• {recommendation.primary.id === 'xps' || recommendation.primary.id === 'closed-cell-spray-foam' ? 'Material provides inherent moisture resistance (Class II-III vapor retarder)' : 'Install vapor barrier on warm side of assembly'}</li>
                      <li>• Leave 3&quot; gap at bottom for termite inspection strip (required in many jurisdictions)</li>
                      <li>• ASTM E2178 permeance: XPS ~1.0 perm/inch, closed-cell foam ~1.0 perm @ 2&quot;</li>
                    </ul>
                  </div>
                )}
                {answers.location === 'walls' && (
                  <div>
                    <strong className="text-text">Wall Cavity Installation:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• {answers.projectType === 'retrofit' ? 'Retrofit requires access holes (2-3&quot; dia) at top/bottom of each bay' : 'Fill cavities completely without compression'}</li>
                      <li>• Account for thermal bridging: whole-wall R-value ≈ 75-85% of cavity R-value (16&quot; OC framing)</li>
                      <li>• For 2×4 walls: max cavity depth 3.5&quot;. For 2×6: 5.5&quot;</li>
                      <li>• Consider adding exterior continuous insulation to address thermal bridging</li>
                    </ul>
                  </div>
                )}
                {answers.location === 'garage' && (
                  <div>
                    <strong className="text-text">Garage Installation:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Shared wall with conditioned space requires fire-rated assembly (check local code)</li>
                      <li>• Garage ceiling (if above living space): air seal all penetrations</li>
                      <li>• Do not insulate exterior walls of detached unheated garage (unnecessary)</li>
                    </ul>
                  </div>
                )}
                <div className="pt-2 border-t border-surface-200">
                  <strong className="text-text">General:</strong>
                  <p className="mt-1">
                    Follow all manufacturer installation instructions. Wear appropriate PPE (N95 respirator, gloves, long sleeves for fibrous materials).
                    Verify local code compliance before starting work.
                  </p>
                </div>
              </div>
            </details>

            {/* Expected Benefits */}
            <div className="bg-primary-50 rounded-lg p-5 mb-6">
              <h4 className="font-semibold text-primary mb-3">What You Can Expect</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent mb-1">
                    {answers.climateZone && answers.climateZone >= 5 ? '15-25%' : '10-20%'}
                  </p>
                  <p className="text-text-muted">Potential energy savings on heating/cooling</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary mb-1">5-10 yrs</p>
                  <p className="text-text-muted">Typical payback period for insulation upgrades</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary mb-1">50+ yrs</p>
                  <p className="text-text-muted">Expected lifespan of most insulation materials</p>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-4 text-center">
                Actual results depend on your home&apos;s construction, existing insulation levels, and energy usage patterns.
              </p>
            </div>

            {/* Alternatives */}
            {recommendation.alternatives.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">Also Consider</h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  {recommendation.alternatives.map(alt => (
                    <div key={alt.id} className="bg-surface-50 rounded-lg p-4">
                      <h5 className="font-medium text-primary">{alt.shortName}</h5>
                      <p className="text-sm text-text-muted">
                        {alt.rValuePerInch
                          ? `R-${alt.rValuePerInch.min}–${alt.rValuePerInch.max}/inch`
                          : 'Radiant heat control'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Summary */}
            <div className="bg-surface-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-primary mb-2">Your Selections</h4>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <div><span className="text-text-muted">Location:</span> <span className="font-medium capitalize">{answers.location?.replace('-', ' ')}</span></div>
                <div><span className="text-text-muted">Project:</span> <span className="font-medium capitalize">{answers.projectType?.replace('-', ' ')}</span></div>
                <div><span className="text-text-muted">Climate Zone:</span> <span className="font-medium">Zone {answers.climateZone}</span></div>
                <div><span className="text-text-muted">Priority:</span> <span className="font-medium capitalize">{answers.budget?.replace('-', ' ')}</span></div>
                <div><span className="text-text-muted">Installation:</span> <span className="font-medium capitalize">{answers.installation}</span></div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={recommendation.guideLink}
                className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
              >
                Read {answers.location?.replace('-', ' ')} Insulation Guide
              </Link>
              <Link
                href="/insulation-cost-calculator"
                className="flex-1 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium text-center"
              >
                Get Detailed Cost Estimate
              </Link>
              <button
                onClick={resetQuiz}
                className="px-6 py-3 border-2 border-surface-300 text-text rounded-lg hover:border-primary hover:text-primary transition-colors font-medium"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
