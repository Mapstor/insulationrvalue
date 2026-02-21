import { Metadata } from 'next'
import RValueCalculator from '@/components/calculators/RValueCalculator'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'R-Value Calculator by ZIP Code | Find IECC Insulation Requirements',
  description:
    'Enter your ZIP code to find the recommended R-values for your climate zone. Get IECC code minimums and Energy Star recommendations for attic, wall, floor, and basement insulation.',
  keywords: [
    'r-value calculator',
    'insulation requirements by zip code',
    'climate zone calculator',
    'IECC insulation requirements',
    'insulation r-value by location',
    'attic insulation r-value',
    'wall insulation requirements',
  ],
  openGraph: {
    title: 'R-Value Calculator by ZIP Code | InsulationRValues.com',
    description:
      'Find the recommended insulation R-values for your climate zone. Enter your ZIP code for IECC code requirements.',
    url: 'https://insulationrvalues.com/r-value-calculator',
    type: 'website',
  },
}

export default function RValueCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        type="calculator"
        data={{
          name: 'R-Value Calculator by ZIP Code',
          description:
            'Find the recommended insulation R-values for your climate zone based on your ZIP code. Shows IECC code minimum requirements and Energy Star recommendations.',
          url: 'https://insulationrvalues.com/r-value-calculator',
        }}
      />

      <main className="min-h-screen bg-surface-50">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              R-Value Calculator
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
              Find the recommended insulation R-values for your location based on IECC climate
              zones and Energy Star guidelines.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <RValueCalculator />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white border-t border-surface-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              Understanding R-Value Requirements
            </h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                What is R-Value?
              </h3>
              <p className="text-text leading-relaxed mb-4">
                R-value measures insulation&apos;s resistance to heat flow. The higher the R-value,
                the better the insulation performs. Different areas of your home need different
                R-values based on your climate zone and how heat moves through the building
                envelope.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                About IECC Climate Zones
              </h3>
              <p className="text-text leading-relaxed mb-4">
                The International Energy Conservation Code (IECC) divides the United States into
                8 climate zones, from Zone 1 (very hot/humid) to Zone 8 (subarctic). Each zone
                has specific minimum R-value requirements for different parts of a building.
              </p>

              <div className="bg-secondary-50 border-l-4 border-secondary p-4 rounded-r-lg my-6">
                <p className="font-semibold text-secondary-700 mb-2">Important Note</p>
                <p className="text-text text-sm">
                  The R-values shown are 2021 IECC minimums. Your local building codes may require
                  higher values. Always check with your local building department before starting
                  an insulation project.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Code Minimum vs. Recommended
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Code minimums are the legal requirements for new construction. However, Energy
                Star and building science experts often recommend exceeding these minimums for
                better comfort, lower energy bills, and future-proofing your home. The
                calculator shows both to help you make an informed decision.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Understanding &quot;ci&quot; Notation
              </h3>
              <p className="text-text leading-relaxed mb-4">
                When you see &quot;ci&quot; (continuous insulation) in the requirements, it means
                insulation installed on the exterior of the framing without thermal bridging
                through studs. For example, &quot;R-13+5ci&quot; means R-13 in the wall cavity plus R-5
                continuous insulation on the outside.
              </p>
            </div>

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-surface-200">
              <h3 className="text-xl font-semibold text-primary mb-4">Related Resources</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/r-value-chart"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">R-Value Chart</h4>
                  <p className="text-sm text-text-muted">
                    Complete reference of R-values for all insulation types.
                  </p>
                </Link>
                <Link
                  href="/climate-zone-map"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Climate Zone Map</h4>
                  <p className="text-sm text-text-muted">
                    Interactive map of IECC climate zones.
                  </p>
                </Link>
                <Link
                  href="/insulation-cost-calculator"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Cost Calculator</h4>
                  <p className="text-sm text-text-muted">
                    Estimate material and installation costs.
                  </p>
                </Link>
                <Link
                  href="/what-is-r-value"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">What is R-Value?</h4>
                  <p className="text-sm text-text-muted">
                    Learn how R-value works and why it matters.
                  </p>
                </Link>
                <Link
                  href="/insulation-thickness-calculator"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Thickness Calculator</h4>
                  <p className="text-sm text-text-muted">
                    Find out how thick your insulation needs to be.
                  </p>
                </Link>
                <Link
                  href="/what-insulation-do-i-need"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Insulation Quiz</h4>
                  <p className="text-sm text-text-muted">
                    Get personalized insulation recommendations.
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
                  Why does my attic need higher R-values than my walls?
                </h3>
                <p className="text-text">
                  Heat rises, so the attic is where most heat escapes in winter. Additionally,
                  there&apos;s typically more space in an attic to add insulation, and it&apos;s more
                  cost-effective to add thickness there than in walls where space is limited.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  What if my ZIP code shows a different zone than I expected?
                </h3>
                <p className="text-text">
                  Climate zones can vary within counties, especially near zone boundaries or in
                  mountainous areas. If you&apos;re unsure, check with your local building department
                  or use the manual zone selection based on the official IECC climate zone map.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Do these R-values apply to existing homes?
                </h3>
                <p className="text-text">
                  The IECC requirements technically apply to new construction. However, when
                  retrofitting an existing home, these values serve as excellent targets. Your
                  local utility may have specific rebate programs that reference these or
                  similar R-value targets.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  What does &quot;NR&quot; (Not Required) mean?
                </h3>
                <p className="text-text">
                  NR means the code doesn&apos;t require insulation in that location for your climate
                  zone. However, you may still benefit from insulation there for comfort or
                  energy savings. For example, Zone 1 doesn&apos;t require basement wall insulation
                  by code, but adding some can still improve comfort.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
