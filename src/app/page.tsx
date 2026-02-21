import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import {
  ArrowRight,
  Calculator,
  MapPin,
  Zap,
  ThermometerSun,
  Home,
  Layers,
  DollarSign,
  HelpCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insulation R-Value Charts, Calculators & Expert Guides | InsulationRValues.com',
  description: 'The most comprehensive insulation R-value resource. R-value charts for all materials, IECC code requirements by climate zone, cost data, and expert installation guides.',
  alternates: {
    canonical: 'https://insulationrvalues.com',
  },
  openGraph: {
    title: 'Insulation R-Value Charts, Calculators & Expert Guides',
    description: 'Complete R-value charts, IECC requirements, material comparisons, and calculators for every insulation project.',
    url: 'https://insulationrvalues.com',
    siteName: 'InsulationRValues.com',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <SchemaMarkup type="organization" data={{}} />

      {/* Compact Hero */}
      <section className="bg-primary text-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Insulation R-Value Charts & Guides
              </h1>
              <p className="text-primary-100 mt-2">
                Code requirements, material data, and calculators for every project.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/r-value-chart"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-surface-100 transition-colors text-sm"
              >
                <Zap className="w-4 h-4" />
                R-Value Chart
              </Link>
              <Link
                href="/r-value-calculator"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-500 border border-primary-400 transition-colors text-sm"
              >
                <Calculator className="w-4 h-4" />
                Calculator
              </Link>
              <Link
                href="/climate-zone-map"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-500 border border-primary-400 transition-colors text-sm"
              >
                <MapPin className="w-4 h-4" />
                Climate Zones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-surface-50 border-b border-surface-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#r-value-chart" className="text-primary hover:underline">R-Value Chart</a>
            <a href="#iecc-requirements" className="text-primary hover:underline">IECC Requirements</a>
            <a href="#r-value-per-inch" className="text-primary hover:underline">R-Value Per Inch</a>
            <a href="#climate-zones" className="text-primary hover:underline">Climate Zones</a>
            <a href="#insulation-cost" className="text-primary hover:underline">Cost Guide</a>
            <a href="#guides" className="text-primary hover:underline">Installation Guides</a>
            <a href="#faq" className="text-primary hover:underline">FAQ</a>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What Is R-Value Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">What Is R-Value in Insulation?</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              R-value measures thermal resistance—the ability of insulation to resist heat flow. The higher the R-value, the greater the insulating effectiveness. R-value is expressed as h·ft²·°F/BTU in the United States, representing the temperature difference needed to transfer one BTU of heat per hour through one square foot of material.
            </p>
            <p>
              The R-value you need depends on three factors: your climate zone (determined by heating and cooling degree days), the location being insulated (attic, walls, basement, etc.), and local building codes. The International Energy Conservation Code (IECC) establishes minimum R-value requirements, though many energy-conscious homeowners exceed these minimums for better comfort and energy savings.
            </p>
            <p>
              R-values are additive when materials are layered. For example, R-19 fiberglass batts plus R-11 batts equals R-30 total. However, compression reduces R-value—a compressed R-19 batt performs below its rated value. Proper installation without compression, gaps, or voids is essential for achieving rated performance.
            </p>
          </div>
          <div className="mt-4">
            <Link href="/what-is-r-value" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Complete guide to understanding R-value <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* R-Value Chart Section */}
        <section id="r-value-chart" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-primary mb-4">R-Value Insulation Chart</h2>
          <p className="text-text-muted mb-6">
            This chart shows R-value per inch, typical applications, and cost ranges for all common insulation materials. Use this data to compare options for your project.
          </p>

          <div className="overflow-x-auto border border-surface-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Material</th>
                  <th className="px-4 py-3 text-center font-medium">R-Value/Inch</th>
                  <th className="px-4 py-3 text-left font-medium">Best For</th>
                  <th className="px-4 py-3 text-center font-medium">Cost/Sq Ft</th>
                  <th className="px-4 py-3 text-center font-medium">DIY?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Closed-Cell Spray Foam</td>
                  <td className="px-4 py-3 text-center font-mono">R-6.0 – R-7.0</td>
                  <td className="px-4 py-3">Rim joists, crawl spaces, moisture barriers</td>
                  <td className="px-4 py-3 text-center font-mono">$1.00–$2.00</td>
                  <td className="px-4 py-3 text-center">No</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Polyisocyanurate (Polyiso)</td>
                  <td className="px-4 py-3 text-center font-mono">R-5.6 – R-6.5</td>
                  <td className="px-4 py-3">Exterior sheathing, roofing, continuous insulation</td>
                  <td className="px-4 py-3 text-center font-mono">$0.70–$1.00</td>
                  <td className="px-4 py-3 text-center">Yes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Extruded Polystyrene (XPS)</td>
                  <td className="px-4 py-3 text-center font-mono">R-5.0</td>
                  <td className="px-4 py-3">Below-grade, foundation, high-moisture areas</td>
                  <td className="px-4 py-3 text-center font-mono">$0.50–$0.75</td>
                  <td className="px-4 py-3 text-center">Yes</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Expanded Polystyrene (EPS)</td>
                  <td className="px-4 py-3 text-center font-mono">R-3.6 – R-4.2</td>
                  <td className="px-4 py-3">ICF walls, EIFS, cost-effective rigid foam</td>
                  <td className="px-4 py-3 text-center font-mono">$0.25–$0.50</td>
                  <td className="px-4 py-3 text-center">Yes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Open-Cell Spray Foam</td>
                  <td className="px-4 py-3 text-center font-mono">R-3.5 – R-3.8</td>
                  <td className="px-4 py-3">Interior walls, sound control, cathedral ceilings</td>
                  <td className="px-4 py-3 text-center font-mono">$0.44–$0.65</td>
                  <td className="px-4 py-3 text-center">No</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Mineral Wool (Rockwool)</td>
                  <td className="px-4 py-3 text-center font-mono">R-3.0 – R-3.3</td>
                  <td className="px-4 py-3">Fire resistance, soundproofing, exterior walls</td>
                  <td className="px-4 py-3 text-center font-mono">$0.60–$1.20</td>
                  <td className="px-4 py-3 text-center">Yes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Fiberglass Batts</td>
                  <td className="px-4 py-3 text-center font-mono">R-2.9 – R-3.8</td>
                  <td className="px-4 py-3">Standard wall cavities, attics, floors</td>
                  <td className="px-4 py-3 text-center font-mono">$0.30–$0.50</td>
                  <td className="px-4 py-3 text-center">Yes</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Blown-In Fiberglass</td>
                  <td className="px-4 py-3 text-center font-mono">R-2.2 – R-2.7</td>
                  <td className="px-4 py-3">Attic floors, wall retrofits</td>
                  <td className="px-4 py-3 text-center font-mono">$0.50–$1.00</td>
                  <td className="px-4 py-3 text-center">Yes*</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Cellulose (Blown-In)</td>
                  <td className="px-4 py-3 text-center font-mono">R-3.2 – R-3.8</td>
                  <td className="px-4 py-3">Attics, dense-pack walls, retrofits</td>
                  <td className="px-4 py-3 text-center font-mono">$0.60–$1.20</td>
                  <td className="px-4 py-3 text-center">Yes*</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Radiant Barrier</td>
                  <td className="px-4 py-3 text-center font-mono">N/A**</td>
                  <td className="px-4 py-3">Attic rafters (hot climates only)</td>
                  <td className="px-4 py-3 text-center font-mono">$0.15–$0.50</td>
                  <td className="px-4 py-3 text-center">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mt-3">
            *Blower machine rental available at home improvement stores. **Radiant barriers reduce radiant heat transfer; they don't have an R-value but can reduce cooling loads by 5–10% in hot climates.
          </p>
          <div className="mt-4">
            <Link href="/r-value-chart" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              View complete R-value chart with all materials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* IECC Requirements Section */}
        <section id="iecc-requirements" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-primary mb-4">2021 IECC Insulation Requirements by Climate Zone</h2>
          <p className="text-text-muted mb-6">
            The International Energy Conservation Code (IECC) establishes minimum R-value requirements based on climate zone. These are legal minimums—exceeding them improves energy efficiency and comfort. Use our <Link href="/r-value-calculator" className="text-primary hover:underline">R-Value Calculator</Link> to find your zone by ZIP code.
          </p>

          <div className="overflow-x-auto border border-surface-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Zone</th>
                  <th className="px-4 py-3 text-center font-medium">Ceiling/Attic</th>
                  <th className="px-4 py-3 text-center font-medium">Wood Frame Wall</th>
                  <th className="px-4 py-3 text-center font-medium">Floor</th>
                  <th className="px-4 py-3 text-center font-medium">Basement Wall</th>
                  <th className="px-4 py-3 text-center font-medium">Crawl Space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Zone 1</td>
                  <td className="px-4 py-3 text-center font-mono">R-30</td>
                  <td className="px-4 py-3 text-center font-mono">R-13</td>
                  <td className="px-4 py-3 text-center font-mono">R-13</td>
                  <td className="px-4 py-3 text-center font-mono">R-0</td>
                  <td className="px-4 py-3 text-center font-mono">R-0</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Zone 2</td>
                  <td className="px-4 py-3 text-center font-mono">R-38</td>
                  <td className="px-4 py-3 text-center font-mono">R-13</td>
                  <td className="px-4 py-3 text-center font-mono">R-13</td>
                  <td className="px-4 py-3 text-center font-mono">R-0</td>
                  <td className="px-4 py-3 text-center font-mono">R-0</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Zone 3</td>
                  <td className="px-4 py-3 text-center font-mono">R-38</td>
                  <td className="px-4 py-3 text-center font-mono">R-20 or R-13+5ci</td>
                  <td className="px-4 py-3 text-center font-mono">R-19</td>
                  <td className="px-4 py-3 text-center font-mono">R-5ci</td>
                  <td className="px-4 py-3 text-center font-mono">R-5ci</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Zone 4 (except Marine)</td>
                  <td className="px-4 py-3 text-center font-mono">R-49</td>
                  <td className="px-4 py-3 text-center font-mono">R-20 or R-13+5ci</td>
                  <td className="px-4 py-3 text-center font-mono">R-19</td>
                  <td className="px-4 py-3 text-center font-mono">R-10ci or R-13</td>
                  <td className="px-4 py-3 text-center font-mono">R-10ci</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Zone 4 Marine</td>
                  <td className="px-4 py-3 text-center font-mono">R-49</td>
                  <td className="px-4 py-3 text-center font-mono">R-20+5ci or R-13+10ci</td>
                  <td className="px-4 py-3 text-center font-mono">R-30</td>
                  <td className="px-4 py-3 text-center font-mono">R-10ci or R-13</td>
                  <td className="px-4 py-3 text-center font-mono">R-10ci</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Zone 5</td>
                  <td className="px-4 py-3 text-center font-mono">R-49</td>
                  <td className="px-4 py-3 text-center font-mono">R-20+5ci or R-13+10ci</td>
                  <td className="px-4 py-3 text-center font-mono">R-30</td>
                  <td className="px-4 py-3 text-center font-mono">R-15ci or R-19</td>
                  <td className="px-4 py-3 text-center font-mono">R-15ci</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Zone 6</td>
                  <td className="px-4 py-3 text-center font-mono">R-49</td>
                  <td className="px-4 py-3 text-center font-mono">R-20+5ci or R-13+10ci</td>
                  <td className="px-4 py-3 text-center font-mono">R-30</td>
                  <td className="px-4 py-3 text-center font-mono">R-15ci or R-19</td>
                  <td className="px-4 py-3 text-center font-mono">R-15ci</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Zone 7</td>
                  <td className="px-4 py-3 text-center font-mono">R-49</td>
                  <td className="px-4 py-3 text-center font-mono">R-20+10ci or R-13+15ci</td>
                  <td className="px-4 py-3 text-center font-mono">R-38</td>
                  <td className="px-4 py-3 text-center font-mono">R-15ci or R-19</td>
                  <td className="px-4 py-3 text-center font-mono">R-15ci</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Zone 8</td>
                  <td className="px-4 py-3 text-center font-mono">R-49</td>
                  <td className="px-4 py-3 text-center font-mono">R-20+10ci or R-13+15ci</td>
                  <td className="px-4 py-3 text-center font-mono">R-38</td>
                  <td className="px-4 py-3 text-center font-mono">R-15ci or R-19</td>
                  <td className="px-4 py-3 text-center font-mono">R-15ci</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mt-3">
            "ci" = continuous insulation (uninterrupted by framing). R-13+5ci means R-13 cavity insulation plus R-5 continuous exterior insulation. Local codes may differ—always verify with your building department.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/r-value-calculator" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Find requirements for your ZIP code <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/climate-zone-map" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              View climate zone map <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* R-Value Per Inch Section */}
        <section id="r-value-per-inch" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-primary mb-4">R-Value Per Inch Comparison</h2>
          <p className="text-text-muted mb-6">
            R-value per inch determines how much thickness you need to achieve your target R-value. Higher R-per-inch materials achieve the same thermal resistance in less space—critical for walls with limited cavity depth or cathedral ceilings where every inch matters.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-primary mb-3">Highest R-Value Per Inch</h3>
              <div className="border border-surface-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-accent text-white">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium">Material</th>
                      <th className="px-4 py-2 text-right font-medium">R/Inch</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-200">
                    <tr className="bg-white">
                      <td className="px-4 py-2">Closed-Cell Spray Foam</td>
                      <td className="px-4 py-2 text-right font-mono font-medium">R-6.5</td>
                    </tr>
                    <tr className="bg-surface-50">
                      <td className="px-4 py-2">Polyisocyanurate</td>
                      <td className="px-4 py-2 text-right font-mono font-medium">R-6.0</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2">Extruded Polystyrene (XPS)</td>
                      <td className="px-4 py-2 text-right font-mono font-medium">R-5.0</td>
                    </tr>
                    <tr className="bg-surface-50">
                      <td className="px-4 py-2">Expanded Polystyrene (EPS)</td>
                      <td className="px-4 py-2 text-right font-mono font-medium">R-4.0</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2">High-Density Fiberglass</td>
                      <td className="px-4 py-2 text-right font-mono font-medium">R-3.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-primary mb-3">Standard R-Value Per Inch</h3>
              <div className="border border-surface-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium">Material</th>
                      <th className="px-4 py-2 text-right font-medium">R/Inch</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-200">
                    <tr className="bg-white">
                      <td className="px-4 py-2">Open-Cell Spray Foam</td>
                      <td className="px-4 py-2 text-right font-mono font-medium">R-3.7</td>
                    </tr>
                    <tr className="bg-surface-50">
                      <td className="px-4 py-2">Cellulose (Blown)</td>
                      <td className="px-4 py-2 text-right font-mono font-medium">R-3.5</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2">Mineral Wool Batts</td>
                      <td className="px-4 py-2 text-right font-mono font-medium">R-3.3</td>
                    </tr>
                    <tr className="bg-surface-50">
                      <td className="px-4 py-2">Fiberglass Batts</td>
                      <td className="px-4 py-2 text-right font-mono font-medium">R-3.2</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2">Blown-In Fiberglass</td>
                      <td className="px-4 py-2 text-right font-mono font-medium">R-2.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-surface-50 border border-surface-200 rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Thickness Required for R-49 Attic Insulation</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-text-muted block">Closed-Cell Foam</span>
                <span className="font-mono font-medium">7.5 inches</span>
              </div>
              <div>
                <span className="text-text-muted block">Cellulose</span>
                <span className="font-mono font-medium">14 inches</span>
              </div>
              <div>
                <span className="text-text-muted block">Fiberglass Batts</span>
                <span className="font-mono font-medium">15.5 inches</span>
              </div>
              <div>
                <span className="text-text-muted block">Blown Fiberglass</span>
                <span className="font-mono font-medium">19.5 inches</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Link href="/r-value-per-inch" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Complete R-value per inch guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Climate Zones Section */}
        <section id="climate-zones" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-primary mb-4">IECC Climate Zones Explained</h2>
          <p className="text-text-muted mb-6">
            The United States is divided into 8 climate zones based on heating degree days (HDD) and cooling degree days (CDD). Your zone determines minimum insulation requirements under the IECC building code.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-surface-200 rounded-lg overflow-hidden">
              <div className="bg-primary text-white px-4 py-3 font-medium">Heating-Dominated Zones</div>
              <div className="p-4 space-y-4">
                <div>
                  <div className="font-medium">Zone 5 (4,500–5,400 HDD)</div>
                  <p className="text-sm text-text-muted">Denver, Chicago, Boston, Salt Lake City. Cold winters, moderate summers. Attic R-49, wall R-20+5ci typical.</p>
                </div>
                <div>
                  <div className="font-medium">Zone 6 (5,400–7,200 HDD)</div>
                  <p className="text-sm text-text-muted">Minneapolis, Milwaukee, Burlington. Very cold winters. Same requirements as Zone 5, but more savings from exceeding minimums.</p>
                </div>
                <div>
                  <div className="font-medium">Zone 7 (7,200–9,000 HDD)</div>
                  <p className="text-sm text-text-muted">Duluth, northern New England, northern tier. Severe winters require R-49 attic, R-20+10ci walls, R-38 floors.</p>
                </div>
                <div>
                  <div className="font-medium">Zone 8 (9,000+ HDD)</div>
                  <p className="text-sm text-text-muted">Alaska only. Extreme cold requires maximum insulation at all envelope locations.</p>
                </div>
              </div>
            </div>

            <div className="border border-surface-200 rounded-lg overflow-hidden">
              <div className="bg-secondary text-white px-4 py-3 font-medium">Cooling-Dominated & Mixed Zones</div>
              <div className="p-4 space-y-4">
                <div>
                  <div className="font-medium">Zone 1 (Very Hot-Humid)</div>
                  <p className="text-sm text-text-muted">Miami, Key West, Hawaii. Cooling-dominated. R-30 attic minimum, air sealing critical for humidity control.</p>
                </div>
                <div>
                  <div className="font-medium">Zone 2 (Hot-Humid/Hot-Dry)</div>
                  <p className="text-sm text-text-muted">Houston, Phoenix, South Florida. R-38 attic, radiant barriers beneficial. Vapor barriers face exterior.</p>
                </div>
                <div>
                  <div className="font-medium">Zone 3 (Warm)</div>
                  <p className="text-sm text-text-muted">Atlanta, Dallas, Los Angeles. Mixed heating/cooling. R-38 attic, continuous insulation becoming common.</p>
                </div>
                <div>
                  <div className="font-medium">Zone 4 (Mixed)</div>
                  <p className="text-sm text-text-muted">Washington DC, Seattle, St. Louis. R-49 attic required. Marine (4C) subzone has stricter wall requirements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/climate-zone-map" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Interactive climate zone map <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/r-value-calculator" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Find your zone by ZIP code <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Cost Section */}
        <section id="insulation-cost" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-primary mb-4">Insulation Cost Guide</h2>
          <p className="text-text-muted mb-6">
            Insulation costs vary by material, installation method (DIY vs. professional), and project scope. These are 2024-2025 national average costs including materials and labor where applicable.
          </p>

          <div className="overflow-x-auto border border-surface-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Project Type</th>
                  <th className="px-4 py-3 text-center font-medium">DIY Cost</th>
                  <th className="px-4 py-3 text-center font-medium">Installed Cost</th>
                  <th className="px-4 py-3 text-center font-medium">For 1,000 Sq Ft</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Attic: Blown-In Fiberglass (R-49)</td>
                  <td className="px-4 py-3 text-center font-mono">$0.50–$0.75/sf</td>
                  <td className="px-4 py-3 text-center font-mono">$1.00–$1.50/sf</td>
                  <td className="px-4 py-3 text-center font-mono">$1,000–$1,500</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Attic: Blown-In Cellulose (R-49)</td>
                  <td className="px-4 py-3 text-center font-mono">$0.60–$0.90/sf</td>
                  <td className="px-4 py-3 text-center font-mono">$1.20–$1.80/sf</td>
                  <td className="px-4 py-3 text-center font-mono">$1,200–$1,800</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Attic: Open-Cell Spray Foam (R-38)</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center font-mono">$1.50–$2.50/sf</td>
                  <td className="px-4 py-3 text-center font-mono">$1,500–$2,500</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Attic: Closed-Cell Spray Foam (R-49)</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center font-mono">$3.00–$5.00/sf</td>
                  <td className="px-4 py-3 text-center font-mono">$3,000–$5,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Wall Cavity: Blown-In (Retrofit)</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center font-mono">$1.50–$3.00/sf</td>
                  <td className="px-4 py-3 text-center font-mono">$1,500–$3,000</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Basement Walls: Rigid Foam (R-15)</td>
                  <td className="px-4 py-3 text-center font-mono">$0.75–$1.25/sf</td>
                  <td className="px-4 py-3 text-center font-mono">$2.00–$3.50/sf</td>
                  <td className="px-4 py-3 text-center font-mono">$2,000–$3,500</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Crawl Space: Closed-Cell Foam</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center font-mono">$2.50–$4.50/sf</td>
                  <td className="px-4 py-3 text-center font-mono">$2,500–$4,500</td>
                </tr>
                <tr className="bg-surface-50">
                  <td className="px-4 py-3 font-medium">Rim Joist: Closed-Cell Foam</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center font-mono">$3.00–$5.00/lf</td>
                  <td className="px-4 py-3 text-center font-mono">$450–$750 (avg home)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/insulation-cost-calculator" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Calculate costs for your project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/spray-foam-insulation-cost" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Spray foam cost breakdown <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/attic-insulation-cost" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Attic insulation costs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Installation Guides Section */}
        <section id="guides" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-primary mb-4">Insulation Installation Guides</h2>
          <p className="text-text-muted mb-6">
            Proper installation is as important as choosing the right material. Gaps, compression, and missing vapor barriers can reduce effective R-value by 30% or more. Our guides cover both DIY projects and what to expect from professional installation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-surface-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <Home className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-primary mb-2">Attic Insulation</h3>
              <p className="text-sm text-text-muted mb-3">
                Air sealing, vapor barriers, ventilation baffles, and achieving R-49 or higher. Covers blown-in, batts, and spray foam options.
              </p>
              <Link href="/attic-insulation" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-surface-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <Layers className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-primary mb-2">Wall Insulation</h3>
              <p className="text-sm text-text-muted mb-3">
                New construction vs. retrofit approaches. Dense-pack cellulose, drill-and-fill, and continuous exterior insulation strategies.
              </p>
              <Link href="/wall-insulation" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-surface-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <ThermometerSun className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-primary mb-2">Basement Insulation</h3>
              <p className="text-sm text-text-muted mb-3">
                Interior vs. exterior approaches, moisture management, rim joist air sealing, and meeting code for conditioned basements.
              </p>
              <Link href="/basement-insulation" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-surface-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-primary mb-2">Crawl Space Insulation</h3>
              <p className="text-sm text-text-muted mb-3">
                Encapsulation vs. vented crawl spaces, vapor barriers, and choosing between floor insulation and crawl space wall insulation.
              </p>
              <Link href="/crawl-space-insulation" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-surface-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <Calculator className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-primary mb-2">Garage Insulation</h3>
              <p className="text-sm text-text-muted mb-3">
                Insulating attached garage walls, ceilings above living space, and garage doors for improved comfort and energy savings.
              </p>
              <Link href="/garage-insulation" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white border border-surface-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <DollarSign className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-primary mb-2">How to Install Blown-In</h3>
              <p className="text-sm text-text-muted mb-3">
                Step-by-step DIY guide for blown-in fiberglass and cellulose. Equipment rental, safety, and achieving consistent depth.
              </p>
              <Link href="/how-to-install-blown-in-insulation" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                Read guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Material Comparisons Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">Insulation Material Comparisons</h2>
          <p className="text-text-muted mb-6">
            Choosing between insulation types? These side-by-side comparisons analyze cost, performance, installation requirements, and best applications for each material pairing.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/open-cell-vs-closed-cell-spray-foam" className="flex items-center gap-4 p-4 bg-white border border-surface-200 rounded-lg hover:border-primary-200 hover:shadow-md transition-all">
              <div className="flex-1">
                <h3 className="font-semibold text-primary">Open-Cell vs. Closed-Cell Spray Foam</h3>
                <p className="text-sm text-text-muted">R-value, moisture permeability, cost, and when to use each type.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </Link>

            <Link href="/fiberglass-vs-cellulose" className="flex items-center gap-4 p-4 bg-white border border-surface-200 rounded-lg hover:border-primary-200 hover:shadow-md transition-all">
              <div className="flex-1">
                <h3 className="font-semibold text-primary">Fiberglass vs. Cellulose</h3>
                <p className="text-sm text-text-muted">Cost, settling, fire resistance, and installation for attic blowing.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </Link>

            <Link href="/fiberglass-vs-mineral-wool" className="flex items-center gap-4 p-4 bg-white border border-surface-200 rounded-lg hover:border-primary-200 hover:shadow-md transition-all">
              <div className="flex-1">
                <h3 className="font-semibold text-primary">Fiberglass vs. Mineral Wool</h3>
                <p className="text-sm text-text-muted">Fire rating, soundproofing, moisture resistance, and cost differences.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </Link>

            <Link href="/xps-vs-eps" className="flex items-center gap-4 p-4 bg-white border border-surface-200 rounded-lg hover:border-primary-200 hover:shadow-md transition-all">
              <div className="flex-1">
                <h3 className="font-semibold text-primary">XPS vs. EPS Rigid Foam</h3>
                <p className="text-sm text-text-muted">Moisture absorption, R-value, cost, and foundation applications.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </Link>

            <Link href="/faced-vs-unfaced-insulation" className="flex items-center gap-4 p-4 bg-white border border-surface-200 rounded-lg hover:border-primary-200 hover:shadow-md transition-all">
              <div className="flex-1">
                <h3 className="font-semibold text-primary">Faced vs. Unfaced Insulation</h3>
                <p className="text-sm text-text-muted">When you need a vapor retarder and which direction it should face.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </Link>

            <Link href="/batt-vs-blown-in-insulation" className="flex items-center gap-4 p-4 bg-white border border-surface-200 rounded-lg hover:border-primary-200 hover:shadow-md transition-all">
              <div className="flex-1">
                <h3 className="font-semibold text-primary">Batts vs. Blown-In Insulation</h3>
                <p className="text-sm text-text-muted">Coverage quality, labor, cost, and which is better for attics.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border-b border-surface-200 pb-6">
              <h3 className="font-semibold text-primary mb-2">What R-value do I need for my attic?</h3>
              <p className="text-text">
                The minimum R-value for attics depends on your climate zone. Zones 1-2 require R-30 to R-38, Zone 3 requires R-38, and Zones 4-8 require R-49 per the 2021 IECC code. However, many experts recommend R-60 for cold climates (Zones 5-8) for optimal energy savings. Use our <Link href="/r-value-calculator" className="text-primary hover:underline">R-Value Calculator</Link> to find the specific requirement for your ZIP code.
              </p>
            </div>

            <div className="border-b border-surface-200 pb-6">
              <h3 className="font-semibold text-primary mb-2">How thick should my insulation be?</h3>
              <p className="text-text">
                Thickness depends on the material's R-value per inch and your target R-value. For R-49 attic insulation: blown fiberglass needs about 19 inches, cellulose needs 14 inches, and closed-cell spray foam needs only 7.5 inches. Use our <Link href="/insulation-thickness-calculator" className="text-primary hover:underline">Thickness Calculator</Link> to determine exact depth for any R-value and material combination.
              </p>
            </div>

            <div className="border-b border-surface-200 pb-6">
              <h3 className="font-semibold text-primary mb-2">What is the best insulation for walls?</h3>
              <p className="text-text">
                For new construction, fiberglass or mineral wool batts sized to your wall cavity (R-13 for 2x4, R-19-21 for 2x6) are most common. Add continuous exterior insulation (rigid foam or mineral wool boards) to reduce thermal bridging. For retrofits without removing drywall, blown-in cellulose or fiberglass via small holes is the standard approach. Spray foam offers the best air sealing but costs 2-3x more. See our <Link href="/wall-insulation" className="text-primary hover:underline">Wall Insulation Guide</Link> for detailed recommendations.
              </p>
            </div>

            <div className="border-b border-surface-200 pb-6">
              <h3 className="font-semibold text-primary mb-2">Is spray foam worth the extra cost?</h3>
              <p className="text-text">
                Spray foam provides the highest R-value per inch (R-6.5 for closed-cell) and creates an air barrier, eliminating the need for separate air sealing. It's worth the extra cost for rim joists, crawl spaces, cathedral ceilings, and anywhere air sealing is critical. For standard attics with accessible air sealing, blown-in cellulose or fiberglass often provides better ROI. See our <Link href="/spray-foam-insulation-cost" className="text-primary hover:underline">spray foam cost analysis</Link> for payback calculations.
              </p>
            </div>

            <div className="border-b border-surface-200 pb-6">
              <h3 className="font-semibold text-primary mb-2">Do I need a vapor barrier with insulation?</h3>
              <p className="text-text">
                It depends on climate and location. In cold climates (Zones 4-8), a vapor retarder (Class II or III) should face the warm-in-winter side (interior). In hot-humid climates (Zones 1-2), it should face the exterior. In mixed climates, "smart" vapor retarders that adjust permeability are often recommended. Never sandwich insulation between two vapor barriers—moisture must be able to dry in at least one direction. See our <Link href="/faced-vs-unfaced-insulation" className="text-primary hover:underline">faced vs. unfaced guide</Link> for details.
              </p>
            </div>

            <div className="border-b border-surface-200 pb-6">
              <h3 className="font-semibold text-primary mb-2">Can I add insulation on top of existing insulation?</h3>
              <p className="text-text">
                Yes, adding insulation over existing material is common practice for attic upgrades. The new insulation does not need a vapor retarder—only the bottom layer should have one. Ensure the existing insulation is dry and not compressed. If upgrading from R-19 to R-49, you're adding R-30 worth of material. Blown-in products work best for layering over existing batts. Address any air leaks before adding insulation for maximum effectiveness.
              </p>
            </div>

            <div className="border-b border-surface-200 pb-6">
              <h3 className="font-semibold text-primary mb-2">What's the difference between R-value and U-value?</h3>
              <p className="text-text">
                R-value measures thermal resistance (higher is better), while U-value measures thermal conductance (lower is better). They are reciprocals: U = 1/R. R-value is used for insulation materials in the US, while U-value is often used for windows and whole-assembly performance. An R-20 wall assembly has a U-value of 0.05. The IECC code specifies both, with U-values used for windows and doors.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="font-semibold text-primary mb-2">How much can I save by adding insulation?</h3>
              <p className="text-text">
                Savings depend on your current insulation level, target level, climate, and energy costs. The DOE estimates that upgrading from R-11 to R-49 attic insulation can reduce heating/cooling costs by 10-50%, with the largest savings in extreme climates. A typical attic upgrade from R-19 to R-49 costs $1,000-$1,500 for a 1,000 sq ft attic and may save $200-$400 annually in Zones 5-7. Use our <Link href="/insulation-savings-calculator" className="text-primary hover:underline">Savings Calculator</Link> for a personalized estimate.
              </p>
            </div>
          </div>
        </section>

        {/* Calculators Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4">Insulation Calculators & Tools</h2>
          <p className="text-text-muted mb-6">
            Free interactive tools to help you determine requirements, estimate costs, and choose the right insulation for your project.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/r-value-calculator" className="block p-5 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">
              <Calculator className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">R-Value Calculator</h3>
              <p className="text-sm text-primary-100">Find code requirements by ZIP code</p>
            </Link>

            <Link href="/insulation-cost-calculator" className="block p-5 bg-secondary text-white rounded-lg hover:bg-secondary-600 transition-colors">
              <DollarSign className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">Cost Calculator</h3>
              <p className="text-sm text-secondary-100">Estimate material and labor costs</p>
            </Link>

            <Link href="/climate-zone-map" className="block p-5 bg-accent text-white rounded-lg hover:bg-accent-600 transition-colors">
              <MapPin className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">Climate Zone Map</h3>
              <p className="text-sm text-accent-100">Interactive IECC zone lookup</p>
            </Link>

            <Link href="/insulation-thickness-calculator" className="block p-5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Layers className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">Thickness Calculator</h3>
              <p className="text-sm text-purple-100">Determine required depth for any R-value</p>
            </Link>

            <Link href="/insulation-savings-calculator" className="block p-5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              <Zap className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">Savings Calculator</h3>
              <p className="text-sm text-emerald-100">Estimate annual energy savings</p>
            </Link>

            <Link href="/what-insulation-do-i-need" className="block p-5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <HelpCircle className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">Insulation Quiz</h3>
              <p className="text-sm text-indigo-100">Get personalized recommendations</p>
            </Link>
          </div>
        </section>

      </div>

      {/* Trust Footer */}
      <section className="bg-surface-50 border-t border-surface-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-text-muted">
              <span className="font-medium">Independent Resource:</span> InsulationRValues.com is not affiliated with any manufacturer, retailer, or installation company. Our recommendations are based on building science data from the U.S. Department of Energy, Oak Ridge National Laboratory, Building Science Corporation, and IECC building codes.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
