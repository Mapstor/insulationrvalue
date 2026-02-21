import zipToZoneData from '@/data/zip-to-zone.json'
import ieccData from '@/data/iecc-requirements.json'

export interface ClimateZone {
  zone: number
  name: string
  description: string
  primaryConcern: 'heating' | 'cooling' | 'mixed'
  radiantBarrierBenefit: string
  heatingDegreeDays: { min: number; max: number }
  coolingDegreeDays: { min: number; max: number }
}

export interface RValueRequirements {
  ceiling_attic: string
  wood_frame_wall: string
  mass_wall: string
  floor: string
  basement_wall: string
  crawlspace_wall: string
  slab_edge: string
}

export interface EnergyStarRecommended {
  attic: string
  walls: string
  floor: string
  notes: string
}

export interface ZoneData {
  zone: ClimateZone
  requirements: RValueRequirements
  energyStarRecommended: EnergyStarRecommended
}

/**
 * Get climate zone number from ZIP code
 */
export function getZoneFromZip(zipCode: string): number | null {
  const cleanZip = zipCode.replace(/\D/g, '').padStart(5, '0')

  if (cleanZip.length < 3) {
    return null
  }

  const prefix = cleanZip.substring(0, 3)
  const zipPrefixes = zipToZoneData.zipPrefixes as Record<string, number>

  return zipPrefixes[prefix] || null
}

/**
 * Get state data including primary zone
 */
export function getStateData(stateCode: string): { zones: number[]; primaryZone: number } | null {
  const upperState = stateCode.toUpperCase()
  const states = zipToZoneData.states as Record<string, { zones: number[]; primaryZone: number }>

  return states[upperState] || null
}

/**
 * Get full zone data including requirements and recommendations
 */
export function getZoneData(zoneNumber: number): ZoneData | null {
  const zoneKey = String(zoneNumber)
  const zones = ieccData.zones as Record<string, {
    name: string
    description: string
    requirements: RValueRequirements
    energyStarRecommended: EnergyStarRecommended
    heatingDegreeDays: { min: number; max: number }
    coolingDegreeDays: { min: number; max: number }
    primaryConcern: string
    radiantBarrierBenefit: string
  }>

  const zoneInfo = zones[zoneKey]

  if (!zoneInfo) {
    return null
  }

  return {
    zone: {
      zone: zoneNumber,
      name: zoneInfo.name,
      description: zoneInfo.description,
      primaryConcern: zoneInfo.primaryConcern as 'heating' | 'cooling' | 'mixed',
      radiantBarrierBenefit: zoneInfo.radiantBarrierBenefit,
      heatingDegreeDays: zoneInfo.heatingDegreeDays,
      coolingDegreeDays: zoneInfo.coolingDegreeDays,
    },
    requirements: zoneInfo.requirements,
    energyStarRecommended: zoneInfo.energyStarRecommended,
  }
}

/**
 * Get zone data from ZIP code (combines both lookups)
 */
export function getZoneDataFromZip(zipCode: string): ZoneData | null {
  const zoneNumber = getZoneFromZip(zipCode)

  if (!zoneNumber) {
    return null
  }

  return getZoneData(zoneNumber)
}

/**
 * Get all zones for listing
 */
export function getAllZones(): ZoneData[] {
  const zones: ZoneData[] = []

  for (let i = 1; i <= 8; i++) {
    const zoneData = getZoneData(i)
    if (zoneData) {
      zones.push(zoneData)
    }
  }

  return zones
}

/**
 * Validate ZIP code format
 */
export function isValidZipCode(zipCode: string): boolean {
  const cleanZip = zipCode.replace(/\D/g, '')
  return cleanZip.length === 5
}

/**
 * Format location display for results
 */
export function formatLocationDisplay(location: keyof RValueRequirements): string {
  const displayNames: Record<keyof RValueRequirements, string> = {
    ceiling_attic: 'Ceiling/Attic',
    wood_frame_wall: 'Wood-Frame Walls',
    mass_wall: 'Mass Walls (CMU/Concrete)',
    floor: 'Floor Over Unconditioned Space',
    basement_wall: 'Basement Walls',
    crawlspace_wall: 'Crawl Space Walls',
    slab_edge: 'Slab Edge',
  }

  return displayNames[location] || location
}

/**
 * Parse R-value string to extract numeric value for calculations
 */
export function parseRequirementValue(requirement: string): number | null {
  if (requirement === 'NR') {
    return 0
  }

  // Match patterns like "R-30", "R-49", "R-20+5ci", "R-13+10ci"
  const match = requirement.match(/R-(\d+)/)
  if (match) {
    return parseInt(match[1], 10)
  }

  return null
}

/**
 * Get requirement notes (ci = continuous insulation, etc.)
 */
export function getRequirementNotes(): Record<string, string> {
  return ieccData.notes as Record<string, string>
}

/**
 * Determine if a zone is heating-dominant, cooling-dominant, or mixed
 */
export function getZoneCharacteristics(zoneNumber: number): {
  type: 'heating' | 'cooling' | 'mixed'
  description: string
  recommendations: string[]
} {
  const characteristics: Record<number, {
    type: 'heating' | 'cooling' | 'mixed'
    description: string
    recommendations: string[]
  }> = {
    1: {
      type: 'cooling',
      description: 'Very hot and humid climate with minimal heating needs.',
      recommendations: [
        'Focus on radiant barriers in attics',
        'Air sealing is critical for humidity control',
        'Consider reflective roof coatings',
      ],
    },
    2: {
      type: 'cooling',
      description: 'Hot climate with some heating needs in winter.',
      recommendations: [
        'Radiant barriers provide excellent ROI',
        'Proper attic ventilation is essential',
        'Consider spray foam for moisture control',
      ],
    },
    3: {
      type: 'mixed',
      description: 'Warm climate with both heating and cooling demands.',
      recommendations: [
        'Balance heating and cooling needs',
        'Air sealing provides major benefits',
        'Consider continuous insulation on walls',
      ],
    },
    4: {
      type: 'heating',
      description: 'Mixed climate with significant heating and cooling loads.',
      recommendations: [
        'Focus on air sealing and attic insulation',
        'Continuous insulation becomes important',
        'Consider basement/crawl space insulation',
      ],
    },
    5: {
      type: 'heating',
      description: 'Cold climate with dominant heating needs.',
      recommendations: [
        'Maximize attic insulation to R-49 or higher',
        'Air sealing provides highest ROI',
        'Consider continuous exterior insulation',
      ],
    },
    6: {
      type: 'heating',
      description: 'Cold climate with very high heating demands.',
      recommendations: [
        'Install maximum insulation in all locations',
        'Use XPS or EPS (not polyiso) on exterior in cold',
        'Triple-check air sealing at all penetrations',
      ],
    },
    7: {
      type: 'heating',
      description: 'Very cold climate with extreme heating needs.',
      recommendations: [
        'Maximum insulation everywhere pays back quickly',
        'Consider super-insulated wall assemblies',
        'Mechanical ventilation with heat recovery recommended',
      ],
    },
    8: {
      type: 'heating',
      description: 'Subarctic/arctic climate with extreme cold.',
      recommendations: [
        'Maximize all insulation levels',
        'Triple-pane windows essential',
        'Consider passive house techniques',
      ],
    },
  }

  return characteristics[zoneNumber] || characteristics[4]
}
