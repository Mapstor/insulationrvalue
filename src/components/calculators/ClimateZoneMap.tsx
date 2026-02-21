'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import {
  getZoneDataFromZip,
  getZoneData,
  formatLocationDisplay,
  isValidZipCode,
  type ZoneData,
  type RValueRequirements,
} from '@/lib/climate-zones'

// US States grouped by predominant climate zone
const zoneStates: Record<number, string[]> = {
  1: ['HI', 'PR', 'VI', 'GU'],
  2: ['FL', 'TX-S'],
  3: ['AL', 'AR', 'AZ-S', 'CA-S', 'GA', 'LA', 'MS', 'NV-S', 'NM-S', 'NC-E', 'OK-E', 'SC', 'TX-N'],
  4: ['CA-N', 'DE', 'DC', 'KY', 'MD', 'MO', 'NC-W', 'NJ', 'NM-N', 'NY-S', 'OH', 'OK-W', 'OR', 'PA', 'TN', 'VA', 'WV', 'KS'],
  5: ['CO', 'CT', 'IA', 'ID-S', 'IL', 'IN', 'MA', 'MI', 'NE', 'NV-N', 'NY-N', 'RI', 'UT', 'WA', 'WY-S'],
  6: ['ID-N', 'ME', 'MN', 'MT', 'NH', 'ND', 'SD', 'VT', 'WI', 'WY-N'],
  7: ['AK-S'],
  8: ['AK-N'],
}

// Zone colors for the map
const zoneColors: Record<number, { fill: string; hover: string; text: string }> = {
  1: { fill: '#ef4444', hover: '#dc2626', text: 'Very Hot-Humid' },
  2: { fill: '#f97316', hover: '#ea580c', text: 'Hot-Humid' },
  3: { fill: '#eab308', hover: '#ca8a04', text: 'Hot-Dry / Warm-Humid' },
  4: { fill: '#84cc16', hover: '#65a30d', text: 'Mixed-Humid' },
  5: { fill: '#22c55e', hover: '#16a34a', text: 'Cold' },
  6: { fill: '#06b6d4', hover: '#0891b2', text: 'Cold (Severe)' },
  7: { fill: '#3b82f6', hover: '#2563eb', text: 'Very Cold' },
  8: { fill: '#8b5cf6', hover: '#7c3aed', text: 'Subarctic' },
}

interface SelectedZone {
  zoneData: ZoneData
  source: 'map' | 'zip'
  zipCode?: string
}

export default function ClimateZoneMap() {
  const [zipCode, setZipCode] = useState('')
  const [selectedZone, setSelectedZone] = useState<SelectedZone | null>(null)
  const [hoveredZone, setHoveredZone] = useState<number | null>(null)
  const [error, setError] = useState('')

  const handleZipLookup = () => {
    setError('')

    if (!isValidZipCode(zipCode)) {
      setError('Please enter a valid 5-digit ZIP code')
      return
    }

    const zoneData = getZoneDataFromZip(zipCode)

    if (!zoneData) {
      setError('Could not find climate zone for this ZIP code')
      return
    }

    setSelectedZone({
      zoneData,
      source: 'zip',
      zipCode,
    })
  }

  const handleZoneClick = (zone: number) => {
    const zoneData = getZoneData(zone)
    if (zoneData) {
      setSelectedZone({
        zoneData,
        source: 'map',
      })
      setError('')
    }
  }

  const requirements = selectedZone?.zoneData.requirements
  const zoneInfo = selectedZone?.zoneData.zone

  return (
    <div className="space-y-8">
      {/* Map and Lookup Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map */}
        <div className="lg:col-span-2">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>IECC Climate Zone Map</CardTitle>
              <p className="text-text-muted mt-2">
                Click on a zone to see its R-value requirements, or enter your ZIP code below.
              </p>
            </CardHeader>
            <CardContent>
              {/* SVG Map */}
              <div className="relative">
                <svg
                  viewBox="0 0 960 600"
                  className="w-full h-auto"
                  aria-label="US Climate Zone Map"
                >
                  {/* Background */}
                  <rect width="960" height="600" fill="#f8fafc" />

                  {/* Zone Legend */}
                  <g transform="translate(20, 20)">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((zone, i) => (
                      <g
                        key={zone}
                        transform={`translate(0, ${i * 28})`}
                        className="cursor-pointer"
                        onClick={() => handleZoneClick(zone)}
                        onMouseEnter={() => setHoveredZone(zone)}
                        onMouseLeave={() => setHoveredZone(null)}
                      >
                        <rect
                          width="20"
                          height="20"
                          fill={hoveredZone === zone ? zoneColors[zone].hover : zoneColors[zone].fill}
                          rx="3"
                          className="transition-colors"
                        />
                        <text x="28" y="15" fontSize="12" fill="#374151" fontWeight="500">
                          Zone {zone}: {zoneColors[zone].text}
                        </text>
                      </g>
                    ))}
                  </g>

                  {/* Simplified US Map by Zones */}
                  {/* Zone 1 - Hawaii, Puerto Rico (Hot-Humid) */}
                  <g
                    className="cursor-pointer transition-colors"
                    onClick={() => handleZoneClick(1)}
                    onMouseEnter={() => setHoveredZone(1)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    <path
                      d="M230 500 L280 500 L290 520 L270 540 L240 530 L220 515 Z"
                      fill={hoveredZone === 1 || selectedZone?.zoneData.zone.zone === 1 ? zoneColors[1].hover : zoneColors[1].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="255" y="522" fontSize="10" fill="#fff" textAnchor="middle" fontWeight="bold">HI</text>
                  </g>

                  {/* Zone 2 - South Florida, South Texas */}
                  <g
                    className="cursor-pointer transition-colors"
                    onClick={() => handleZoneClick(2)}
                    onMouseEnter={() => setHoveredZone(2)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    <path
                      d="M770 420 L810 400 L830 420 L820 460 L790 470 L760 450 Z"
                      fill={hoveredZone === 2 || selectedZone?.zoneData.zone.zone === 2 ? zoneColors[2].hover : zoneColors[2].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="795" y="435" fontSize="10" fill="#fff" textAnchor="middle" fontWeight="bold">FL-S</text>
                    <path
                      d="M420 450 L480 430 L500 450 L490 480 L450 490 L410 470 Z"
                      fill={hoveredZone === 2 || selectedZone?.zoneData.zone.zone === 2 ? zoneColors[2].hover : zoneColors[2].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="455" y="460" fontSize="10" fill="#fff" textAnchor="middle" fontWeight="bold">TX-S</text>
                  </g>

                  {/* Zone 3 - Southeast, Southwest */}
                  <g
                    className="cursor-pointer transition-colors"
                    onClick={() => handleZoneClick(3)}
                    onMouseEnter={() => setHoveredZone(3)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    <path
                      d="M600 350 L750 330 L780 380 L760 420 L650 430 L580 400 Z"
                      fill={hoveredZone === 3 || selectedZone?.zoneData.zone.zone === 3 ? zoneColors[3].hover : zoneColors[3].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="680" y="375" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">3</text>
                    <path
                      d="M200 350 L300 340 L320 400 L280 430 L200 420 L180 380 Z"
                      fill={hoveredZone === 3 || selectedZone?.zoneData.zone.zone === 3 ? zoneColors[3].hover : zoneColors[3].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="250" y="385" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">3</text>
                    <path
                      d="M400 350 L580 340 L600 400 L480 430 L400 410 Z"
                      fill={hoveredZone === 3 || selectedZone?.zoneData.zone.zone === 3 ? zoneColors[3].hover : zoneColors[3].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="490" y="380" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">3</text>
                  </g>

                  {/* Zone 4 - Mid-Atlantic, Central */}
                  <g
                    className="cursor-pointer transition-colors"
                    onClick={() => handleZoneClick(4)}
                    onMouseEnter={() => setHoveredZone(4)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    <path
                      d="M550 260 L750 250 L780 320 L600 350 L500 330 L480 280 Z"
                      fill={hoveredZone === 4 || selectedZone?.zoneData.zone.zone === 4 ? zoneColors[4].hover : zoneColors[4].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="630" y="300" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">4</text>
                    <path
                      d="M140 280 L200 270 L220 340 L200 350 L140 340 Z"
                      fill={hoveredZone === 4 || selectedZone?.zoneData.zone.zone === 4 ? zoneColors[4].hover : zoneColors[4].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="175" y="310" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">4</text>
                    <path
                      d="M780 250 L850 240 L870 300 L830 330 L780 320 Z"
                      fill={hoveredZone === 4 || selectedZone?.zoneData.zone.zone === 4 ? zoneColors[4].hover : zoneColors[4].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="820" y="280" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">4</text>
                  </g>

                  {/* Zone 5 - Northern States */}
                  <g
                    className="cursor-pointer transition-colors"
                    onClick={() => handleZoneClick(5)}
                    onMouseEnter={() => setHoveredZone(5)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    <path
                      d="M400 180 L700 170 L750 250 L550 260 L400 240 Z"
                      fill={hoveredZone === 5 || selectedZone?.zoneData.zone.zone === 5 ? zoneColors[5].hover : zoneColors[5].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="560" y="215" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">5</text>
                    <path
                      d="M130 200 L200 190 L220 270 L200 280 L140 270 Z"
                      fill={hoveredZone === 5 || selectedZone?.zoneData.zone.zone === 5 ? zoneColors[5].hover : zoneColors[5].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="170" y="240" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">5</text>
                    <path
                      d="M750 180 L850 170 L870 230 L850 240 L750 250 Z"
                      fill={hoveredZone === 5 || selectedZone?.zoneData.zone.zone === 5 ? zoneColors[5].hover : zoneColors[5].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="810" y="205" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">5</text>
                    <path
                      d="M280 250 L400 240 L420 340 L300 340 Z"
                      fill={hoveredZone === 5 || selectedZone?.zoneData.zone.zone === 5 ? zoneColors[5].hover : zoneColors[5].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="350" y="295" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">5</text>
                  </g>

                  {/* Zone 6 - Northern Border States */}
                  <g
                    className="cursor-pointer transition-colors"
                    onClick={() => handleZoneClick(6)}
                    onMouseEnter={() => setHoveredZone(6)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    <path
                      d="M300 100 L650 90 L700 170 L400 180 L300 160 Z"
                      fill={hoveredZone === 6 || selectedZone?.zoneData.zone.zone === 6 ? zoneColors[6].hover : zoneColors[6].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="490" y="140" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">6</text>
                    <path
                      d="M120 120 L180 110 L200 190 L130 200 L100 160 Z"
                      fill={hoveredZone === 6 || selectedZone?.zoneData.zone.zone === 6 ? zoneColors[6].hover : zoneColors[6].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="150" y="155" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">6</text>
                    <path
                      d="M750 100 L850 90 L870 160 L850 170 L750 180 Z"
                      fill={hoveredZone === 6 || selectedZone?.zoneData.zone.zone === 6 ? zoneColors[6].hover : zoneColors[6].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="810" y="130" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">6</text>
                    <path
                      d="M200 180 L280 170 L300 250 L280 250 L200 230 Z"
                      fill={hoveredZone === 6 || selectedZone?.zoneData.zone.zone === 6 ? zoneColors[6].hover : zoneColors[6].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="250" y="210" fontSize="12" fill="#fff" textAnchor="middle" fontWeight="bold">6</text>
                  </g>

                  {/* Zone 7 - Alaska South */}
                  <g
                    className="cursor-pointer transition-colors"
                    onClick={() => handleZoneClick(7)}
                    onMouseEnter={() => setHoveredZone(7)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    <path
                      d="M80 450 L180 430 L200 480 L150 510 L70 490 Z"
                      fill={hoveredZone === 7 || selectedZone?.zoneData.zone.zone === 7 ? zoneColors[7].hover : zoneColors[7].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="135" y="470" fontSize="10" fill="#fff" textAnchor="middle" fontWeight="bold">AK-7</text>
                  </g>

                  {/* Zone 8 - Alaska North */}
                  <g
                    className="cursor-pointer transition-colors"
                    onClick={() => handleZoneClick(8)}
                    onMouseEnter={() => setHoveredZone(8)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    <path
                      d="M50 380 L150 360 L180 430 L80 450 L40 420 Z"
                      fill={hoveredZone === 8 || selectedZone?.zoneData.zone.zone === 8 ? zoneColors[8].hover : zoneColors[8].fill}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <text x="110" y="405" fontSize="10" fill="#fff" textAnchor="middle" fontWeight="bold">AK-8</text>
                  </g>

                  {/* Map labels */}
                  <text x="480" y="580" fontSize="11" fill="#6b7280" textAnchor="middle">
                    Click any zone for R-value requirements or enter ZIP code for precise lookup
                  </text>
                </svg>

                {/* Hover tooltip */}
                {hoveredZone && (
                  <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-3 border border-surface-200">
                    <p className="font-semibold text-primary">
                      Zone {hoveredZone}: {zoneColors[hoveredZone].text}
                    </p>
                    <p className="text-sm text-text-muted">Click for details</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ZIP Lookup */}
        <div className="lg:col-span-1">
          <Card variant="elevated" className="sticky top-4">
            <CardHeader>
              <CardTitle>Find Your Zone</CardTitle>
              <p className="text-text-muted mt-2 text-sm">
                Enter your ZIP code for the most accurate climate zone.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  label="ZIP Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="e.g., 90210"
                  maxLength={5}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleZipLookup()
                    }
                  }}
                />
                <Button
                  onClick={handleZipLookup}
                  disabled={zipCode.length !== 5}
                  className="w-full"
                >
                  Look Up Zone
                </Button>
                {error && <p className="text-sm text-red-600">{error}</p>}

                {/* Quick zone buttons */}
                <div className="pt-4 border-t border-surface-200">
                  <p className="text-sm font-medium text-text mb-2">Or select zone:</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((zone) => (
                      <button
                        key={zone}
                        onClick={() => handleZoneClick(zone)}
                        className={`
                          py-2 px-3 rounded-lg border-2 text-sm font-semibold transition-colors
                          ${
                            selectedZone?.zoneData.zone.zone === zone
                              ? 'border-primary bg-primary text-white'
                              : 'border-surface-300 hover:border-primary hover:text-primary'
                          }
                        `}
                        style={{
                          backgroundColor:
                            selectedZone?.zoneData.zone.zone === zone
                              ? zoneColors[zone].fill
                              : undefined,
                          borderColor:
                            selectedZone?.zoneData.zone.zone === zone
                              ? zoneColors[zone].fill
                              : undefined,
                        }}
                      >
                        {zone}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Results Section */}
      {selectedZone && (
        <div className="space-y-6">
          {/* Zone Info Header */}
          <Card
            variant="outlined"
            className="border-2"
            style={{
              borderColor: zoneColors[zoneInfo!.zone].fill,
              backgroundColor: `${zoneColors[zoneInfo!.zone].fill}10`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg text-white font-bold text-xl"
                    style={{ backgroundColor: zoneColors[zoneInfo!.zone].fill }}
                  >
                    {zoneInfo!.zone}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{zoneInfo?.name}</h3>
                    <p className="text-text-muted">{zoneColors[zoneInfo!.zone].text}</p>
                  </div>
                </div>
                <p className="text-text mt-2">{zoneInfo?.description}</p>
                {selectedZone.source === 'zip' && (
                  <p className="text-sm text-primary mt-2">
                    Based on ZIP code: {selectedZone.zipCode}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div
                  className="px-4 py-2 rounded-lg text-sm font-medium text-center"
                  style={{
                    backgroundColor: zoneColors[zoneInfo!.zone].fill,
                    color: 'white',
                  }}
                >
                  {zoneInfo?.primaryConcern === 'heating'
                    ? 'Heating Dominant'
                    : zoneInfo?.primaryConcern === 'cooling'
                    ? 'Cooling Dominant'
                    : 'Mixed Climate'}
                </div>
              </div>
            </div>
          </Card>

          {/* R-Value Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>2021 IECC R-Value Requirements for Zone {zoneInfo?.zone}</CardTitle>
              <p className="text-text-muted text-sm mt-1">
                Minimum insulation R-values required by the International Energy Conservation Code.
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-4 font-semibold">Location</th>
                      <th className="text-left py-3 px-4 font-semibold">Minimum R-Value</th>
                      <th className="text-left py-3 px-4 font-semibold hidden sm:table-cell">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {requirements &&
                      (Object.keys(requirements) as Array<keyof RValueRequirements>).map((key) => (
                        <tr key={key} className="border-b border-surface-200 hover:bg-surface-50">
                          <td className="py-3 px-4 font-medium">{formatLocationDisplay(key)}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`font-semibold ${
                                requirements[key] === 'NR' ? 'text-text-muted' : 'text-primary'
                              }`}
                            >
                              {requirements[key]}
                            </span>
                            {requirements[key] === 'NR' && (
                              <span className="text-sm text-text-muted ml-2">(Not Required)</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-sm text-text-muted hidden sm:table-cell">
                            {requirements[key].includes('ci')
                              ? 'ci = continuous insulation'
                              : requirements[key].includes('+')
                              ? 'Cavity + continuous'
                              : ''}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Energy Star Recommendations */}
          <Card className="border-secondary-200 bg-secondary-50">
            <CardHeader>
              <CardTitle className="text-secondary-700">Energy Star Recommended Levels</CardTitle>
              <p className="text-text-muted text-sm mt-1">
                For optimal energy efficiency, consider exceeding code minimums.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 border border-secondary-200">
                  <p className="text-sm text-text-muted mb-1">Attic</p>
                  <p className="text-xl font-bold text-secondary-700">
                    {selectedZone.zoneData.energyStarRecommended.attic}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-secondary-200">
                  <p className="text-sm text-text-muted mb-1">Walls</p>
                  <p className="text-xl font-bold text-secondary-700">
                    {selectedZone.zoneData.energyStarRecommended.walls}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-secondary-200">
                  <p className="text-sm text-text-muted mb-1">Floor</p>
                  <p className="text-xl font-bold text-secondary-700">
                    {selectedZone.zoneData.energyStarRecommended.floor}
                  </p>
                </div>
              </div>
              {selectedZone.zoneData.energyStarRecommended.notes && (
                <div className="bg-white rounded-lg p-4 border border-secondary-200">
                  <p className="text-sm font-medium text-secondary-700">Pro Tip:</p>
                  <p className="text-sm text-text mt-1">
                    {selectedZone.zoneData.energyStarRecommended.notes}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Climate Stats */}
          <Card variant="outlined">
            <CardContent className="py-4">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-text-muted">Heating Degree Days (HDD)</p>
                  <p className="text-lg font-bold text-primary">
                    {zoneInfo?.heatingDegreeDays.min.toLocaleString()} –{' '}
                    {zoneInfo?.heatingDegreeDays.max.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-muted">Cooling Degree Days (CDD)</p>
                  <p className="text-lg font-bold text-secondary">
                    {zoneInfo?.coolingDegreeDays.min.toLocaleString()} –{' '}
                    {zoneInfo?.coolingDegreeDays.max.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-muted">Radiant Barrier Benefit</p>
                  <p className="text-lg font-bold text-accent">{zoneInfo?.radiantBarrierBenefit}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-accent-50 border-accent-200">
            <CardContent className="text-center py-6">
              <h3 className="text-lg font-bold text-accent-700 mb-2">
                Know Your Requirements — Now Calculate Costs
              </h3>
              <p className="text-text-muted mb-4">
                Use our other calculators to plan your insulation project.
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
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = '/what-insulation-do-i-need')}
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Insulation Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
