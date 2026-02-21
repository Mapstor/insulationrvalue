import { Metadata } from 'next'
import ClimateZoneMap from '@/components/calculators/ClimateZoneMap'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'IECC Climate Zone Map | Find Your Zone by ZIP Code',
  description:
    'Interactive US climate zone map. Enter your ZIP code or click the map to find your IECC climate zone and see required R-values for insulation in your area.',
  keywords: [
    'IECC climate zone map',
    'climate zone by zip code',
    'insulation zone map',
    'building climate zones',
    'energy code climate zones',
    'r-value by climate zone',
    'us climate zone map',
  ],
  openGraph: {
    title: 'IECC Climate Zone Map | InsulationRValues.com',
    description:
      'Interactive map to find your IECC climate zone. Get R-value requirements for insulation based on your location.',
    url: 'https://insulationrvalues.com/climate-zone-map',
    type: 'website',
  },
}

export default function ClimateZoneMapPage() {
  return (
    <>
      <SchemaMarkup
        type="calculator"
        data={{
          name: 'IECC Climate Zone Map',
          description:
            'Interactive US climate zone map with ZIP code lookup. Find your IECC climate zone and see required R-values for insulation.',
          url: 'https://insulationrvalues.com/climate-zone-map',
        }}
      />

      <main className="min-h-screen bg-surface-50">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              IECC Climate Zone Map
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
              Find your climate zone to understand insulation requirements. Click the map or enter
              your ZIP code for accurate R-value recommendations.
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <ClimateZoneMap />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white border-t border-surface-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              Understanding IECC Climate Zones
            </h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                What Are Climate Zones?
              </h3>
              <p className="text-text leading-relaxed mb-4">
                The International Energy Conservation Code (IECC) divides the United States into 8
                climate zones based on temperature patterns, heating degree days (HDD), and cooling
                degree days (CDD). These zones determine minimum insulation requirements for
                buildings.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">The 8 Climate Zones</h3>
              <div className="overflow-x-auto -mx-4 px-4 my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-4 font-semibold">Zone</th>
                      <th className="text-left py-3 px-4 font-semibold">Climate Type</th>
                      <th className="text-left py-3 px-4 font-semibold">Example Locations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4 font-bold" style={{ color: '#ef4444' }}>
                        1
                      </td>
                      <td className="py-3 px-4">Very Hot-Humid</td>
                      <td className="py-3 px-4">Hawaii, Puerto Rico, Key West FL</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4 font-bold" style={{ color: '#f97316' }}>
                        2
                      </td>
                      <td className="py-3 px-4">Hot-Humid</td>
                      <td className="py-3 px-4">South Florida, South Texas, Phoenix AZ</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4 font-bold" style={{ color: '#eab308' }}>
                        3
                      </td>
                      <td className="py-3 px-4">Warm / Mixed-Humid</td>
                      <td className="py-3 px-4">Atlanta GA, Los Angeles CA, Dallas TX</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4 font-bold" style={{ color: '#84cc16' }}>
                        4
                      </td>
                      <td className="py-3 px-4">Mixed-Humid</td>
                      <td className="py-3 px-4">Washington DC, Nashville TN, Seattle WA</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4 font-bold" style={{ color: '#22c55e' }}>
                        5
                      </td>
                      <td className="py-3 px-4">Cold</td>
                      <td className="py-3 px-4">Chicago IL, Denver CO, Boston MA</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4 font-bold" style={{ color: '#06b6d4' }}>
                        6
                      </td>
                      <td className="py-3 px-4">Cold (Severe)</td>
                      <td className="py-3 px-4">Minneapolis MN, Burlington VT, Boise ID</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4 font-bold" style={{ color: '#3b82f6' }}>
                        7
                      </td>
                      <td className="py-3 px-4">Very Cold</td>
                      <td className="py-3 px-4">Anchorage AK, Duluth MN</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4 font-bold" style={{ color: '#8b5cf6' }}>
                        8
                      </td>
                      <td className="py-3 px-4">Subarctic</td>
                      <td className="py-3 px-4">Fairbanks AK, Northern Alaska</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Why Climate Zones Matter
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Your climate zone directly determines how much insulation your home needs. Colder
                zones (5-8) require significantly higher R-values to prevent heat loss in winter,
                while warmer zones (1-3) focus on reducing cooling loads and may benefit more from
                radiant barriers.
              </p>

              <div className="bg-secondary-50 border-l-4 border-secondary p-4 rounded-r-lg my-6">
                <p className="font-semibold text-secondary-700 mb-2">Zone Boundary Variations</p>
                <p className="text-text text-sm">
                  Climate zones can vary within a single state, especially in mountainous regions.
                  For example, Colorado has areas in Zones 4, 5, 6, and 7 depending on elevation.
                  Always verify your specific zone with local building officials.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Heating vs. Cooling Dominant Climates
              </h3>
              <p className="text-text leading-relaxed mb-4">
                <strong>Heating-dominant (Zones 4-8):</strong> Focus on preventing heat loss. Higher
                R-values in attics and walls are critical. Air sealing provides the best ROI.
              </p>
              <p className="text-text leading-relaxed mb-4">
                <strong>Cooling-dominant (Zones 1-3):</strong> Focus on reducing heat gain. Radiant
                barriers in attics can be very effective. Proper ventilation and reflective
                materials matter more.
              </p>
            </div>

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-surface-200">
              <h3 className="text-xl font-semibold text-primary mb-4">Related Resources</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/r-value-calculator"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">R-Value Calculator</h4>
                  <p className="text-sm text-text-muted">
                    Get detailed requirements by ZIP code.
                  </p>
                </Link>
                <Link
                  href="/insulation-cost-calculator"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Cost Calculator</h4>
                  <p className="text-sm text-text-muted">Estimate insulation costs for your area.</p>
                </Link>
                <Link
                  href="/r-value-chart"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">R-Value Chart</h4>
                  <p className="text-sm text-text-muted">
                    Complete reference for all insulation types.
                  </p>
                </Link>
                <Link
                  href="/what-is-r-value"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">What is R-Value?</h4>
                  <p className="text-sm text-text-muted">
                    Learn how insulation R-values work.
                  </p>
                </Link>
                <Link
                  href="/insulation-thickness-calculator"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Thickness Calculator</h4>
                  <p className="text-sm text-text-muted">
                    Find out how much insulation you need.
                  </p>
                </Link>
                <Link
                  href="/what-insulation-do-i-need"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Insulation Quiz</h4>
                  <p className="text-sm text-text-muted">
                    Get personalized recommendations.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-surface-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  My area seems to be on a zone boundary. Which zone should I use?
                </h3>
                <p className="text-text">
                  If you&apos;re on a zone boundary, using the higher (colder) zone number is
                  generally the safer choice — you&apos;ll end up with more insulation, which won&apos;t
                  hurt performance. However, for building permits, always check with your local
                  building department for the official zone designation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Do climate zones change over time?
                </h3>
                <p className="text-text">
                  The IECC updates its climate zone map periodically (typically every 3 years with
                  code updates). Climate change may shift some zone boundaries over decades.
                  However, for current building projects, use the most recent IECC edition adopted
                  by your jurisdiction.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  What about humid vs. dry designations (A, B, C)?
                </h3>
                <p className="text-text">
                  The full IECC zone system includes moisture designations: A (moist), B (dry), and
                  C (marine). For example, Zone 3A (humid Southeast) vs 3B (dry Southwest). These
                  affect vapor barrier requirements more than R-values, but both use the same
                  insulation R-value minimums.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  My state has its own energy code. Should I use that instead?
                </h3>
                <p className="text-text">
                  Yes! Many states adopt modified versions of the IECC or have their own energy
                  codes (like California&apos;s Title 24). State and local codes supersede the model
                  IECC requirements. This map shows IECC zones as a baseline — always verify with
                  local requirements before starting a project.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
