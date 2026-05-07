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
  alternates: {
    canonical: 'https://www.insulationrvalues.com/what-insulation-do-i-need',
  },
  openGraph: {
    title: 'What Insulation Do I Need? | InsulationRValues.com',
    description:
      'Take our free quiz to find the best insulation for your home. Personalized recommendations in 2 minutes.',
    url: 'https://www.insulationrvalues.com/what-insulation-do-i-need',
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
          url: 'https://www.insulationrvalues.com/what-insulation-do-i-need',
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

        {/* Recommendations by Project Location (pre-rendered for SEO + AI extraction) */}
        <section className="py-12 bg-white border-t border-surface-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
              Insulation Recommendations by Project Location
            </h2>
            <p className="text-text-muted mb-8 max-w-3xl">
              The quick answer for the five most common project locations, with
              climate-zone variations noted. Use the quiz above for a personalized
              recommendation that factors in your budget and DIY-vs-pro preference.
            </p>

            <div className="space-y-8">
              <div className="border border-surface-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Attic Insulation
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-text mb-2">Best material:</p>
                    <p className="text-text-muted mb-3">
                      <Link href="/cellulose-insulation" className="text-primary hover:underline">
                        Blown-in cellulose
                      </Link>{' '}
                      ($0.60&ndash;$2.30/sq ft) for open accessible attics. Achieves
                      R-49 in ~14&quot;, R-60 in ~17&quot; settled depth. Flows around
                      wiring, plumbing, junction boxes better than batts. DIY-friendly
                      with rented blower from Home Depot/Lowe&apos;s.
                    </p>
                    <p className="font-semibold text-text mb-2">Targets:</p>
                    <ul className="text-text-muted space-y-1">
                      <li>Zone 1: R-30 minimum</li>
                      <li>Zones 2&ndash;3: R-49 minimum</li>
                      <li>Zones 4&ndash;8: R-60 minimum</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">When to consider spray foam:</p>
                    <p className="text-text-muted mb-3">
                      Conditioned attics (HVAC equipment in attic) where the roof deck
                      is insulated instead of the floor. 2&times; the cost of blown-in
                      but eliminates duct losses in unconditioned attic air.
                    </p>
                    <p className="font-semibold text-text mb-2">Air seal first:</p>
                    <p className="text-text-muted">
                      Air sealing the attic floor before insulating saves an additional
                      15&ndash;25% on energy bills per DOE field studies. Top plates,
                      wire/pipe penetrations, recessed lights, attic hatch, duct boots.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-surface-200 text-xs text-text-muted">
                  Full guide:{' '}
                  <Link href="/attic-insulation" className="text-primary hover:underline">
                    Attic Insulation
                  </Link>{' '}
                  &middot;{' '}
                  <Link href="/how-to-air-seal-attic" className="text-primary hover:underline">
                    How to Air Seal an Attic
                  </Link>
                </div>
              </div>

              <div className="border border-surface-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Wall Insulation
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-text mb-2">New construction:</p>
                    <p className="text-text-muted mb-3">
                      <Link href="/fiberglass-insulation" className="text-primary hover:underline">
                        Fiberglass batts
                      </Link>{' '}
                      sized to cavity (R-13 in 2&times;4, R-19 or R-21 HD in 2&times;6).
                      In zones 4&ndash;8, add{' '}
                      <Link href="/rigid-foam-insulation" className="text-primary hover:underline">
                        continuous exterior rigid foam
                      </Link>{' '}
                      (R-5ci or R-10ci) to reduce thermal bridging.
                    </p>
                    <p className="font-semibold text-text mb-2">Code targets:</p>
                    <ul className="text-text-muted space-y-1">
                      <li>Zones 1&ndash;2: R-13 cavity</li>
                      <li>Zones 3&ndash;4: R-20 or R-13+5ci</li>
                      <li>Zones 5&ndash;8: R-20+5ci or R-13+10ci</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Retrofit (no demo):</p>
                    <p className="text-text-muted mb-3">
                      <Link href="/insulate-walls-without-removing-drywall" className="text-primary hover:underline">
                        Dense-pack cellulose
                      </Link>{' '}
                      blown through small holes drilled in siding/drywall, packed to
                      3&ndash;3.5 lb/ft&sup3;. Adds R-12&ndash;R-13 to a 2&times;4
                      cavity plus significant air-sealing benefit. Pro-only job
                      ($1.50&ndash;$3.00/sq ft).
                    </p>
                    <p className="font-semibold text-text mb-2">Avoid:</p>
                    <p className="text-text-muted">
                      DIY consumer blowers can&apos;t reach proper dense-pack density.
                      Half-density installations settle within a year and leave the
                      top 18&quot; of every wall empty.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-surface-200 text-xs text-text-muted">
                  Full guide:{' '}
                  <Link href="/wall-insulation" className="text-primary hover:underline">
                    Wall Insulation
                  </Link>
                </div>
              </div>

              <div className="border border-surface-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Basement Insulation
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-text mb-2">Best for moisture:</p>
                    <p className="text-text-muted mb-3">
                      <Link href="/xps-insulation" className="text-primary hover:underline">
                        XPS rigid foam
                      </Link>{' '}
                      directly on the foundation wall (1.5&ndash;3&quot; for R-7.5 to
                      R-15) is moisture-tolerant, frame a 2&times;4 wall over it for
                      finishing. Or 2&ndash;3&quot; closed-cell{' '}
                      <Link href="/spray-foam-insulation" className="text-primary hover:underline">
                        spray foam
                      </Link>{' '}
                      for built-in vapor control.
                    </p>
                    <p className="font-semibold text-text mb-2">Code targets:</p>
                    <ul className="text-text-muted space-y-1">
                      <li>Zones 1&ndash;2: Not Required</li>
                      <li>Zone 3: R-5ci or R-13</li>
                      <li>Zone 4: R-10ci or R-13</li>
                      <li>Zones 5&ndash;8: R-15ci or R-19</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Highest-ROI add-on:</p>
                    <p className="text-text-muted mb-3">
                      Rim joists. 2&quot; closed-cell spray foam ($800&ndash;$2,000 for
                      a typical home) seals one of the largest air leakage points in
                      the building envelope. Blower-door measurements show 0.5&ndash;1.0
                      ACH50 reductions from rim joists alone.
                    </p>
                    <p className="font-semibold text-text mb-2">Avoid:</p>
                    <p className="text-text-muted">
                      Fiberglass batts directly against concrete walls. They wick
                      moisture, lose R-value, and grow mold. If you must use batts,
                      they go in a framed wall over rigid foam, not against concrete.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-surface-200 text-xs text-text-muted">
                  Full guide:{' '}
                  <Link href="/basement-insulation" className="text-primary hover:underline">
                    Basement Insulation
                  </Link>
                </div>
              </div>

              <div className="border border-surface-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Crawl Space Insulation
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-text mb-2">Modern best practice:</p>
                    <p className="text-text-muted mb-3">
                      <strong>Encapsulate</strong>: seal vents, install heavy-duty
                      vapor barrier on dirt floor, insulate walls with 2&quot;
                      closed-cell{' '}
                      <Link href="/spray-foam-insulation" className="text-primary hover:underline">
                        spray foam
                      </Link>{' '}
                      or rigid foam. Crawl space becomes part of conditioned envelope.
                      $3,000&ndash;$15,000 depending on size and access.
                    </p>
                    <p className="font-semibold text-text mb-2">Traditional approach:</p>
                    <p className="text-text-muted">
                      Insulate floor above crawl space (R-19 to R-30 batts between
                      joists, supported with insulation wires). Keep vents open. Less
                      expensive but moisture issues are common.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Avoid at all costs:</p>
                    <p className="text-text-muted mb-3">
                      Fiberglass batts in vented crawl space, unsupported. They sag
                      within years, absorb moisture, grow mold. The most commonly
                      documented insulation failure mode in residential energy audits.
                    </p>
                    <p className="font-semibold text-text mb-2">Vapor barrier first:</p>
                    <p className="text-text-muted">
                      A 6+ mil polyethylene barrier on the dirt floor is non-negotiable.
                      Soil moisture creates continuous vapor drive upward through the
                      crawl space without it.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-surface-200 text-xs text-text-muted">
                  Full guide:{' '}
                  <Link href="/crawl-space-insulation" className="text-primary hover:underline">
                    Crawl Space Insulation
                  </Link>{' '}
                  &middot;{' '}
                  <Link href="/crawl-space-vapor-barrier" className="text-primary hover:underline">
                    Vapor Barrier Guide
                  </Link>
                </div>
              </div>

              <div className="border border-surface-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Garage Insulation
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-text mb-2">Attached garage walls:</p>
                    <p className="text-text-muted mb-3">
                      Walls between garage and conditioned space need fire-rated batts
                      (mineral wool R-15 in 2&times;4, R-23 in 2&times;6) plus 5/8&quot;
                      Type X drywall on the garage side. Detached unheated garages
                      generally don&apos;t need wall insulation.
                    </p>
                    <p className="font-semibold text-text mb-2">Floor over garage:</p>
                    <p className="text-text-muted">
                      Match the wall requirement for the climate (R-19 to R-30 batts
                      between joists). Best practice: 2&quot; closed-cell spray foam
                      on the underside (R-12&ndash;R-14) plus batts above for total
                      R-30. Air-seals and prevents CO migration into living space.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-text mb-2">Garage doors:</p>
                    <p className="text-text-muted mb-3">
                      Most heat loss in attached garages is through the door, not the
                      walls. A new insulated steel garage door (R-12 to R-18) costs
                      $800&ndash;$2,500 and pays back faster than wall insulation in
                      most cases.
                    </p>
                    <p className="font-semibold text-text mb-2">Heating decision:</p>
                    <p className="text-text-muted">
                      If you&apos;re NOT going to heat the garage, just insulate the
                      shared wall and the floor above. Insulating the exterior walls
                      of an unheated garage is wasted money.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-surface-200 text-xs text-text-muted">
                  Full guide:{' '}
                  <Link href="/garage-insulation" className="text-primary hover:underline">
                    Garage Insulation
                  </Link>
                </div>
              </div>
            </div>
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
