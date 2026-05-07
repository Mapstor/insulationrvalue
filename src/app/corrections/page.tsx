import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { CheckCircle, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corrections Log | InsulationRValues.com',
  description:
    'Public log of every published correction to InsulationRValues.com content. Material errors that affect homeowner decisions are listed here with dates and what changed.',
  alternates: {
    canonical: 'https://www.insulationrvalues.com/corrections',
  },
  openGraph: {
    title: 'Corrections Log | InsulationRValues.com',
    description:
      'Public log of corrections to InsulationRValues.com content. Material errors are documented here with dates.',
    url: 'https://www.insulationrvalues.com/corrections',
    siteName: 'InsulationRValues.com',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'InsulationRValues.com Corrections Log',
      },
    ],
  },
}

interface CorrectionEntry {
  date: string
  page: string
  pageHref: string
  summary: string
  detail: string
}

// Public corrections log. Add entries to the top (newest first) when material
// errors are corrected after publication. Minor edits (typos, link fixes,
// rewording) are not logged. Material errors are: changed numbers, changed
// recommendations, changed code references, changed safety guidance.
const corrections: CorrectionEntry[] = []

export default function CorrectionsPage() {
  return (
    <>
      <SchemaMarkup
        type="webpage"
        data={{
          name: 'Corrections Log',
          description:
            'Public log of corrections to InsulationRValues.com content with dates, affected pages, and what changed.',
          url: '/corrections',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ name: 'Corrections', href: '/corrections' }]} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-primary mb-6">Corrections Log</h1>

          <section className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8 not-prose">
            <p className="text-text leading-relaxed">
              This is the public log of every published correction to content on this
              site. If we change a number, a recommendation, a code reference, or any
              safety-relevant guidance after publication, the change is recorded here
              with the date and the affected page.
            </p>
          </section>

          <h2>What gets logged</h2>
          <ul>
            <li>
              <strong>Material errors</strong> &mdash; any factual mistake that could
              affect a homeowner&apos;s purchasing or installation decision. Examples:
              a wrong R-value, a wrong code citation, a wrong cost figure, a wrong
              vapor-control recommendation.
            </li>
            <li>
              <strong>Code-update revisions</strong> &mdash; when a new IECC edition
              is adopted or a state amendment changes requirements, affected pages
              are updated and the change is logged.
            </li>
            <li>
              <strong>Reader-reported errors</strong> that hold up under verification.
            </li>
          </ul>

          <h2>What does <em>not</em> get logged</h2>
          <ul>
            <li>Typos, grammar fixes, and minor rewording</li>
            <li>Broken-link fixes</li>
            <li>Style or layout changes</li>
            <li>New content additions to existing articles</li>
          </ul>

          {/* Corrections list */}
          <h2 className="mt-12">Published corrections</h2>

          {corrections.length === 0 ? (
            <div className="not-prose bg-accent-50 border border-accent-200 rounded-lg p-6 my-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-accent-700 mb-2">
                    No published corrections yet
                  </h3>
                  <p className="text-text text-sm leading-relaxed">
                    The site is new and no material errors have been corrected after
                    publication yet. When the first one happens, it will be logged
                    here transparently. The site cross-checks every numerical claim
                    against at least two independent sources before publishing
                    precisely so this log stays empty.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="not-prose space-y-4 my-6">
              {corrections.map((c, idx) => (
                <div
                  key={idx}
                  className="border border-surface-200 rounded-lg p-5 bg-white"
                >
                  <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                    <span className="font-mono text-sm text-text-muted">{c.date}</span>
                    <Link
                      href={c.pageHref}
                      className="font-semibold text-primary hover:underline"
                    >
                      {c.page}
                    </Link>
                  </div>
                  <p className="font-medium text-text mb-2">{c.summary}</p>
                  <p className="text-sm text-text-muted">{c.detail}</p>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="not-prose bg-surface-100 rounded-lg p-6 mt-12">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-primary">Found an error?</h3>
            </div>
            <p className="text-text text-sm mb-4">
              If something on the site looks wrong, please email me with the article
              URL and a description. Every reader-reported error is verified against
              primary sources; if it holds up, the correction is published here within
              5 business days.
            </p>
            <a
              href="mailto:info@insulationrvalues.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-600 transition-colors text-sm"
            >
              info@insulationrvalues.com
            </a>
          </div>

          <p className="mt-8 text-sm text-text-muted">
            See the <Link href="/editorial-policy">editorial policy</Link> for the
            full corrections process and{' '}
            <Link href="/data-sources">data sources</Link> for the primary references
            used to verify content.
          </p>
        </article>
      </div>
    </>
  )
}
