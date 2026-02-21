import { Metadata } from 'next'
import InsulationQuiz from '@/components/calculators/InsulationQuiz'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Insulation Do I Need? | Free Quiz & Recommendations',
  description:
    'Take our free quiz to find the best insulation for your home. Get personalized recommendations based on your location, project type, budget, and climate zone.',
  keywords: [
    'what insulation do I need',
    'insulation quiz',
    'best insulation for my home',
    'insulation recommendations',
    'choose insulation type',
    'insulation buying guide',
    'home insulation calculator',
  ],
  openGraph: {
    title: 'What Insulation Do I Need? | InsulationRValues.com',
    description:
      'Take our free quiz to find the best insulation for your home. Personalized recommendations in 2 minutes.',
    url: 'https://insulationrvalues.com/what-insulation-do-i-need',
    type: 'website',
  },
}

export default function InsulationQuizPage() {
  return (
    <>
      <SchemaMarkup
        type="calculator"
        data={{
          name: 'Insulation Quiz',
          description:
            'Interactive quiz to find the best insulation type for your home based on location, climate zone, budget, and project requirements.',
          url: 'https://insulationrvalues.com/what-insulation-do-i-need',
        }}
      />

      <main className="min-h-screen bg-surface-50">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Insulation Do I Need?
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
              Answer 5 quick questions and get personalized recommendations for the best insulation
              type, estimated costs, and next steps for your project.
            </p>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <InsulationQuiz />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white border-t border-surface-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              How We Make Our Recommendations
            </h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Factors We Consider
              </h3>
              <p className="text-text leading-relaxed mb-4">
                Our quiz algorithm weighs multiple factors to recommend the best insulation for your
                specific situation. Here&apos;s what goes into our recommendations:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 my-6">
                <div className="bg-surface-50 rounded-lg p-5">
                  <h4 className="font-semibold text-primary mb-2">Location in Home</h4>
                  <p className="text-sm text-text">
                    Different areas require different insulation types. Basements need moisture
                    resistance, attics need the highest R-values, and walls have space constraints.
                  </p>
                </div>
                <div className="bg-surface-50 rounded-lg p-5">
                  <h4 className="font-semibold text-primary mb-2">Climate Zone</h4>
                  <p className="text-sm text-text">
                    Cold climates (zones 5-8) require higher R-values and benefit from air-sealing
                    spray foam. Hot climates (zones 1-3) may benefit from radiant barriers.
                  </p>
                </div>
                <div className="bg-surface-50 rounded-lg p-5">
                  <h4 className="font-semibold text-primary mb-2">New vs. Retrofit</h4>
                  <p className="text-sm text-text">
                    New construction allows easy batt installation in open cavities. Retrofit
                    projects often need blown-in or injection methods to fill closed walls.
                  </p>
                </div>
                <div className="bg-surface-50 rounded-lg p-5">
                  <h4 className="font-semibold text-primary mb-2">DIY vs. Professional</h4>
                  <p className="text-sm text-text">
                    Some materials like batts and loose-fill are DIY-friendly. Spray foam requires
                    professional equipment. We only recommend what you can actually install.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Quick Overview: Insulation Types
              </h3>
              <div className="overflow-x-auto -mx-4 px-4 my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-4 font-semibold">Type</th>
                      <th className="text-left py-3 px-4 font-semibold">Best For</th>
                      <th className="text-left py-3 px-4 font-semibold">DIY?</th>
                      <th className="text-left py-3 px-4 font-semibold">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4 font-medium">Fiberglass Batts</td>
                      <td className="py-3 px-4">New construction walls, accessible attics</td>
                      <td className="py-3 px-4 text-accent">Yes</td>
                      <td className="py-3 px-4">$</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4 font-medium">Blown-In Cellulose</td>
                      <td className="py-3 px-4">Attic floors, retrofit walls</td>
                      <td className="py-3 px-4 text-accent">Yes</td>
                      <td className="py-3 px-4">$</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4 font-medium">Mineral Wool</td>
                      <td className="py-3 px-4">Fire-rated walls, soundproofing</td>
                      <td className="py-3 px-4 text-accent">Yes</td>
                      <td className="py-3 px-4">$$</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4 font-medium">Spray Foam (Closed)</td>
                      <td className="py-3 px-4">Basements, crawl spaces, cold climates</td>
                      <td className="py-3 px-4 text-red-500">No</td>
                      <td className="py-3 px-4">$$$</td>
                    </tr>
                    <tr className="border-b border-surface-200">
                      <td className="py-3 px-4 font-medium">Rigid Foam (XPS)</td>
                      <td className="py-3 px-4">Below-grade, foundations, high moisture</td>
                      <td className="py-3 px-4 text-accent">Yes</td>
                      <td className="py-3 px-4">$$</td>
                    </tr>
                    <tr className="border-b border-surface-200 bg-surface-50">
                      <td className="py-3 px-4 font-medium">Radiant Barrier</td>
                      <td className="py-3 px-4">Hot climates (zones 1-3), attics</td>
                      <td className="py-3 px-4 text-accent">Yes</td>
                      <td className="py-3 px-4">$</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-secondary-50 border-l-4 border-secondary p-4 rounded-r-lg my-6">
                <p className="font-semibold text-secondary-700 mb-2">Always Meet or Exceed Code</p>
                <p className="text-text text-sm">
                  Our recommendations are based on IECC code minimums, but going above code often
                  makes sense for energy savings and comfort. Check local requirements — some states
                  and jurisdictions have higher standards than the model code.
                </p>
              </div>
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
                  href="/types-of-insulation"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Types of Insulation</h4>
                  <p className="text-sm text-text-muted">
                    In-depth guide to all insulation materials.
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
                  href="/insulation-thickness-calculator"
                  className="block p-4 rounded-lg border border-surface-200 hover:border-primary hover:bg-primary-50 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">Thickness Calculator</h4>
                  <p className="text-sm text-text-muted">
                    Calculate required insulation depth.
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
                  How accurate are these recommendations?
                </h3>
                <p className="text-text">
                  Our quiz provides solid starting points based on building science best practices
                  and IECC code requirements. For complex projects or unusual situations (historic
                  homes, moisture issues, extreme climates), we recommend consulting with a local
                  insulation contractor or energy auditor.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Can I combine different insulation types?
                </h3>
                <p className="text-text">
                  Yes! Hybrid approaches are common. For example, 2&quot; of closed-cell spray foam
                  for air sealing + fiberglass batts to fill the rest of a wall cavity. Or radiant
                  barrier on the attic roof deck + blown-in cellulose on the attic floor. Combining
                  materials can optimize both performance and cost.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  What if I&apos;m still not sure which to choose?
                </h3>
                <p className="text-text">
                  Start by reading our detailed guides for your specific location (attic, walls,
                  basement, etc.). Then get 2-3 quotes from local insulation contractors — they can
                  assess your specific situation and provide material recommendations. Many offer
                  free estimates.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-surface-200">
                <h3 className="font-semibold text-primary mb-2">
                  Should I prioritize R-value or air sealing?
                </h3>
                <p className="text-text">
                  Air sealing often provides more bang for your buck than adding R-value alone.
                  Many experts recommend addressing air leaks first. Spray foam does both — it
                  insulates and air-seals. For batt or loose-fill insulation, separate air sealing
                  (caulk, foam, weatherstripping) is essential for maximum effectiveness.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
