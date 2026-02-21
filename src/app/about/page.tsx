import { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { CheckCircle, Users, BookOpen, Shield, Award, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | InsulationRValues.com',
  description: 'Learn about InsulationRValues.com — the most comprehensive, unbiased insulation R-value resource. Meet our team of building science experts and certified professionals.',
  alternates: {
    canonical: 'https://insulationrvalues.com/about',
  },
}

const teamMembers = [
  {
    name: 'Michael Torres',
    role: 'Editor-in-Chief',
    credentials: 'BPI Building Analyst, RESNET HERS Rater',
    bio: 'Michael has spent 15+ years in residential energy efficiency, starting as an insulation installer and working his way up to energy auditor. He has personally inspected over 2,000 homes and seen every insulation mistake in the book — from compressed batts behind wiring to vapor barriers on the wrong side. His mission is to help homeowners avoid costly errors by understanding the science behind R-value.',
    image: '/images/team/michael-torres.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'Technical Reviewer',
    credentials: 'Licensed General Contractor, Energy Star Partner',
    bio: 'Sarah runs a weatherization contracting company in the Pacific Northwest. She specializes in crawl space and basement insulation in marine climates, where moisture management is critical. With over 10 years of field experience, she brings practical installation knowledge to every article review — ensuring our guides reflect real-world conditions, not just manufacturer spec sheets.',
    image: '/images/team/sarah-chen.jpg',
  },
  {
    name: 'David Ramirez',
    role: 'Content Director',
    credentials: 'Building Science Researcher',
    bio: 'David spent 8 years at a building performance research organization before joining InsulationRValues.com. He translates complex building science into practical guidance, drawing on research from ORNL, Building Science Corporation, and DOE programs. He ensures every claim we make is backed by peer-reviewed data or field-verified testing.',
    image: '/images/team/david-ramirez.jpg',
  },
]

const editorialProcess = [
  {
    title: 'Research',
    description: 'Every article starts with data from authoritative sources: DOE energy guidelines, ORNL research publications, IECC building codes, and manufacturer technical specifications.',
  },
  {
    title: 'Field Verification',
    description: 'Our team includes practicing contractors who verify that recommendations work in real-world conditions — not just laboratory settings.',
  },
  {
    title: 'Technical Review',
    description: 'Before publication, a certified building analyst or licensed contractor reviews every article for accuracy and practical applicability.',
  },
  {
    title: 'Annual Updates',
    description: 'We review all content annually and update when building codes change, new products enter the market, or better data becomes available.',
  },
]

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
            <h2 className="text-xl font-semibold text-primary mb-3">Our Mission</h2>
            <p className="text-text leading-relaxed">
              InsulationRValues.com is the most comprehensive, unbiased insulation resource on the web.
              We provide expert guides, interactive calculators, and data-driven recommendations to help
              homeowners, contractors, and building professionals make informed decisions about insulation.
            </p>
          </section>

          {/* Why We Exist */}
          <h2>Why We Built This Resource</h2>
          <p>
            We've pulled soggy fiberglass out of hundreds of crawl spaces. We've seen attics insulated
            to R-60 with massive air leaks that rendered the insulation nearly useless. We've watched
            homeowners waste thousands of dollars on the wrong insulation type because they didn't
            understand climate zone requirements.
          </p>
          <p>
            The insulation industry is full of conflicting information — manufacturer marketing,
            contractor upsells, and outdated advice that doesn't reflect current building science.
            We created InsulationRValues.com to cut through the noise with clear, practical guidance
            backed by real data.
          </p>

          {/* Team Section */}
          <h2>Meet Our Team</h2>
          <p>
            Our team combines decades of field experience with formal building science credentials.
            These aren't writers copying manufacturer brochures — they're practitioners who've installed,
            inspected, and diagnosed insulation systems in every climate zone.
          </p>

          <div className="not-prose space-y-6 my-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white border border-surface-200 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-20 h-20 bg-surface-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-surface-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                    <p className="text-secondary font-medium text-sm">{member.role}</p>
                    <p className="text-text-muted text-sm mb-3">{member.credentials}</p>
                    <p className="text-text text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Process */}
          <h2>Our Editorial Process</h2>
          <p>
            We don't publish content to hit a word count. Every article goes through a rigorous
            process to ensure accuracy, practicality, and usefulness.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {editorialProcess.map((step, index) => (
              <div key={step.title} className="bg-surface-50 border border-surface-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-primary">{step.title}</h3>
                </div>
                <p className="text-sm text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Sources */}
          <h2>Our Sources</h2>
          <p>
            We draw on authoritative sources for R-value data, building code requirements, and
            energy efficiency recommendations:
          </p>
          <ul>
            <li><strong>U.S. Department of Energy (DOE)</strong> — Energy efficiency guidelines and insulation recommendations by climate zone</li>
            <li><strong>Oak Ridge National Laboratory (ORNL)</strong> — Building envelope research and whole-wall R-value data</li>
            <li><strong>Building Science Corporation (BSC)</strong> — Moisture management and building assembly research</li>
            <li><strong>International Energy Conservation Code (IECC)</strong> — Minimum R-value requirements by climate zone</li>
            <li><strong>Energy Star</strong> — Retrofit recommendations and program specifications</li>
            <li><strong>Manufacturer Technical Data</strong> — Product-specific R-values from Owens Corning, Rockwool, Johns Manville, and others</li>
          </ul>

          {/* Independence Statement */}
          <div className="not-prose bg-accent-50 border border-accent-200 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-accent-700 mb-2">Our Independence</h3>
                <p className="text-text text-sm leading-relaxed">
                  InsulationRValues.com is <strong>not affiliated with any manufacturer, retailer, or
                  installation company</strong>. We are not paid to recommend specific brands or products.
                  Our recommendations are based on building science data, field experience, and cost-effectiveness
                  — not marketing partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* Advertising Disclosure */}
          <h2>How We're Supported</h2>
          <p>
            InsulationRValues.com is supported by display advertising (through Raptive) and affiliate
            links to retailers like Amazon, Home Depot, and Lowe's. When you purchase products through
            our links, we may earn a commission at no additional cost to you.
          </p>
          <p>
            <strong>Important:</strong> Affiliate relationships never influence our recommendations.
            We recommend products based on building science data and field performance — not commission rates.
            Many of our top recommendations aren't even available through affiliate programs.
          </p>

          {/* Update Policy */}
          <h2>Content Updates</h2>
          <p>
            Building codes and product specifications change. We review all content annually and update
            articles when:
          </p>
          <ul>
            <li>IECC building codes are updated</li>
            <li>Product specifications change significantly</li>
            <li>New building science research becomes available</li>
            <li>Readers report errors or outdated information</li>
          </ul>
          <p>
            Each article displays its last updated date. If you find an error or outdated information,
            please <Link href="/contact">contact us</Link>.
          </p>

          {/* Contact */}
          <div className="not-prose bg-surface-100 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-primary">Get in Touch</h3>
            </div>
            <p className="text-text text-sm mb-4">
              Have questions, corrections, or partnership inquiries? We'd love to hear from you.
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
