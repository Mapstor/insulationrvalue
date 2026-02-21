import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Terms of Use | InsulationRValues.com',
  description: 'Terms of use for InsulationRValues.com. Read our terms and conditions governing your use of our website, including content usage, disclaimers, and limitations of liability.',
  alternates: {
    canonical: 'https://insulationrvalues.com/terms-of-use',
  },
}

export default function TermsOfUsePage() {
  return (
    <>
      <SchemaMarkup
        type="webpage"
        data={{
          name: 'Terms of Use',
          description: 'Terms of use for InsulationRValues.com governing your use of our website.',
          url: '/terms-of-use',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ name: 'Terms of Use', href: '/terms-of-use' }]} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-primary mb-6">Terms of Use</h1>

        <p className="text-lg text-text-muted">
          Last Updated: February 19, 2026
        </p>

        <p>
          Welcome to InsulationRValues.com. By accessing or using our website, you agree to be bound
          by these Terms of Use. If you do not agree to these terms, please do not use our website.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          These Terms of Use ("Terms") constitute a legally binding agreement between you ("you," "your,"
          or "user") and InsulationRValues.com ("we," "us," "our," or the "Website"). By accessing,
          browsing, or using this website, you acknowledge that you have read, understood, and agree to
          be bound by these Terms and our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately
          upon posting to this page. Your continued use of the Website after any such changes constitutes
          your acceptance of the new Terms.
        </p>

        <h2>2. Purpose of the Website</h2>
        <p>
          InsulationRValues.com provides educational information about insulation materials, R-values,
          building codes, and energy efficiency. Our content is intended for:
        </p>
        <ul>
          <li>General educational purposes</li>
          <li>Helping homeowners understand insulation options</li>
          <li>Providing reference information about building codes and requirements</li>
          <li>Offering calculators and tools for estimation purposes</li>
        </ul>

        <h2>3. No Professional Advice</h2>
        <p>
          <strong>The information on this website is for educational purposes only and does not
          constitute professional advice.</strong>
        </p>
        <p>
          Our content does not replace the advice of:
        </p>
        <ul>
          <li>Licensed contractors</li>
          <li>Building inspectors</li>
          <li>Energy auditors</li>
          <li>Architects or engineers</li>
          <li>Local building officials</li>
        </ul>
        <p>
          Always consult qualified professionals before making decisions about insulation, building
          projects, or code compliance. Building codes vary by jurisdiction, and our general information
          may not apply to your specific location or situation.
        </p>

        <h2>4. Accuracy Disclaimer</h2>
        <p>
          While we strive to provide accurate and up-to-date information, we make no warranties or
          representations about:
        </p>
        <ul>
          <li>The accuracy, reliability, or completeness of any information on this website</li>
          <li>The suitability of any information for your specific situation</li>
          <li>The currentness of building code requirements (codes are updated periodically)</li>
          <li>Product specifications (manufacturers may change specs without notice)</li>
          <li>Cost estimates (prices vary by region, season, and market conditions)</li>
        </ul>
        <p>
          <strong>Building codes and product specifications change.</strong> Always verify current
          requirements with your local building department and consult current manufacturer documentation
          before purchasing or installing insulation.
        </p>

        <h2>5. Calculator and Tool Limitations</h2>
        <p>
          Our interactive calculators and tools (R-Value Calculator, Cost Calculator, Climate Zone Map,
          etc.) are provided for estimation and educational purposes only. Results are:
        </p>
        <ul>
          <li>Based on general assumptions that may not apply to your situation</li>
          <li>Not a substitute for professional energy audits or engineering calculations</li>
          <li>Subject to change as we update our algorithms and data</li>
          <li>Based on national averages that may not reflect local costs or requirements</li>
        </ul>
        <p>
          Do not rely solely on our calculators for purchasing decisions, code compliance, or project
          planning. Always verify results with qualified professionals.
        </p>

        <h2>6. User Conduct</h2>
        <p>When using our website, you agree not to:</p>
        <ul>
          <li>Use the website for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to any part of the website</li>
          <li>Interfere with or disrupt the website or servers</li>
          <li>Transmit viruses, malware, or other harmful code</li>
          <li>Scrape, crawl, or collect data from the website without permission</li>
          <li>Use automated systems to access the website in a manner that exceeds reasonable use</li>
          <li>Impersonate any person or entity</li>
          <li>Use the website to send spam or unsolicited communications</li>
        </ul>

        <h2>7. Intellectual Property</h2>
        <p>
          All content on this website, including but not limited to text, graphics, logos, images,
          calculators, code, and data compilations, is the property of InsulationRValues.com or its
          content suppliers and is protected by United States and international copyright laws.
        </p>
        <p>
          <strong>You may:</strong>
        </p>
        <ul>
          <li>View and print content for personal, non-commercial use</li>
          <li>Share links to our pages</li>
          <li>Quote brief excerpts with attribution and a link to the original page</li>
        </ul>
        <p>
          <strong>You may not:</strong>
        </p>
        <ul>
          <li>Reproduce, distribute, or republish substantial portions of our content</li>
          <li>Modify, adapt, or create derivative works from our content</li>
          <li>Use our content for commercial purposes without written permission</li>
          <li>Remove any copyright or proprietary notices</li>
          <li>Use our calculators or tools on other websites without permission</li>
        </ul>

        <h2>8. Third-Party Links and Content</h2>
        <p>
          Our website contains links to third-party websites, including manufacturer websites, retailers,
          and government resources. These links are provided for your convenience and reference.
        </p>
        <p>
          We do not:
        </p>
        <ul>
          <li>Control the content of third-party websites</li>
          <li>Endorse or guarantee the accuracy of third-party content</li>
          <li>Accept responsibility for any third-party website's terms, privacy practices, or content</li>
        </ul>
        <p>
          Accessing third-party websites is at your own risk. Please review the terms and privacy
          policies of any third-party sites you visit.
        </p>

        <h2>9. Affiliate Relationships</h2>
        <p>
          Some links on our website are affiliate links to retailers such as Amazon, Home Depot, and
          Lowe's. When you click these links and make a purchase, we may earn a commission at no
          additional cost to you.
        </p>
        <p>
          <strong>Important:</strong> Our affiliate relationships do not influence our content,
          recommendations, or editorial decisions. We recommend products based on building science
          data and field performance — not commission rates. Many of our top recommendations are
          not available through affiliate programs.
        </p>
        <p>
          For more information, see our <Link href="/editorial-policy">Editorial Policy</Link>.
        </p>

        <h2>10. Disclaimer of Warranties</h2>
        <p>
          <strong>THIS WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY
          KIND, EITHER EXPRESS OR IMPLIED.</strong>
        </p>
        <p>
          To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:
        </p>
        <ul>
          <li>Implied warranties of merchantability and fitness for a particular purpose</li>
          <li>Warranties that the website will be uninterrupted, error-free, or secure</li>
          <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
          <li>Warranties that defects will be corrected</li>
        </ul>

        <h2>11. Limitation of Liability</h2>
        <p>
          <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, INSULATIONRVALUES.COM AND ITS OWNERS,
          OPERATORS, EMPLOYEES, AND CONTRIBUTORS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</strong> arising out of or related
          to your use of (or inability to use) this website, including but not limited to:
        </p>
        <ul>
          <li>Errors in content or calculations</li>
          <li>DIY project outcomes based on information from this website</li>
          <li>Building code violations or failed inspections</li>
          <li>Property damage or personal injury</li>
          <li>Financial losses from purchasing decisions</li>
          <li>Any third-party claims</li>
        </ul>
        <p>
          This limitation applies regardless of the legal theory (contract, tort, strict liability,
          or otherwise) and even if we have been advised of the possibility of such damages.
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless InsulationRValues.com and its owners,
          operators, employees, and contributors from any claims, damages, losses, liabilities, costs,
          and expenses (including reasonable attorneys' fees) arising from:
        </p>
        <ul>
          <li>Your use of the website</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any rights of a third party</li>
          <li>Any content or information you provide to us</li>
        </ul>

        <h2>13. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the United
          States and the State of Delaware, without regard to its conflict of law provisions.
        </p>
        <p>
          Any legal action or proceeding arising out of or relating to these Terms or your use of
          the website shall be brought exclusively in the state or federal courts located in Delaware,
          and you consent to the personal jurisdiction of such courts.
        </p>

        <h2>14. Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid, illegal, or unenforceable, the
          remaining provisions shall continue in full force and effect.
        </p>

        <h2>15. Entire Agreement</h2>
        <p>
          These Terms, together with our <Link href="/privacy-policy">Privacy Policy</Link>,{' '}
          <Link href="/editorial-policy">Editorial Policy</Link>, and{' '}
          <Link href="/disclaimer">Disclaimer</Link>, constitute the entire agreement between you
          and InsulationRValues.com regarding your use of the website.
        </p>

        <h2>16. Contact Information</h2>
        <p>
          If you have questions about these Terms of Use, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@insulationrvalues.com">info@insulationrvalues.com</a>
          </li>
        </ul>

        <div className="not-prose bg-surface-100 border border-surface-200 rounded-lg p-6 mt-8">
          <p className="text-sm text-text-muted">
            <strong>Summary:</strong> Our content is educational, not professional advice. Always consult
            local building codes and qualified professionals. We are not responsible for DIY project
            outcomes or decisions made based on our information. Cost estimates are national averages.
            Building codes change — verify current requirements locally.
          </p>
        </div>
      </article>
      </div>
    </>
  )
}
