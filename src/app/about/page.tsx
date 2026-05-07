import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Shield, Mail, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About InsulationRValues.com | A Homeowner-Built Insulation Resource',
  description:
    'How a homeowner who built a house in IECC Climate Zone 7 turned hundreds of hours of insulation research into one sourced reference. Methodology, sources, and limits.',
  alternates: {
    canonical: 'https://www.insulationrvalues.com/about',
  },
  openGraph: {
    title: 'About InsulationRValues.com',
    description:
      'Built by a homeowner who spent hundreds of hours researching insulation for his own North Dakota build. Now a sourced reference for everyone else.',
    url: 'https://www.insulationrvalues.com/about',
    siteName: 'InsulationRValues.com',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'About InsulationRValues.com',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup type="organization" data={{}} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ name: 'About Us', href: '/about' }]} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary mb-6">About InsulationRValues.com</h1>

          {/* Mission Statement */}
          <section className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-xl font-semibold text-primary mb-3">In one sentence</h2>
            <p className="text-text leading-relaxed">
              InsulationRValues.com is a sourced, homeowner-built reference for R-values,
              IECC code requirements, material costs, and the trade-offs between insulation
              choices &mdash; built so the next homeowner does not have to spend hundreds of
              hours digging through scattered sources.
            </p>
          </section>

          {/* Origin story */}
          <h2>Why this site exists</h2>
          <p>
            In 2022, I built my first house in North Dakota. That puts me in IECC Climate
            Zone 7 &mdash; winters where wind chill can drop below -40&deg;F and a leaky
            building envelope means a furnace running half the day. With energy costs
            trending the way they were, I had one question: how do I build this once and
            not pay for it for the next forty years?
          </p>
          <p>
            So I started reading. DOE energy guides. Oak Ridge National Laboratory whole-wall
            R-value studies. Building Science Corporation papers on rigid foam temperature
            performance. The 2021 IECC text and the state amendments that go with it.
            Manufacturer spec sheets. ASHRAE ventilation standards. RESNET installation-grade
            studies. Hundreds of hours across .gov and .edu PDFs and the corners of the
            internet where the people who actually install this stuff argue about the
            details.
          </p>
          <p>
            What frustrated me was that nobody had pulled it together. Most existing
            insulation sites were contractor blogs trying to sell something, manufacturer
            pages promoting their own products, or thin AI content that didn&apos;t even
            have the climate zones right. The information existed &mdash; it was just
            scattered across thirty different places, and half of those places contradicted
            each other.
          </p>
          <p>
            This site is the reference I built for myself, organised so you don&apos;t
            have to repeat the search.
          </p>

          {/* What this site is */}
          <h2>What this site is</h2>
          <p>
            A research-based reference. Every R-value, code requirement, cost range, and
            recommendation here is sourced from primary documents &mdash; not scraped from
            other content sites. Numerical claims are cross-checked against at least two
            independent sources before publishing. Where sources disagree (polyiso&apos;s
            cold-weather derating is a good example), I say so instead of papering over it.
          </p>
          <p>
            The calculators run on the same data tables I used to size my own envelope:
            2021 IECC Table R402.1.3 for code minimums, Energy Star retrofit guidance for
            upgrade scenarios, and manufacturer R-per-inch ranges for thickness
            calculations.
          </p>

          {/* What this site is NOT */}
          <div className="not-prose bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">What this site is not</h3>
                <p className="text-text text-sm leading-relaxed mb-3">
                  I am not a licensed contractor, building scientist, or engineer. I built
                  one house and read everything I could find from primary sources before
                  making decisions. This site is educational reference material &mdash; not
                  a substitute for professional advice on your specific project.
                </p>
                <p className="text-text text-sm leading-relaxed">
                  For local code compliance, structural questions, or moisture modelling
                  on a specific assembly, hire a local pro. The{' '}
                  <a
                    href="https://icaa.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Insulation Contractors Association of America
                  </a>{' '}
                  contractor directory and your utility&apos;s energy-auditor list are good
                  starting points.
                </p>
              </div>
            </div>
          </div>

          {/* How content is researched */}
          <h2>How content is researched and updated</h2>
          <ul>
            <li>
              <strong>Primary sources first.</strong> DOE, ORNL, BSC, IECC, ASHRAE,
              manufacturer spec sheets. I avoid quoting other content sites as authority
              &mdash; they are usually citing the same primary sources you can read directly.
            </li>
            <li>
              <strong>Cross-checked numbers.</strong> R-values, cost ranges, and code
              references are verified against at least two independent sources before
              publishing.
            </li>
            <li>
              <strong>Dated articles.</strong> Each article carries a &ldquo;last
              updated&rdquo; date so you can tell when the underlying data was last
              checked. Year-stamps in headlines are only bumped when the article was
              genuinely re-checked.
            </li>
            <li>
              <strong>Code revisions.</strong> When the IECC adopts a new edition or a
              state amendment changes requirements, affected pages are updated within 60
              days.
            </li>
            <li>
              <strong>Reader corrections.</strong> If you spot an error, email{' '}
              <a href="mailto:info@insulationrvalues.com">info@insulationrvalues.com</a>.
              Errors that could affect a homeowner&apos;s decision get a published
              correction note on the affected article.
            </li>
          </ul>

          {/* Sources */}
          <h2>Sources used on this site</h2>
          <ul>
            <li>
              <strong>U.S. Department of Energy (DOE)</strong> &mdash; Energy efficiency
              guidance and insulation recommendations by climate zone
            </li>
            <li>
              <strong>Oak Ridge National Laboratory (ORNL)</strong> &mdash; Building
              envelope research and whole-wall R-value data
            </li>
            <li>
              <strong>Building Science Corporation (BSC)</strong> &mdash; Moisture
              management and building assembly research
            </li>
            <li>
              <strong>International Energy Conservation Code (IECC)</strong> &mdash;
              Minimum R-value requirements by climate zone (currently 2021 IECC Table
              R402.1.3)
            </li>
            <li>
              <strong>Energy Star</strong> &mdash; Retrofit guidance and program
              specifications
            </li>
            <li>
              <strong>Manufacturer technical data</strong> &mdash; Owens Corning, Rockwool,
              Johns Manville, CertainTeed, Knauf, and others
            </li>
          </ul>

          {/* Independence Statement */}
          <div className="not-prose bg-accent-50 border border-accent-200 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-accent-700 mb-2">Independence</h3>
                <p className="text-text text-sm leading-relaxed">
                  InsulationRValues.com is{' '}
                  <strong>
                    not affiliated with any manufacturer, retailer, or installation company
                  </strong>
                  . No brand has paid for placement, and no manufacturer has reviewed or
                  approved this content. Recommendations are based on building science data
                  and cost-effectiveness &mdash; not commercial relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Advertising / Affiliate Disclosure */}
          <h2>How this site is supported</h2>
          <p>
            InsulationRValues.com is supported by display advertising (through Raptive)
            and affiliate links to retailers like Amazon, Home Depot, and Lowe&apos;s. If
            you click an affiliate link and buy something, the site earns a small
            commission at no extra cost to you.
          </p>
          <p>
            <strong>Affiliate relationships do not influence recommendations.</strong> Many
            of the products I&apos;d recommend (mineral wool batts in specific facings,
            certain rigid foam thicknesses, regional spray foam contractors) are not in any
            affiliate program at all. Where two materials would equally fit a given
            application, the choice is made on cost-per-R-value and installation
            constraints &mdash; not commission rates.
          </p>

          {/* Update Policy */}
          <h2>When content gets updated</h2>
          <ul>
            <li>When the IECC adopts a new edition or a state amendment changes requirements</li>
            <li>When a manufacturer changes a published R-value or product specification</li>
            <li>When new building science research changes the recommended approach for an assembly</li>
            <li>When a reader reports an error that holds up under verification</li>
          </ul>
          <p>
            Each article displays its last updated date. If you find an error or outdated
            information, please <Link href="/contact">get in touch</Link>.
          </p>

          {/* Trust pages */}
          <div className="not-prose grid sm:grid-cols-3 gap-4 my-8">
            <Link
              href="/data-sources"
              className="block p-4 border border-surface-200 rounded-lg hover:border-primary hover:bg-primary-50 transition-colors"
            >
              <h3 className="font-semibold text-primary mb-1">Data Sources</h3>
              <p className="text-xs text-text-muted">
                Every primary source cited across the site, organised by type.
              </p>
            </Link>
            <Link
              href="/corrections"
              className="block p-4 border border-surface-200 rounded-lg hover:border-primary hover:bg-primary-50 transition-colors"
            >
              <h3 className="font-semibold text-primary mb-1">Corrections Log</h3>
              <p className="text-xs text-text-muted">
                Public log of every published correction with dates and changes.
              </p>
            </Link>
            <Link
              href="/insulation-glossary"
              className="block p-4 border border-surface-200 rounded-lg hover:border-primary hover:bg-primary-50 transition-colors"
            >
              <h3 className="font-semibold text-primary mb-1">Glossary</h3>
              <p className="text-xs text-text-muted">
                Plain-English definitions of 27 building-science terms.
              </p>
            </Link>
          </div>

          {/* Contact */}
          <div className="not-prose bg-surface-100 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-primary">Get in touch</h3>
            </div>
            <p className="text-text text-sm mb-4">
              Questions, corrections, or partnership inquiries: plain email is the best way
              through. I aim to respond within two business days.
            </p>
            <a
              href="mailto:info@insulationrvalues.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-600 transition-colors text-sm"
            >
              info@insulationrvalues.com
            </a>
          </div>
        </article>
      </div>
    </>
  )
}
