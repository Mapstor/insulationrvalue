import { Metadata } from 'next'
import CostCalculator from '@/components/calculators/CostCalculator'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insulation Cost Calculator | Estimate Material & Installation Costs',
  description:
    'Calculate insulation costs for your project. Compare prices for spray foam, fiberglass, cellulose, mineral wool, and more. Get DIY vs professional installation estimates.',
  keywords: [
    'insulation cost calculator',
    'spray foam insulation cost',
    'attic insulation cost',
    'insulation price per square foot',
    'blown in insulation cost',
    'fiberglass insulation cost',
    'cellulose insulation cost',
  ],
  openGraph: {
    title: 'Insulation Cost Calculator | InsulationRValues.com',
    description:
      'Calculate insulation costs for your project. Compare prices for different materials and DIY vs professional installation.',
    url: 'https://insulationrvalues.com/insulation-cost-calculator',
    type: 'website',
  },
}

export default function CostCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        type="calculator"
        data={{
          name: 'Insulation Cost Calculator',
          description:
            'Calculate and compare insulation costs for different materials. Get estimates for DIY and professional installation.',
          url: 'https://insulationrvalues.com/insulation-cost-calculator',
        }}
      />

      <main className="min-h-screen bg-surface-50">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Insulation Cost Calculator
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
              Get instant cost estimates for different insulation materials. Compare prices
              for DIY vs professional installation.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <CostCalculator />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white border-t border-surface-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              Understanding Insulation Costs
            </h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Factors That Affect Cost
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Insulation costs vary based on several factors including the type of material,
                installation method, accessibility of the area, regional labor rates, and the
                complexity of the job. This calculator provides national average estimates — your
                actual costs may be higher or lower.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                DIY vs Professional Installation
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Some insulation types like fiberglass batts and blown-in cellulose are DIY-friendly,
                potentially saving 40-60% on labor costs. However, spray foam insulation requires
                professional equipment and expertise. Even for DIY projects, factor in tool rental
                and your time.
              </p>

              <div className="bg-secondary-50 border-l-4 border-secondary p-4 rounded-r-lg my-6">
                <p className="font-semibold text-secondary-700 mb-2">Pro Tip: Free Equipment Rental</p>
                <p className="text-text text-sm">
                  Home Depot and Lowe&apos;s often provide free blower machine rental when you purchase
                  20+ bags of blown-in insulation. This can save $100+ on equipment costs for attic
                  insulation projects.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Average Costs by Material Type
              </h3>
              <div className="overflow-x-auto -mx-4 px-4 my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-4 font-semibold">Material</th>
                      <th className="text-left py-3 px-4 font-semibold">DIY Cost/sq ft</th>
                      <th className="text-left py-3 px-4 font-semibold">Installed Cost/sq ft</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4">Fiberglass Batts</td>
                      <td className="py-3 px-4">$0.15 – $0.80</td>
                      <td className="py-3 px-4">$0.30 – $1.50</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4">Blown-In Cellulose</td>
                      <td className="py-3 px-4">$0.30 – $0.90</td>
                      <td className="py-3 px-4">$0.60 – $2.30</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4">Mineral Wool Batts</td>
                      <td className="py-3 px-4">$0.60 – $1.40</td>
                      <td className="py-3 px-4">$1.00 – $2.10</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4">Open-Cell Spray Foam</td>
                      <td className="py-3 px-4">N/A</td>
                      <td className="py-3 px-4">$1.00 – $3.50</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4">Closed-Cell Spray Foam</td>
                      <td className="py-3 px-4">N/A</td>
                      <td className="py-3 px-4">$1.50 – $5.00</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4">Rigid Foam Board (XPS)</td>
                      <td className="py-3 px-4">$0.30 – $0.70</td>
                      <td className="py-3 px-4">$0.50 – $1.20</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Getting Accurate Quotes
              </h3>
              <p className="text-text leading-relaxed mb-4">
                For the most accurate pricing, get quotes from at least 3 local contractors.
                Provide them with your square footage, desired R-value, and any special conditions
                (access issues, moisture problems, existing insulation that needs removal).
              </p>
            </div>

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-surface-200">
              <h3 className="text-xl font-semibold text-primary mb-4">Related Resources</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/attic-insulation-cost"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Attic Insulation Costs</h4>
                  <p className="text-sm text-text-muted">
                    Detailed guide to attic insulation pricing.
                  </p>
                </Link>
                <Link
                  href="/spray-foam-insulation-cost"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Spray Foam Costs</h4>
                  <p className="text-sm text-text-muted">
                    Complete spray foam pricing breakdown.
                  </p>
                </Link>
                <Link
                  href="/r-value-calculator"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">R-Value Calculator</h4>
                  <p className="text-sm text-text-muted">
                    Find required R-values for your zone.
                  </p>
                </Link>
                <Link
                  href="/insulation-thickness-calculator"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Thickness Calculator</h4>
                  <p className="text-sm text-text-muted">
                    Calculate required insulation depth.
                  </p>
                </Link>
                <Link
                  href="/insulation-savings-calculator"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Savings Calculator</h4>
                  <p className="text-sm text-text-muted">
                    Estimate energy savings and payback.
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
                  Why is spray foam so much more expensive?
                </h3>
                <p className="text-text">
                  Spray foam costs more due to specialized equipment, trained applicators, and the
                  chemicals themselves. However, it provides higher R-value per inch and acts as
                  both insulation and air barrier, potentially reducing overall project costs when
                  you factor in air sealing.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Should I remove old insulation first?
                </h3>
                <p className="text-text">
                  It depends. If existing insulation is dry, in good condition, and not compressed,
                  you can often add new insulation on top (for blown-in). If it&apos;s wet, moldy,
                  pest-infested, or you&apos;re switching insulation types, removal is recommended.
                  Removal typically adds $1-2 per square foot.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  What&apos;s the best value insulation material?
                </h3>
                <p className="text-text">
                  For most DIY attic projects, blown-in cellulose offers excellent value — it&apos;s
                  affordable, eco-friendly (recycled paper), and provides good R-value. For
                  walls and areas needing moisture resistance, fiberglass batts are cost-effective.
                  The &quot;best&quot; choice depends on your specific situation, climate, and budget.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Are there rebates or tax credits available?
                </h3>
                <p className="text-text">
                  Yes! The federal Inflation Reduction Act offers a 30% tax credit up to $1,200
                  for insulation improvements (as of 2024). Many utility companies and states
                  offer additional rebates. Check the DSIRE database and your utility&apos;s website
                  for current programs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
