import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Privacy Policy | InsulationRValues.com',
  description: 'Privacy policy for InsulationRValues.com. Learn how we collect, use, and protect your data, including information about cookies, analytics, and your rights under GDPR and CCPA.',
  alternates: {
    canonical: 'https://insulationrvalues.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SchemaMarkup
        type="webpage"
        data={{
          name: 'Privacy Policy',
          description: 'Privacy policy for InsulationRValues.com. Learn how we collect, use, and protect your data.',
          url: '/privacy-policy',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-primary mb-6">Privacy Policy</h1>

        <p className="text-lg text-text-muted">
          Last Updated: February 19, 2026
        </p>

        <p>
          InsulationRValues.com ("we," "us," or "our") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website insulationrvalues.com.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information Automatically Collected</h3>
        <p>
          When you visit our website, we automatically collect certain information about your device
          and your visit, including:
        </p>
        <ul>
          <li>IP address (anonymized where required by law)</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>Pages viewed and time spent on pages</li>
          <li>Date and time of visit</li>
          <li>Geographic location (country/region level)</li>
        </ul>

        <h3>Information You Provide</h3>
        <p>
          We may collect information you voluntarily provide, such as:
        </p>
        <ul>
          <li>Email address (if you contact us or subscribe to a newsletter)</li>
          <li>ZIP code (when using our calculators — this is not stored or linked to your identity)</li>
          <li>Any other information you choose to provide in correspondence with us</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain our website</li>
          <li>Improve and personalize your experience</li>
          <li>Analyze website usage and trends</li>
          <li>Respond to your inquiries and requests</li>
          <li>Send administrative information (if you've contacted us)</li>
          <li>Detect and prevent fraud or abuse</li>
        </ul>

        <h2>Cookies and Tracking Technologies</h2>

        <h3>What Are Cookies?</h3>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help
          websites remember your preferences and understand how you use the site.
        </p>

        <h3>Types of Cookies We Use</h3>

        <h4>Essential Cookies</h4>
        <p>
          Required for the website to function properly. These cannot be disabled.
        </p>

        <h4>Analytics Cookies</h4>
        <p>
          We use Google Analytics to understand how visitors interact with our website. Google Analytics
          uses cookies to collect information about:
        </p>
        <ul>
          <li>Pages visited and time spent</li>
          <li>Traffic sources (how you found us)</li>
          <li>Device and browser information</li>
          <li>Approximate geographic location</li>
        </ul>
        <p>
          Google Analytics data is anonymized and aggregated. We do not use Google Analytics to track
          individual users or collect personally identifiable information.
        </p>
        <p>
          You can opt out of Google Analytics by installing the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>

        <h4>Advertising Cookies</h4>
        <p>
          Our website displays advertisements through Raptive (formerly AdThrive/CafeMedia). Raptive and
          its advertising partners may use cookies to:
        </p>
        <ul>
          <li>Display relevant advertisements based on your interests</li>
          <li>Limit the number of times you see an ad</li>
          <li>Measure the effectiveness of advertising campaigns</li>
          <li>Build profiles for targeted advertising across websites</li>
        </ul>
        <p>
          These third-party cookies are subject to the privacy policies of the respective advertising
          networks. For more information about Raptive's data practices, visit the{' '}
          <a href="https://raptive.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
            Raptive Privacy Policy
          </a>.
        </p>

        <h3>Managing Cookies</h3>
        <p>
          Most web browsers allow you to control cookies through their settings. You can:
        </p>
        <ul>
          <li>View and delete cookies</li>
          <li>Block all cookies</li>
          <li>Block third-party cookies only</li>
          <li>Clear all cookies when you close your browser</li>
        </ul>
        <p>
          Note that blocking cookies may affect the functionality of our website and other sites you visit.
        </p>

        <h2>Affiliate Links Disclosure</h2>
        <p>
          Some links on our website are affiliate links to retailers including Amazon, Home Depot, and
          Lowe's. When you click these links and make a purchase, we may earn a commission at no
          additional cost to you.
        </p>
        <p>
          Affiliate partners may use cookies to track that a purchase originated from our website. These
          cookies are used solely for attribution purposes and do not collect personal information beyond
          what is necessary for the transaction.
        </p>
        <p>
          <strong>Important:</strong> Affiliate relationships never influence our recommendations. We
          recommend products based on building science data and field performance — not commission rates.
        </p>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services that may collect data:</p>
        <ul>
          <li><strong>Google Analytics:</strong> Website analytics</li>
          <li><strong>Google Search Console:</strong> Search performance monitoring</li>
          <li><strong>Raptive:</strong> Display advertising</li>
          <li><strong>Vercel:</strong> Website hosting</li>
          <li><strong>Amazon Associates:</strong> Affiliate program</li>
          <li><strong>Home Depot Affiliate Program:</strong> Affiliate program</li>
        </ul>
        <p>
          Each of these services has its own privacy policy governing how they collect and use data.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain automatically collected data (analytics) for up to 26 months. If you contact us via
          email, we retain that correspondence for as long as necessary to address your inquiry and for
          our records, unless you request deletion.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your information.
          However, no method of transmission over the Internet or electronic storage is 100% secure.
          We cannot guarantee absolute security.
        </p>

        <h2>Your Rights</h2>

        <h3>All Users</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt out of marketing communications</li>
          <li>Opt out of analytics tracking (via browser settings or opt-out tools)</li>
        </ul>

        <h3>California Residents (CCPA Rights)</h3>
        <p>
          Under the California Consumer Privacy Act (CCPA), California residents have additional rights:
        </p>
        <ul>
          <li><strong>Right to Know:</strong> You can request information about the categories and specific pieces of personal information we have collected about you.</li>
          <li><strong>Right to Delete:</strong> You can request deletion of your personal information, subject to certain exceptions.</li>
          <li><strong>Right to Opt-Out:</strong> You can opt out of the "sale" of your personal information. Note: We do not sell personal information in the traditional sense, but targeted advertising may constitute a "sale" under CCPA.</li>
          <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
        </ul>
        <p>
          To exercise your CCPA rights, contact us at{' '}
          <a href="mailto:privacy@insulationrvalues.com">privacy@insulationrvalues.com</a>.
        </p>

        <h3>European Users (GDPR Rights)</h3>
        <p>
          If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you
          have rights under the General Data Protection Regulation (GDPR):
        </p>
        <ul>
          <li><strong>Right of Access:</strong> Request a copy of your personal data.</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten").</li>
          <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data.</li>
          <li><strong>Right to Data Portability:</strong> Request your data in a machine-readable format.</li>
          <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
        </ul>
        <p>
          To exercise your GDPR rights, contact us at{' '}
          <a href="mailto:privacy@insulationrvalues.com">privacy@insulationrvalues.com</a>. You also have
          the right to lodge a complaint with a supervisory authority in your country of residence.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our website is not intended for children under 13 years of age. We do not knowingly collect
          personal information from children under 13. If you are a parent or guardian and believe your
          child has provided us with personal information, please contact us at{' '}
          <a href="mailto:privacy@insulationrvalues.com">privacy@insulationrvalues.com</a>, and we will
          delete such information.
        </p>

        <h2>Do Not Track Signals</h2>
        <p>
          Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not
          want your online activity tracked. We currently do not respond to DNT signals because there is
          no industry standard for how to interpret them. However, you can use the cookie management
          options described above to control tracking.
        </p>

        <h2>International Data Transfers</h2>
        <p>
          Our website is hosted in the United States. If you access our website from outside the United
          States, please be aware that your information may be transferred to, stored, and processed in
          the United States. By using our website, you consent to such transfer.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage
          you to review this Privacy Policy periodically for any changes.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:privacy@insulationrvalues.com">privacy@insulationrvalues.com</a>
          </li>
          <li>
            <strong>General Inquiries:</strong>{' '}
            <a href="mailto:info@insulationrvalues.com">info@insulationrvalues.com</a>
          </li>
        </ul>

        <div className="not-prose bg-surface-100 border border-surface-200 rounded-lg p-6 mt-8">
          <p className="text-sm text-text-muted">
            <strong>Summary:</strong> We collect anonymous analytics data and use cookies for analytics
            and advertising. We use affiliate links. We do not sell your personal information. You have
            rights to access, correct, and delete your data. For questions, email{' '}
            <a href="mailto:privacy@insulationrvalues.com" className="text-primary hover:underline">
              privacy@insulationrvalues.com
            </a>.
          </p>
        </div>
      </article>
      </div>
    </>
  )
}
