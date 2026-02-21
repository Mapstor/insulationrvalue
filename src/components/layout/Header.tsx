'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigationCategories } from '@/lib/utils'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navGroups = [
    { key: 'guides', ...navigationCategories.guides },
    { key: 'materials', ...navigationCategories.materials },
    { key: 'tools', ...navigationCategories.tools },
    { key: 'comparisons', ...navigationCategories.comparisons },
    { key: 'resources', ...navigationCategories.resources },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-surface-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-lg text-primary hidden sm:block">
              InsulationRValues.com
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navGroups.map((group) => (
              <div
                key={group.key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text hover:text-primary transition-colors"
                  aria-expanded={activeDropdown === group.key}
                >
                  {group.title}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === group.key && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg border border-surface-200 py-2 z-50">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-text hover:bg-surface-100 hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* R-Value Chart CTA */}
            <Link
              href="/r-value-chart"
              className="ml-4 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              R-Value Chart
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-text hover:text-primary transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-surface-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            {navGroups.map((group) => (
              <div key={group.key}>
                <div className="font-semibold text-primary text-sm uppercase tracking-wide mb-2">
                  {group.title}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-text hover:text-primary transition-colors py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="/r-value-chart"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              View R-Value Chart
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
