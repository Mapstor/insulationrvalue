import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import { Search, CheckCircle, RefreshCw, Users, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Editorial Policy | InsulationRValues.com',
  description: 'Our editorial policy explains how we research, fact-check, and update content at InsulationRValues.com. Learn about our sources, review process, and affiliate disclosure.',
  alternates: {
    canonical: 'https://insulationrvalues.com/editorial-policy',
  },
}

export default function EditorialPolicyPage() {
  return (
    <>
      <SchemaMarkup
        type="webpage"
        data={{
          name: 'Editorial Policy',
          description: 'Our editorial policy explaining how we research, fact-check, and update content.',
          url: '/editorial-policy',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ name: 'Editorial Policy', href: '/editorial-policy' }]} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-primary mb-6">Editorial Policy</h1>

        <p className="text-lg text-text-muted">
          Our commitment to accurate, unbiased, and practical insulation information.
        </p>

        <p>
          InsulationRValues.com is dedicated to providing the most comprehensive, accurate, and
          unbiased insulation resource on the web. This Editorial Policy explains how we create,
          review, and maintain our content to ensure it meets the highest standards of quality
          and reliability.
        </p>

        {/* Editorial Process */}
        <h2>Our Editorial Process</h2>
        <p>
          Every article on InsulationRValues.com goes through a rigorous multi-step process before
          publication:
        </p>

        <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
          <div className="bg-surface-50 border border-surface-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <Search className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-primary">1. Research</h3>
            </div>
            <p className="text-sm text-text-muted">
              We gather data from authoritative sources: DOE publications, ORNL research, IECC
              building codes, and manufacturer technical specifications. We cross-reference
              multiple sources to verify accuracy.
            </p>
          </div>

          <div className="bg-surface-50 border border-surface-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-primary">2. Field Verification</h3>
            </div>
            <p className="text-sm text-text-muted">
              Our team includes practicing contractors and energy auditors who verify that
              recommendations work in real-world conditions — not just laboratory settings.
            </p>
          </div>

          <div className="bg-surface-50 border border-surface-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-primary">3. Technical Review</h3>
            </div>
            <p className="text-sm text-text-muted">
              Before publication, a certified building analyst or licensed contractor reviews
              every article for technical accuracy and practical applicability.
            </p>
          </div>

          <div className="bg-surface-50 border border-surface-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <RefreshCw className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-primary">4. Regular Updates</h3>
            </div>
            <p className="text-sm text-text-muted">
              We review all content at least annually and update when building codes change,
              new products enter the market, or better data becomes available.
            </p>
          </div>
        </div>

        {/* Sources */}
        <h2>Our Sources</h2>
        <p>
          We rely on authoritative, peer-reviewed, and government sources for R-value data,
          building code requirements, and energy efficiency recommendations:
        </p>

        <h3>Government and Research Organizations</h3>
        <ul>
          <li>
            <strong>U.S. Department of Energy (DOE)</strong> — Energy efficiency guidelines,
            insulation recommendations by climate zone, and building energy codes
          </li>
          <li>
            <strong>Oak Ridge National Laboratory (ORNL)</strong> — Building envelope research,
            whole-wall R-value testing, and thermal performance data
          </li>
          <li>
            <strong>Building Science Corporation (BSC)</strong> — Moisture management research,
            building assembly design, and practical guidance documents
          </li>
          <li>
            <strong>Energy Star</strong> — Retrofit recommendations, program specifications,
            and certified product lists
          </li>
          <li>
            <strong>National Renewable Energy Laboratory (NREL)</strong> — Energy modeling data
            and residential building research
          </li>
        </ul>

        <h3>Building Codes and Standards</h3>
        <ul>
          <li>
            <strong>International Energy Conservation Code (IECC)</strong> — Minimum R-value
            requirements by climate zone (we reference the 2021 IECC as the current model code)
          </li>
          <li>
            <strong>ASHRAE Standards</strong> — Ventilation, energy efficiency, and building
            performance standards
          </li>
          <li>
            <strong>State and Local Building Codes</strong> — When discussing specific jurisdictions
          </li>
        </ul>

        <h3>Industry Sources</h3>
        <ul>
          <li>
            <strong>Manufacturer Technical Data</strong> — Product-specific R-values and specifications
            from Owens Corning, Rockwool, Johns Manville, CertainTeed, and others
          </li>
          <li>
            <strong>Insulation Contractors Association of America (ICAA)</strong> — Industry best
            practices and installation guidelines
          </li>
          <li>
            <strong>North American Insulation Manufacturers Association (NAIMA)</strong> — Industry
            data and technical resources
          </li>
        </ul>

        <p>
          We cite our sources within articles and link to original documents when available.
          If you notice a claim that lacks a source or appears inaccurate, please{' '}
          <Link href="/contact">contact us</Link>.
        </p>

        {/* Content Standards */}
        <h2>Content Standards</h2>
        <p>All content on InsulationRValues.com must meet the following standards:</p>

        <ul>
          <li>
            <strong>Factual Accuracy:</strong> All claims must be supported by authoritative sources
            or verified field experience. Opinions are clearly labeled as such.
          </li>
          <li>
            <strong>Practical Relevance:</strong> Information must be useful and applicable to
            real-world insulation decisions. We avoid theoretical discussions without practical
            implications.
          </li>
          <li>
            <strong>Clarity:</strong> Complex building science concepts are explained in accessible
            language without oversimplification that compromises accuracy.
          </li>
          <li>
            <strong>Completeness:</strong> Articles cover topics thoroughly, addressing common
            questions, edge cases, and potential pitfalls.
          </li>
          <li>
            <strong>Timeliness:</strong> Content reflects current building codes, product
            specifications, and best practices. Outdated information is updated or removed.
          </li>
        </ul>

        {/* Independence */}
        <div className="not-prose bg-accent-50 border border-accent-200 rounded-lg p-6 my-8">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-accent-700 mb-2">Editorial Independence</h3>
              <p className="text-text text-sm leading-relaxed">
                InsulationRValues.com is <strong>not affiliated with any manufacturer, retailer,
                or installation company</strong>. No company pays us to recommend their products.
                Our recommendations are based solely on building science data, field performance,
                and cost-effectiveness.
              </p>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <h2>Affiliate Relationships Disclosure</h2>
        <p>
          Transparency about how we earn revenue is essential to maintaining your trust.
        </p>

        <h3>Affiliate Links</h3>
        <p>
          Some links on our website are affiliate links to retailers including:
        </p>
        <ul>
          <li>Amazon (Amazon Associates Program)</li>
          <li>Home Depot</li>
          <li>Lowe's</li>
        </ul>
        <p>
          When you click an affiliate link and make a purchase, we may earn a commission at no
          additional cost to you. These commissions help support the website and allow us to
          continue providing free educational content.
        </p>

        <h3>How Affiliate Relationships Affect Our Content</h3>
        <p>
          <strong>They don't.</strong>
        </p>
        <p>
          Our editorial process is completely separate from our revenue model. Content decisions
          are made based on:
        </p>
        <ul>
          <li>Building science data and research</li>
          <li>Field performance and installer feedback</li>
          <li>Cost-effectiveness for homeowners</li>
          <li>User questions and needs</li>
        </ul>
        <p>
          Content decisions are <strong>never</strong> made based on:
        </p>
        <ul>
          <li>Commission rates or affiliate availability</li>
          <li>Manufacturer requests or pressure</li>
          <li>Advertiser preferences</li>
        </ul>
        <p>
          Many of our top recommendations are for products that aren't available through affiliate
          programs, or for approaches (like hiring specific types of contractors) that generate
          no revenue for us. We recommend the best solution, not the most profitable one.
        </p>

        {/* Display Advertising */}
        <h2>Display Advertising</h2>
        <p>
          InsulationRValues.com displays advertisements through Raptive (formerly AdThrive/CafeMedia).
          These ads help support the website and allow us to provide free content.
        </p>
        <p>
          <strong>Important:</strong> Advertisers have no influence over our editorial content.
          The appearance of an advertisement on our website does not constitute an endorsement
          of the advertiser's products or services.
        </p>
        <p>
          For more information about how advertising works on our site and your choices regarding
          ad personalization, see our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>

        {/* Update Policy */}
        <h2>Content Update Policy</h2>
        <p>
          Building codes, product specifications, and best practices evolve. We are committed to
          keeping our content current through:
        </p>

        <h3>Regular Review Schedule</h3>
        <ul>
          <li>
            <strong>Annual Review:</strong> All articles are reviewed at least once per year
            to verify accuracy and update statistics.
          </li>
          <li>
            <strong>Code Update Reviews:</strong> When new IECC codes are adopted, we update
            R-value requirement articles within 60 days.
          </li>
          <li>
            <strong>Product Updates:</strong> When manufacturers significantly change product
            specifications, we update relevant articles.
          </li>
          <li>
            <strong>Reader-Reported Issues:</strong> When readers report errors, we investigate
            and correct verified issues within 5 business days.
          </li>
        </ul>

        <h3>Update Transparency</h3>
        <p>
          Each article displays its "Last Updated" date so you know when the content was last
          reviewed. Major updates are noted within the article when relevant.
        </p>

        {/* Corrections Policy */}
        <h2>Corrections Policy</h2>
        <p>
          We take accuracy seriously. If we publish incorrect information, we correct it promptly
          and transparently.
        </p>
        <ul>
          <li>
            <strong>Minor Corrections:</strong> Typos, broken links, and minor factual errors are
            corrected without notation.
          </li>
          <li>
            <strong>Significant Corrections:</strong> Material errors that could affect user
            decisions are corrected with a note explaining the change.
          </li>
          <li>
            <strong>Retractions:</strong> In the rare case that an article contains fundamentally
            flawed information, we will retract or completely rewrite it with a note explaining
            the issue.
          </li>
        </ul>
        <p>
          <strong>Found an error?</strong> Please email us at{' '}
          <a href="mailto:info@insulationrvalues.com">info@insulationrvalues.com</a> with the
          article URL and a description of the issue. We appreciate your help in maintaining
          accuracy.
        </p>

        {/* Contact */}
        <div className="not-prose bg-surface-100 rounded-lg p-6 mt-8">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-primary">Questions About Our Editorial Policy?</h3>
          </div>
          <p className="text-text text-sm mb-4">
            If you have questions about how we create content, our sources, or our editorial
            standards, we'd be happy to hear from you.
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
