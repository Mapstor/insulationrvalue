import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import { AlertTriangle, HardHat, FileWarning, MapPin, Calculator, ShieldAlert } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Disclaimer | InsulationRValues.com',
  description: 'Important disclaimers for InsulationRValues.com. Our content is educational only and not a substitute for professional advice. Always consult local building codes and qualified contractors.',
  alternates: {
    canonical: 'https://insulationrvalues.com/disclaimer',
  },
}

export default function DisclaimerPage() {
  return (
    <>
      <SchemaMarkup
        type="webpage"
        data={{
          name: 'Disclaimer',
          description: 'Important disclaimers for InsulationRValues.com. Our content is educational only.',
          url: '/disclaimer',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ name: 'Disclaimer', href: '/disclaimer' }]} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-primary mb-6">Disclaimer</h1>

        <p className="text-lg text-text-muted">
          Important information about the limitations of our content and your responsibilities.
        </p>

        {/* Primary Disclaimer Box */}
        <div className="not-prose bg-secondary-50 border-2 border-secondary-300 rounded-lg p-6 my-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-8 h-8 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-bold text-secondary-700 mb-3">Educational Content Only</h2>
              <p className="text-text leading-relaxed">
                The information on InsulationRValues.com is provided for <strong>educational and
                informational purposes only</strong>. It is not intended to be, and should not be
                construed as, professional advice, engineering recommendations, or a substitute for
                consultation with qualified professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Not Professional Advice */}
        <h2>Not Professional Advice</h2>
        <p>
          We are not licensed contractors, architects, engineers, energy auditors, or building
          officials. The content on this website does not constitute:
        </p>
        <ul>
          <li>Contractor or trade advice</li>
          <li>Engineering or architectural recommendations</li>
          <li>Legal advice regarding building codes or permits</li>
          <li>Energy audit or home inspection services</li>
          <li>Product installation instructions</li>
        </ul>
        <p>
          <strong>Always consult qualified professionals</strong> before making decisions about
          insulation, building projects, or code compliance. This includes:
        </p>
        <ul>
          <li>Licensed insulation contractors</li>
          <li>BPI-certified energy auditors</li>
          <li>Your local building department</li>
          <li>Licensed general contractors</li>
          <li>Architects or engineers (for structural considerations)</li>
        </ul>

        {/* Building Codes Warning */}
        <div className="not-prose bg-surface-100 border border-surface-300 rounded-lg p-6 my-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-primary mb-2">Building Codes Vary by Location</h3>
              <p className="text-text text-sm leading-relaxed">
                Building codes vary significantly by state, county, and municipality. The code
                requirements referenced on this website (primarily the 2021 IECC) are model codes
                that may not apply in your jurisdiction. Your local building department may have:
              </p>
              <ul className="text-sm text-text-muted mt-3 space-y-1">
                <li>• Adopted an older or newer version of the IECC</li>
                <li>• Made local amendments to the model code</li>
                <li>• Different requirements based on your specific climate zone</li>
                <li>• Additional requirements for historic buildings or specific situations</li>
              </ul>
              <p className="text-sm text-text font-medium mt-3">
                Always verify current requirements with your local building department before
                beginning any project.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Disclaimer */}
        <h2>Calculator and Tool Limitations</h2>
        <div className="not-prose bg-surface-50 border border-surface-200 rounded-lg p-6 my-6">
          <div className="flex items-start gap-3">
            <Calculator className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-text text-sm leading-relaxed mb-3">
                Our interactive calculators (R-Value Calculator, Cost Calculator, Savings Calculator,
                etc.) provide estimates for educational purposes only. Results are based on:
              </p>
              <ul className="text-sm text-text-muted space-y-1">
                <li>• National averages that may not reflect your local market</li>
                <li>• General assumptions that may not apply to your specific situation</li>
                <li>• Data that may become outdated as prices and codes change</li>
                <li>• Simplified calculations that don't account for all variables</li>
              </ul>
              <p className="text-sm text-text font-medium mt-3">
                Do not use calculator results as the sole basis for purchasing decisions, project
                planning, or code compliance determinations.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Estimates */}
        <h2>Cost Estimate Disclaimer</h2>
        <p>
          All cost information on this website represents national averages and general ranges.
          Actual costs in your area may vary significantly based on:
        </p>
        <ul>
          <li>Regional labor rates and cost of living</li>
          <li>Local material availability and shipping costs</li>
          <li>Current market conditions and material prices</li>
          <li>Project complexity and accessibility</li>
          <li>Contractor availability and competition</li>
          <li>Permit and inspection fees</li>
          <li>Seasonal demand fluctuations</li>
        </ul>
        <p>
          Always obtain multiple quotes from local contractors for accurate project pricing.
        </p>

        {/* Product Information */}
        <h2>Product Information Disclaimer</h2>
        <p>
          Product specifications, R-values, and recommendations on this website are based on
          manufacturer data available at the time of writing. However:
        </p>
        <ul>
          <li>Manufacturers may change product specifications without notice</li>
          <li>Products may be discontinued or replaced</li>
          <li>New products may offer better performance or value</li>
          <li>Actual performance may vary from rated specifications</li>
          <li>Installation quality significantly affects performance</li>
        </ul>
        <p>
          Always verify current specifications with manufacturer documentation before purchasing.
        </p>

        {/* DIY Safety */}
        <div className="not-prose bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8">
          <div className="flex items-start gap-3">
            <HardHat className="w-8 h-8 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-red-700 mb-3">DIY Safety Warning</h3>
              <p className="text-text text-sm leading-relaxed mb-3">
                Insulation installation involves potential hazards including but not limited to:
              </p>
              <ul className="text-sm text-text-muted space-y-1 mb-3">
                <li>• Respiratory hazards from insulation fibers and dust</li>
                <li>• Chemical exposure from spray foam and other materials</li>
                <li>• Fall hazards in attics, roofs, and elevated areas</li>
                <li>• Electrical hazards near wiring</li>
                <li>• Heat stress in confined, unventilated spaces</li>
                <li>• Structural hazards from improper support or loading</li>
                <li>• Fire hazards from improper clearances around heat sources</li>
              </ul>
              <p className="text-sm text-red-700 font-semibold">
                Always follow manufacturer safety instructions, use appropriate personal protective
                equipment (PPE), and know your limitations. When in doubt, hire a professional.
              </p>
            </div>
          </div>
        </div>

        {/* No Warranty */}
        <h2>No Warranty</h2>
        <p>
          All content on this website is provided "as is" without warranty of any kind, either
          express or implied. We do not warrant that:
        </p>
        <ul>
          <li>Information is accurate, complete, or current</li>
          <li>Recommendations are suitable for your specific situation</li>
          <li>Following our guides will achieve specific results</li>
          <li>The website will be available without interruption</li>
          <li>Errors will be corrected</li>
        </ul>

        {/* Limitation of Liability */}
        <h2>Limitation of Liability</h2>
        <p>
          <strong>InsulationRValues.com, its owners, operators, employees, and contributors shall
          not be held liable for any damages</strong> arising from your use of this website or
          reliance on its content, including but not limited to:
        </p>
        <ul>
          <li>Property damage from DIY projects</li>
          <li>Personal injury</li>
          <li>Failed building inspections</li>
          <li>Financial losses from purchasing decisions</li>
          <li>Energy savings that differ from estimates</li>
          <li>Code violations or permit issues</li>
          <li>Moisture, mold, or indoor air quality problems</li>
          <li>Any other direct, indirect, incidental, or consequential damages</li>
        </ul>

        {/* Your Responsibility */}
        <div className="not-prose bg-primary-50 border border-primary-200 rounded-lg p-6 my-8">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-primary mb-2">Your Responsibility</h3>
              <p className="text-text text-sm leading-relaxed">
                By using this website, you acknowledge that you are solely responsible for:
              </p>
              <ul className="text-sm text-text mt-3 space-y-2">
                <li>• Verifying all information before acting on it</li>
                <li>• Confirming local code requirements with your building department</li>
                <li>• Consulting qualified professionals for your specific situation</li>
                <li>• Following all safety guidelines and manufacturer instructions</li>
                <li>• Obtaining necessary permits and inspections</li>
                <li>• Making your own decisions about your property and projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* External Links */}
        <h2>External Links</h2>
        <p>
          This website contains links to third-party websites for reference and convenience. We do
          not control, endorse, or assume responsibility for the content, privacy policies, or
          practices of any third-party websites. Visiting external links is at your own risk.
        </p>

        {/* Changes */}
        <h2>Changes to This Disclaimer</h2>
        <p>
          We may update this Disclaimer from time to time. Changes will be effective when posted
          to this page. We encourage you to review this page periodically.
        </p>

        {/* Contact */}
        <h2>Questions</h2>
        <p>
          If you have questions about this Disclaimer, please contact us at{' '}
          <a href="mailto:info@insulationrvalues.com">info@insulationrvalues.com</a>.
        </p>

        {/* Related Policies */}
        <div className="not-prose bg-surface-100 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-primary mb-3">Related Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms-of-use" className="text-primary hover:underline">
                Terms of Use
              </Link>{' '}
              — Full terms governing your use of this website
            </li>
            <li>
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{' '}
              — How we collect and use your data
            </li>
            <li>
              <Link href="/editorial-policy" className="text-primary hover:underline">
                Editorial Policy
              </Link>{' '}
              — How we create and maintain our content
            </li>
          </ul>
        </div>
      </article>
      </div>
    </>
  )
}
