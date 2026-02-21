import { Metadata } from 'next'
import ThicknessCalculator from '@/components/calculators/ThicknessCalculator'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insulation Thickness Calculator | How Many Inches for Your R-Value',
  description:
    'Calculate how thick your insulation needs to be. Enter your target R-value and compare thickness requirements for spray foam, fiberglass, cellulose, mineral wool, and foam boards.',
  keywords: [
    'insulation thickness calculator',
    'how thick for R-38',
    'insulation depth calculator',
    'spray foam thickness',
    'attic insulation depth',
    'inches of insulation for R-value',
    'R-value thickness chart',
  ],
  openGraph: {
    title: 'Insulation Thickness Calculator | InsulationRValues.com',
    description:
      'Calculate how thick your insulation needs to be for any R-value. Compare all materials side by side.',
    url: 'https://insulationrvalues.com/insulation-thickness-calculator',
    type: 'website',
  },
}

export default function ThicknessCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        type="calculator"
        data={{
          name: 'Insulation Thickness Calculator',
          description:
            'Calculate the required thickness of insulation to achieve your target R-value. Compare all insulation materials side by side.',
          url: 'https://insulationrvalues.com/insulation-thickness-calculator',
        }}
      />

      <main className="min-h-screen bg-surface-50">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Insulation Thickness Calculator
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
              Find out how many inches of insulation you need to hit your target R-value. Compare
              all materials to find the most space-efficient option.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <ThicknessCalculator />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white border-t border-surface-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              Understanding Insulation Thickness
            </h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                The Formula: R-Value = Thickness × R-per-Inch
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Every insulation material has an R-value per inch rating. To achieve a target
                R-value, divide by the material&apos;s R-per-inch:
              </p>
              <div className="bg-surface-50 p-4 rounded-lg font-mono text-center my-6">
                <p className="text-lg">
                  <strong>Thickness (inches)</strong> = Target R-Value ÷ R-per-inch
                </p>
                <p className="text-sm text-text-muted mt-2">
                  Example: R-38 ÷ 3.5 per inch (fiberglass) = 10.9 inches
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                R-Value Per Inch by Material
              </h3>
              <div className="overflow-x-auto -mx-4 px-4 my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-4 font-semibold">Material</th>
                      <th className="text-left py-3 px-4 font-semibold">R-per-Inch</th>
                      <th className="text-left py-3 px-4 font-semibold">Inches for R-38</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4">Closed-Cell Spray Foam</td>
                      <td className="py-3 px-4 font-semibold text-accent">R-6.0 to R-7.0</td>
                      <td className="py-3 px-4">5.4&quot; – 6.3&quot;</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4">Polyiso Foam Board</td>
                      <td className="py-3 px-4 font-semibold text-accent">R-5.6 to R-6.5</td>
                      <td className="py-3 px-4">5.8&quot; – 6.8&quot;</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4">XPS Foam Board</td>
                      <td className="py-3 px-4 font-semibold text-secondary">R-4.5 to R-5.0</td>
                      <td className="py-3 px-4">7.6&quot; – 8.4&quot;</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4">Mineral Wool Batts</td>
                      <td className="py-3 px-4 font-semibold text-secondary">R-3.8 to R-4.3</td>
                      <td className="py-3 px-4">8.8&quot; – 10.0&quot;</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4">EPS Foam Board</td>
                      <td className="py-3 px-4 font-semibold text-secondary">R-3.6 to R-4.4</td>
                      <td className="py-3 px-4">8.6&quot; – 10.6&quot;</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4">Open-Cell Spray Foam</td>
                      <td className="py-3 px-4 font-semibold">R-3.5 to R-3.8</td>
                      <td className="py-3 px-4">10.0&quot; – 10.9&quot;</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4">Blown-In Cellulose</td>
                      <td className="py-3 px-4 font-semibold">R-3.2 to R-3.8</td>
                      <td className="py-3 px-4">10.0&quot; – 11.9&quot;</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4">Fiberglass Batts</td>
                      <td className="py-3 px-4 font-semibold">R-3.0 to R-3.7</td>
                      <td className="py-3 px-4">10.3&quot; – 12.7&quot;</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4">Blown-In Fiberglass</td>
                      <td className="py-3 px-4 font-semibold">R-2.2 to R-2.7</td>
                      <td className="py-3 px-4">14.1&quot; – 17.3&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-secondary-50 border-l-4 border-secondary p-4 rounded-r-lg my-6">
                <p className="font-semibold text-secondary-700 mb-2">Why Thickness Varies</p>
                <p className="text-text text-sm">
                  Each material has a range of R-values per inch depending on density, installation
                  quality, and manufacturer. Higher-density fiberglass batts have higher R-per-inch
                  than standard batts. Spray foam R-value depends on formulation and age.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Space-Constrained Applications
              </h3>
              <p className="text-text leading-relaxed mb-4">
                When space is limited — like 2×4 walls or shallow rafters — choose materials with
                higher R-per-inch values. Closed-cell spray foam (R-6.5/inch) delivers nearly double
                the R-value of fiberglass (R-3.5/inch) in the same cavity depth.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Hybrid Approaches
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Many projects combine materials. Example: 2&quot; of closed-cell spray foam (R-13) +
                3.5&quot; of mineral wool (R-15) = R-28 in a 2×6 cavity with excellent air sealing
                and moisture control. This &quot;flash and batt&quot; approach balances performance
                and cost.
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
                  href="/r-value-chart"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">R-Value Chart</h4>
                  <p className="text-sm text-text-muted">
                    Complete reference for all insulation types.
                  </p>
                </Link>
                <Link
                  href="/r-value-per-inch"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">R-Value Per Inch Guide</h4>
                  <p className="text-sm text-text-muted">
                    Detailed comparison by material type.
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
                  Can I compress insulation to fit in a smaller space?
                </h3>
                <p className="text-text">
                  No! Compressing insulation significantly reduces its R-value. For example, an R-19
                  batt compressed into a 3.5&quot; cavity only delivers about R-13. If space is
                  limited, use a thinner product rated for that cavity or choose a higher R-per-inch
                  material like spray foam.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Does blown-in insulation settle over time?
                </h3>
                <p className="text-text">
                  Yes, cellulose settles about 20% after installation. Manufacturers account for
                  this in their coverage charts — the installed depth includes extra to compensate.
                  Blown fiberglass settles less (1-3%). Check the settled R-value, not initial.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Why does spray foam have a range of R-values?
                </h3>
                <p className="text-text">
                  Spray foam R-value varies by formulation, age, and temperature. Closed-cell foam
                  typically rates R-6 to R-7 per inch fresh, declining slightly over years as
                  blowing agent escapes. Polyiso foam board has the most significant cold-weather
                  derating — it performs lower at temperatures below 40°F.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  What if my target R-value exceeds my cavity depth?
                </h3>
                <p className="text-text">
                  Three options: (1) Use a higher R-per-inch material like closed-cell spray foam,
                  (2) Add continuous insulation on the outside of the framing, or (3) Use a hybrid
                  approach combining cavity insulation with exterior rigid foam. For attics, simply
                  add more blown-in insulation to the desired depth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
