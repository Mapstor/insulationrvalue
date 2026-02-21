import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    guides: {
      title: 'Guides',
      links: [
        { title: 'Attic Insulation', href: '/attic-insulation' },
        { title: 'Wall Insulation', href: '/wall-insulation' },
        { title: 'Basement Insulation', href: '/basement-insulation' },
        { title: 'Crawl Space Insulation', href: '/crawl-space-insulation' },
        { title: 'Garage Insulation', href: '/garage-insulation' },
        { title: 'How to Air Seal Attic', href: '/how-to-air-seal-attic' },
        { title: 'How to Insulate Attic', href: '/how-to-insulate-attic' },
      ],
    },
    materials: {
      title: 'Materials',
      links: [
        { title: 'Spray Foam Insulation', href: '/spray-foam-insulation' },
        { title: 'Fiberglass Insulation', href: '/fiberglass-insulation' },
        { title: 'Mineral Wool', href: '/mineral-wool-insulation' },
        { title: 'Cellulose Insulation', href: '/cellulose-insulation' },
        { title: 'Blown-In Insulation', href: '/blown-in-insulation' },
        { title: 'Rigid Foam Insulation', href: '/rigid-foam-insulation' },
        { title: 'Radiant Barrier', href: '/radiant-barrier-insulation' },
        { title: 'Polyiso Insulation', href: '/polyiso-insulation' },
        { title: 'XPS Insulation', href: '/xps-insulation' },
        { title: 'EPS Insulation', href: '/eps-insulation' },
      ],
    },
    tools: {
      title: 'Tools',
      links: [
        { title: 'R-Value Calculator', href: '/r-value-calculator' },
        { title: 'Cost Calculator', href: '/insulation-cost-calculator' },
        { title: 'Climate Zone Map', href: '/climate-zone-map' },
        { title: 'Thickness Calculator', href: '/insulation-thickness-calculator' },
        { title: 'Savings Calculator', href: '/insulation-savings-calculator' },
        { title: 'Insulation Quiz', href: '/what-insulation-do-i-need' },
      ],
    },
    comparisons: {
      title: 'Comparisons',
      links: [
        { title: 'Open vs Closed Cell', href: '/open-cell-vs-closed-cell-spray-foam' },
        { title: 'Fiberglass vs Cellulose', href: '/fiberglass-vs-cellulose' },
        { title: 'Fiberglass vs Mineral Wool', href: '/fiberglass-vs-mineral-wool' },
        { title: 'XPS vs EPS', href: '/xps-vs-eps' },
        { title: 'Batts vs Blown-In', href: '/batt-vs-blown-in-insulation' },
        { title: 'Faced vs Unfaced', href: '/faced-vs-unfaced-insulation' },
      ],
    },
    costs: {
      title: 'Costs & Savings',
      links: [
        { title: 'Spray Foam Cost', href: '/spray-foam-insulation-cost' },
        { title: 'Attic Insulation Cost', href: '/attic-insulation-cost' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { title: 'R-Value Chart', href: '/r-value-chart' },
        { title: 'R-Value Per Inch', href: '/r-value-per-inch' },
        { title: 'Types of Insulation', href: '/types-of-insulation' },
        { title: 'What Is R-Value?', href: '/what-is-r-value' },
        { title: 'Crawl Space Vapor Barrier', href: '/crawl-space-vapor-barrier' },
      ],
    },
  }

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and Description */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-2xl">InsulationRValues.com</span>
          </div>
          <p className="text-primary-200 max-w-md text-sm leading-relaxed">
            The most comprehensive, unbiased insulation R-value resource.
            Expert guides, calculators, and data-driven recommendations
            for every insulation project.
          </p>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-sm uppercase tracking-wide mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-200 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-primary-400 mb-8" />

        {/* Legal Links and Trust Statement */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/about" className="text-primary-200 hover:text-white transition-colors">
              About Us
            </Link>
            <span className="text-primary-400">·</span>
            <Link href="/contact" className="text-primary-200 hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-primary-400">·</span>
            <Link href="/privacy-policy" className="text-primary-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-primary-400">·</span>
            <Link href="/terms-of-use" className="text-primary-200 hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="text-primary-400">·</span>
            <Link href="/editorial-policy" className="text-primary-200 hover:text-white transition-colors">
              Editorial Policy
            </Link>
            <span className="text-primary-400">·</span>
            <Link href="/disclaimer" className="text-primary-200 hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Copyright and Independence Statement */}
        <div className="mt-8 pt-6 border-t border-primary-400">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-primary-200">
              © {currentYear} InsulationRValues.com. All rights reserved.
            </p>
            <p className="text-xs text-primary-300 max-w-md">
              Independent resource — not affiliated with any manufacturer,
              retailer, or installation company.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
