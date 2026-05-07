import { Metadata } from 'next'
import SavingsCalculator from '@/components/calculators/SavingsCalculator'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insulation Savings Calculator | Calculate ROI & Payback Period',
  description:
    'Calculate how much you can save by upgrading your insulation. See annual savings, payback period, and 10-20 year ROI based on your climate zone and energy costs.',
  keywords: [
    'insulation savings calculator',
    'insulation ROI calculator',
    'insulation payback period',
    'energy savings from insulation',
    'insulation upgrade cost savings',
    'attic insulation savings',
    'home insulation investment',
  ],
  openGraph: {
    title: 'Insulation Savings Calculator | InsulationRValues.com',
    description:
      'Calculate your potential savings from upgrading insulation. Get payback period and long-term ROI estimates.',
    url: 'https://www.insulationrvalues.com/insulation-savings-calculator',
    type: 'website',
  },
}

export default function SavingsCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        type="calculator"
        data={{
          name: 'Insulation Savings Calculator',
          description:
            'Calculate potential energy savings from upgrading insulation. Estimates annual savings, payback period, and long-term ROI based on R-value improvement and climate zone.',
          url: 'https://www.insulationrvalues.com/insulation-savings-calculator',
        }}
      />

      <main className="min-h-screen bg-surface-50">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Insulation Savings Calculator
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
              Find out how much you could save by upgrading your insulation. Calculate your payback
              period and see the long-term return on investment.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <SavingsCalculator />
          </div>
        </section>

        {/* Worked Payback Scenarios (pre-rendered for SEO) */}
        <section className="py-12 bg-white border-t border-surface-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
              Real-World Insulation Payback Scenarios
            </h2>
            <p className="text-text-muted mb-8 max-w-3xl">
              Six common upgrade scenarios with realistic 2025&ndash;2026 cost,
              annual savings, and simple payback. Numbers assume 2% annual energy
              cost inflation and exclude any Inflation Reduction Act tax credits
              (which would shorten payback by ~30%).
            </p>

            <div className="overflow-x-auto border border-surface-200 rounded-lg bg-white">
              <table className="w-full text-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Upgrade</th>
                    <th className="px-4 py-3 text-left font-medium">Climate</th>
                    <th className="px-4 py-3 text-right font-medium">Cost</th>
                    <th className="px-4 py-3 text-right font-medium">Savings/yr</th>
                    <th className="px-4 py-3 text-right font-medium">Payback</th>
                    <th className="px-4 py-3 text-right font-medium">20-yr ROI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      <div className="font-medium">Attic R-19 &rarr; R-49</div>
                      <div className="text-xs text-text-muted">
                        1,500 sq ft, blown cellulose
                      </div>
                    </td>
                    <td className="px-4 py-3">Zone 5 (Chicago)</td>
                    <td className="px-4 py-3 text-right font-mono">$1,200</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$280</td>
                    <td className="px-4 py-3 text-right font-mono">~4 yrs</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$5,600</td>
                  </tr>
                  <tr className="bg-surface-50">
                    <td className="px-4 py-3">
                      <div className="font-medium">Attic R-30 &rarr; R-60</div>
                      <div className="text-xs text-text-muted">
                        2,000 sq ft, blown cellulose
                      </div>
                    </td>
                    <td className="px-4 py-3">Zone 6 (Minneapolis)</td>
                    <td className="px-4 py-3 text-right font-mono">$1,500</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$240</td>
                    <td className="px-4 py-3 text-right font-mono">~6 yrs</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$4,800</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      <div className="font-medium">Wall retrofit R-0 &rarr; R-13</div>
                      <div className="text-xs text-text-muted">
                        1,500 sq ft, dense-pack cellulose
                      </div>
                    </td>
                    <td className="px-4 py-3">Zone 4 (Washington DC)</td>
                    <td className="px-4 py-3 text-right font-mono">$3,500</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$300</td>
                    <td className="px-4 py-3 text-right font-mono">~12 yrs</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$6,000</td>
                  </tr>
                  <tr className="bg-surface-50">
                    <td className="px-4 py-3">
                      <div className="font-medium">Rim joist seal</div>
                      <div className="text-xs text-text-muted">
                        150 ln ft, 2&quot; closed-cell foam
                      </div>
                    </td>
                    <td className="px-4 py-3">Zone 5 (Boston)</td>
                    <td className="px-4 py-3 text-right font-mono">$1,200</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$150</td>
                    <td className="px-4 py-3 text-right font-mono">~8 yrs</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$3,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3">
                      <div className="font-medium">Attic R-19 &rarr; R-60</div>
                      <div className="text-xs text-text-muted">
                        1,200 sq ft, spray foam (conditioned)
                      </div>
                    </td>
                    <td className="px-4 py-3">Zone 7 (Fargo)</td>
                    <td className="px-4 py-3 text-right font-mono">$6,000</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$540</td>
                    <td className="px-4 py-3 text-right font-mono">~11 yrs</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$10,800</td>
                  </tr>
                  <tr className="bg-surface-50">
                    <td className="px-4 py-3">
                      <div className="font-medium">Basement walls R-0 &rarr; R-15</div>
                      <div className="text-xs text-text-muted">
                        1,200 sq ft, XPS rigid foam DIY
                      </div>
                    </td>
                    <td className="px-4 py-3">Zone 5 (Pittsburgh)</td>
                    <td className="px-4 py-3 text-right font-mono">$1,200</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$120</td>
                    <td className="px-4 py-3 text-right font-mono">~10 yrs</td>
                    <td className="px-4 py-3 text-right font-mono text-accent">$2,400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="bg-accent-50 border-l-4 border-accent p-4 rounded-r-lg">
                <p className="font-semibold text-accent-700 mb-2">
                  Best ROI: attic, then air sealing
                </p>
                <p className="text-text text-sm">
                  Across these scenarios, attic upgrades and rim-joist sealing have
                  the shortest payback. Attics are the cheapest area to insulate per
                  square foot and the largest single source of heat loss in most homes.
                </p>
              </div>
              <div className="bg-secondary-50 border-l-4 border-secondary p-4 rounded-r-lg">
                <p className="font-semibold text-secondary-700 mb-2">
                  Tax credits cut payback ~30%
                </p>
                <p className="text-text text-sm">
                  The Inflation Reduction Act 25C tax credit covers 30% of insulation
                  costs (up to $1,200/year) through 2032. A $1,500 attic upgrade
                  becomes a $1,050 effective cost &mdash; turning a 6-year payback
                  into ~4 years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white border-t border-surface-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              How We Calculate Your Savings
            </h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                The R-Value and Energy Relationship
              </h3>
              <p className="text-text leading-relaxed mb-4">
                R-value measures thermal resistance — how well insulation resists heat flow. Heat
                transfer is inversely proportional to R-value: doubling your R-value cuts heat loss
                through that surface roughly in half.
              </p>

              <div className="bg-surface-50 p-4 rounded-lg font-mono text-center my-6">
                <p className="text-lg">
                  <strong>Heat Transfer</strong> ∝ 1 / R-value
                </p>
                <p className="text-sm text-text-muted mt-2">
                  Going from R-11 to R-38 reduces heat loss through that surface by ~71%
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Factors in Our Calculation
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 my-6">
                <div className="bg-surface-50 rounded-lg p-5">
                  <h4 className="font-semibold text-primary mb-2">R-Value Improvement</h4>
                  <p className="text-sm text-text">
                    The proportional reduction in heat transfer based on your current vs. target
                    R-value. Bigger jumps = bigger savings.
                  </p>
                </div>
                <div className="bg-surface-50 rounded-lg p-5">
                  <h4 className="font-semibold text-primary mb-2">HVAC Energy Share</h4>
                  <p className="text-sm text-text">
                    About 50% of home energy goes to heating and cooling. Insulation improvements
                    affect this portion of your bill.
                  </p>
                </div>
                <div className="bg-surface-50 rounded-lg p-5">
                  <h4 className="font-semibold text-primary mb-2">Location Factor</h4>
                  <p className="text-sm text-text">
                    Attics account for ~30% of home heat loss, walls ~25%, floors ~10%. The
                    calculator weights savings by location.
                  </p>
                </div>
                <div className="bg-surface-50 rounded-lg p-5">
                  <h4 className="font-semibold text-primary mb-2">Climate Zone</h4>
                  <p className="text-sm text-text">
                    Colder climates (zones 5-8) have more heating degree days, so insulation
                    improvements yield larger absolute savings.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Understanding Payback Period
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Payback period tells you how long it takes for energy savings to equal your
                investment. A 5-year payback means the insulation &quot;pays for itself&quot; in 5
                years — after that, it&apos;s pure savings for the life of your home.
              </p>

              <div className="overflow-x-auto -mx-4 px-4 my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-4 font-semibold">Upgrade Type</th>
                      <th className="text-left py-3 px-4 font-semibold">Typical Payback</th>
                      <th className="text-left py-3 px-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4 font-medium">Attic (DIY blown-in)</td>
                      <td className="py-3 px-4 text-accent font-semibold">2-4 years</td>
                      <td className="py-3 px-4">Best ROI, easy access</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4 font-medium">Attic (professional)</td>
                      <td className="py-3 px-4">3-5 years</td>
                      <td className="py-3 px-4">Faster, guaranteed coverage</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4 font-medium">Wall cavity (retrofit)</td>
                      <td className="py-3 px-4">5-8 years</td>
                      <td className="py-3 px-4">More labor-intensive</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4 font-medium">Basement/crawl space</td>
                      <td className="py-3 px-4">4-7 years</td>
                      <td className="py-3 px-4">Also improves comfort</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4 font-medium">Spray foam (whole house)</td>
                      <td className="py-3 px-4">7-12 years</td>
                      <td className="py-3 px-4">Higher cost, best performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-accent-50 border-l-4 border-accent p-4 rounded-r-lg my-6">
                <p className="font-semibold text-accent-700 mb-2">
                  2023-2032 Tax Credits Available
                </p>
                <p className="text-text text-sm">
                  The Inflation Reduction Act provides a 30% tax credit (up to $1,200/year) for
                  qualifying insulation upgrades. This significantly reduces payback periods.
                  Consult a tax professional and check{' '}
                  <a
                    href="https://www.energystar.gov/about/federal_tax_credits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline hover:text-accent-600"
                  >
                    ENERGY STAR guidelines
                  </a>{' '}
                  for current requirements.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Beyond Energy Savings
              </h3>
              <p className="text-text leading-relaxed mb-4">
                While our calculator focuses on energy costs, insulation upgrades provide additional
                benefits not captured in the numbers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text mb-4">
                <li>
                  <strong>Comfort:</strong> Fewer drafts, more even temperatures room-to-room
                </li>
                <li>
                  <strong>Noise reduction:</strong> Less outside noise, quieter between floors
                </li>
                <li>
                  <strong>HVAC longevity:</strong> Less strain on heating/cooling equipment
                </li>
                <li>
                  <strong>Home value:</strong> Better energy ratings can increase resale value
                </li>
                <li>
                  <strong>Environmental impact:</strong> Lower carbon footprint from reduced energy
                  use
                </li>
              </ul>
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
                    Find required R-values for your climate zone.
                  </p>
                </Link>
                <Link
                  href="/insulation-cost-calculator"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Cost Calculator</h4>
                  <p className="text-sm text-text-muted">Estimate material and installation costs.</p>
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
                  href="/climate-zone-map"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Climate Zone Map</h4>
                  <p className="text-sm text-text-muted">
                    Find your IECC climate zone.
                  </p>
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
                  How accurate are these savings estimates?
                </h3>
                <p className="text-text">
                  Our calculator provides reasonable estimates based on building science principles,
                  but actual savings vary based on home size, construction, air leakage, local
                  energy costs, and usage patterns. Consider these estimates as a starting point —
                  a professional energy audit can provide more precise projections for your specific
                  situation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Should I prioritize insulation or air sealing?
                </h3>
                <p className="text-text">
                  Air sealing often provides better ROI than adding R-value alone. In many homes,
                  sealing gaps and cracks (around wiring penetrations, attic hatches, can lights,
                  etc.) provides more benefit than simply adding more insulation over a leaky
                  assembly. Ideally, do both — air seal first, then insulate.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Is there a point of diminishing returns?
                </h3>
                <p className="text-text">
                  Yes. Going from R-11 to R-38 provides much more benefit than going from R-38 to
                  R-60. Code-minimum R-values are designed for cost-effective energy savings. Going
                  above code makes sense in extreme climates, high-performance homes, or when you
                  value comfort highly, but the energy savings per added R-value decrease as you go
                  higher.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  How do I know my current R-value?
                </h3>
                <p className="text-text">
                  For attics: measure the depth of existing insulation and check our{' '}
                  <Link href="/r-value-chart" className="text-primary underline hover:text-primary-600">
                    R-value chart
                  </Link>{' '}
                  to estimate R-value per inch. For walls: homes built before 1970 may have no
                  insulation; 1970s-1990s typically have R-11 to R-13; newer homes have R-13 to R-21.
                  An energy auditor can use thermal imaging to assess current insulation levels.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Do energy prices affect the calculation?
                </h3>
                <p className="text-text">
                  Energy costs are baked into your annual energy bill input. Our long-term
                  projections assume 2% annual energy cost increases (roughly matching historical
                  averages). If energy prices rise faster, actual savings will be higher. If you
                  switch to lower-cost energy (solar, heat pumps), savings from insulation may
                  decrease in absolute dollars but improve in percentage terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
