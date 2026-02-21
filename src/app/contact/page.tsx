import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import { Mail, MessageSquare, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | InsulationRValues.com',
  description: 'Get in touch with the InsulationRValues.com team. We welcome editorial corrections, partnership inquiries, and questions about our content.',
  alternates: {
    canonical: 'https://insulationrvalues.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup type="contactpage" data={{}} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-primary mb-6">Get in Touch</h1>

        <p className="text-lg text-text-muted">
          Have a question, correction, or partnership inquiry? We'd love to hear from you.
        </p>

        {/* Contact Email */}
        <div className="not-prose bg-primary-50 border border-primary-200 rounded-lg p-6 my-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-primary">Email Us</h2>
          </div>
          <a
            href="mailto:info@insulationrvalues.com"
            className="text-lg font-medium text-primary hover:underline"
          >
            info@insulationrvalues.com
          </a>
          <p className="text-sm text-text-muted mt-3">
            We aim to respond within 2 business days.
          </p>
        </div>

        {/* What We Can Help With */}
        <h2>Topics We Can Help With</h2>
        <div className="not-prose space-y-3 my-6">
          {[
            'Editorial corrections or factual errors',
            'Technical questions about our content',
            'Partnership and collaboration inquiries',
            'Press and media requests',
            'Suggestions for new articles or tools',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-text">{item}</span>
            </div>
          ))}
        </div>

        {/* What We Cannot Help With */}
        <h2>Topics We Cannot Help With</h2>
        <div className="not-prose bg-surface-100 border border-surface-200 rounded-lg p-6 my-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-text text-sm">
              We are an educational resource, not a contractor referral service or consulting firm.
              We cannot provide:
            </p>
          </div>
          <ul className="space-y-2 text-sm text-text-muted ml-8">
            <li>Specific project quotes or estimates</li>
            <li>Local contractor recommendations</li>
            <li>Legal interpretations of building codes for your specific situation</li>
            <li>On-site inspections or assessments</li>
            <li>Product brand endorsements for specific projects</li>
          </ul>
        </div>

        {/* Finding Contractors */}
        <h2>Finding Local Insulation Contractors</h2>
        <p>
          For local insulation contractors in your area, we recommend:
        </p>
        <ul>
          <li>
            <a href="https://icaa.net/" target="_blank" rel="noopener noreferrer">
              ICAA Contractor Directory
            </a> — Insulation Contractors Association of America
          </li>
          <li>
            <a href="https://www.homedepot.com/services/c/pro-referral/" target="_blank" rel="noopener noreferrer">
              Home Depot Pro Referral
            </a>
          </li>
          <li>
            Your local utility company — many offer lists of approved insulation contractors
            for rebate programs
          </li>
          <li>
            <a href="https://www.energystar.gov/campaign/seal_insulate/do_it_yourself_guide/find_contractor" target="_blank" rel="noopener noreferrer">
              Energy Star's contractor finder
            </a>
          </li>
        </ul>

        {/* Response Time */}
        <div className="not-prose bg-surface-50 border border-surface-200 rounded-lg p-6 mt-8">
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-primary">Response Time</h3>
          </div>
          <p className="text-text text-sm">
            We receive many emails and prioritize editorial corrections and content questions.
            Please allow up to 2 business days for a response. If your inquiry is time-sensitive,
            please indicate that in your subject line.
          </p>
        </div>
      </article>
      </div>
    </>
  )
}
