import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { ExternalLink, FileText, Building2, FlaskConical, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Sources | InsulationRValues.com',
  description:
    'Every primary source InsulationRValues.com cites: DOE, ORNL, Building Science Corporation, IECC, ASHRAE, Energy Star, RESNET, and manufacturer technical data sheets.',
  alternates: {
    canonical: 'https://insulationrvalues.com/data-sources',
  },
  openGraph: {
    title: 'Data Sources | InsulationRValues.com',
    description:
      'Primary sources cited across the site: DOE, ORNL, BSC, IECC, ASHRAE, Energy Star, RESNET, manufacturer specs.',
    url: 'https://insulationrvalues.com/data-sources',
    siteName: 'InsulationRValues.com',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'InsulationRValues.com Data Sources',
      },
    ],
  },
}

export default function DataSourcesPage() {
  return (
    <>
      <SchemaMarkup
        type="webpage"
        data={{
          name: 'Data Sources',
          description:
            'Primary sources InsulationRValues.com cites for R-values, code requirements, costs, and recommendations.',
          url: '/data-sources',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ name: 'Data Sources', href: '/data-sources' }]} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary mb-6">Data Sources</h1>

          <section className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8 not-prose">
            <p className="text-text leading-relaxed">
              Every R-value, code requirement, cost range, and recommendation on this
              site is sourced from primary documents and cross-checked against at least
              two independent sources before publishing. This page lists the sources
              cited across the site, organised by type. If a claim on the site lacks a
              source link or appears to conflict with one of these references, please{' '}
              <Link href="/contact">flag it</Link>.
            </p>
          </section>

          {/* Government & Research */}
          <h2 className="flex items-center gap-2 not-prose text-2xl font-bold text-primary mt-8 mb-4">
            <Building2 className="w-6 h-6" /> Government &amp; Research Organisations
          </h2>

          <div className="not-prose space-y-4 mb-8">
            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">U.S. Department of Energy (DOE)</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Energy efficiency guidance, recommended R-values by climate zone, air
                sealing payback estimates, retrofit recommendations.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href="https://www.energy.gov/energysaver/insulation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Energy Saver Insulation Guide <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.energy.gov/energysaver/weatherize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Weatherization Resources <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">Oak Ridge National Laboratory (ORNL)</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Building envelope research, whole-wall R-value testing, thermal bridging
                effects on assembly performance.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href="https://web.ornl.gov/sci/buildings/tools/whole-wall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Whole-Wall R-Value Calculator <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">Building Science Corporation (BSC)</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Moisture management research, rigid foam temperature performance, vapor
                control strategy by climate zone, common assembly failure modes.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href="https://www.buildingscience.com/documents/digests"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Building Science Digests <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.buildingscience.com/documents/information-sheets/info-sheet-rigid-foam-insulation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Rigid Foam Information Sheet <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">National Renewable Energy Laboratory (NREL)</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Energy modelling data and residential building research used for
                long-term energy savings projections.
              </p>
              <a
                href="https://www.nrel.gov/buildings/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                NREL Buildings Research <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Codes & Standards */}
          <h2 className="flex items-center gap-2 not-prose text-2xl font-bold text-primary mt-8 mb-4">
            <Shield className="w-6 h-6" /> Building Codes &amp; Standards
          </h2>

          <div className="not-prose space-y-4 mb-8">
            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">2021 International Energy Conservation Code (IECC)</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Minimum R-value requirements by climate zone (Table R402.1.3,
                residential prescriptive). The current model code referenced site-wide,
                last verified May 2026. State adoption varies; some jurisdictions are
                still on 2018 IECC or have local amendments.
              </p>
              <a
                href="https://codes.iccsafe.org/content/IECC2021P2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                ICC Public Code Library <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">ASHRAE 90.1 / 62.2</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Commercial energy efficiency standards (90.1) and residential mechanical
                ventilation requirements (62.2). Cited where commercial assemblies or
                ventilation rates are discussed.
              </p>
              <a
                href="https://www.ashrae.org/technical-resources/standards-and-guidelines"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                ASHRAE Standards <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">RESNET (HERS Index, Grade I/II/III)</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Insulation installation grading standard. Grade I (perfect fill) vs
                Grade III (visible gaps, voids, compression) drives the 30%+ field
                performance gap discussed across articles.
              </p>
              <a
                href="https://www.resnet.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                RESNET <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">ASTM C518 / C177 (R-value test methods)</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Standardised R-value testing at 75&deg;F mean temperature with steady-state
                heat flow. The labelled R-value on every insulation product comes from
                one of these tests. Real-world performance varies with temperature,
                moisture, and installation quality.
              </p>
            </div>
          </div>

          {/* Industry */}
          <h2 className="flex items-center gap-2 not-prose text-2xl font-bold text-primary mt-8 mb-4">
            <FlaskConical className="w-6 h-6" /> Industry Sources
          </h2>

          <div className="not-prose space-y-4 mb-8">
            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">Energy Star</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Retrofit insulation recommendations by climate zone, qualified product
                lists, and Inflation Reduction Act tax-credit guidance.
              </p>
              <a
                href="https://www.energystar.gov/saveathome/seal_insulate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                Seal &amp; Insulate Guide <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">Manufacturer Technical Data Sheets</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Product-specific R-values per inch, density specifications, fire ratings
                (FSI/SDI), vapor permeability, and approved installation thicknesses.
              </p>
              <ul className="text-sm text-text-muted space-y-1 mt-2">
                <li>
                  <a
                    href="https://www.owenscorning.com/en-us/insulation/residential"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Owens Corning Residential Insulation
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rockwool.com/north-america/products-and-applications/products/comfortbatt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Rockwool Comfortbatt Technical Data
                  </a>
                </li>
                <li>Johns Manville, CertainTeed, Knauf product spec sheets (for batts and blown-in)</li>
                <li>Demilec, Icynene, Lapolla product sheets (for spray foam)</li>
                <li>Dow, Owens Corning, Atlas product sheets (for rigid foam boards)</li>
              </ul>
            </div>

            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">Insulation Contractors Association of America (ICAA)</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Industry installation best practices, contractor directory referenced
                for &ldquo;hire a local pro&rdquo; recommendations.
              </p>
              <a
                href="https://icaa.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                ICAA <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">Spray Polyurethane Foam Alliance (SPFA)</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Spray foam installation standards, certified-installer lookup, blowing
                agent guidance (HFO vs HFC).
              </p>
              <a
                href="https://www.sprayfoam.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                SPFA <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="border border-surface-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-primary">North American Insulation Manufacturers Association (NAIMA)</h3>
              <p className="text-sm text-text-muted mt-1 mb-2">
                Industry data on fiberglass and mineral wool. Note: industry trade body,
                so claims are cross-checked against independent sources.
              </p>
            </div>
          </div>

          {/* Methodology Recap */}
          <h2 className="flex items-center gap-2 not-prose text-2xl font-bold text-primary mt-8 mb-4">
            <FileText className="w-6 h-6" /> How These Sources Are Used
          </h2>
          <ul>
            <li>
              <strong>R-values per inch</strong> come from manufacturer technical data
              sheets (Owens Corning, Rockwool, Johns Manville) and ASTM C518 testing.
              Where manufacturer claims differ, the lower of two reasonable values is
              used.
            </li>
            <li>
              <strong>Code requirements</strong> reference 2021 IECC Table R402.1.3
              directly, with notes when state amendments differ materially.
            </li>
            <li>
              <strong>Cost ranges</strong> come from contractor pricing surveys, Home
              Depot/Lowe&apos;s retail pricing, and ICAA member quotes for 2025-2026.
            </li>
            <li>
              <strong>Energy savings claims</strong> reference DOE Energy Saver
              estimates, Energy Star retrofit guidance, or BSC field measurements.
              Specific figures (e.g., &ldquo;15&ndash;25% from air sealing&rdquo;) are
              attributed inline.
            </li>
            <li>
              <strong>Failure modes and best practices</strong> reference BSC research
              digests, RESNET inspection reports, or DOE weatherisation programme data.
            </li>
          </ul>

          <p className="mt-8 text-sm text-text-muted">
            Last updated May 2026. See the{' '}
            <Link href="/editorial-policy">editorial policy</Link> for the full review
            and update process. If you find a source that should be added or removed,{' '}
            <Link href="/contact">contact us</Link>.
          </p>
        </article>
      </div>
    </>
  )
}
