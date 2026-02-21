import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: 'Home', href: '/' }, ...items]

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-text-muted">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1

          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-surface-400" />
              )}
              {isLast ? (
                <span className="text-text font-medium truncate max-w-[200px] sm:max-w-none">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary hover:underline flex items-center gap-1"
                >
                  {index === 0 && <Home className="w-4 h-4" />}
                  <span className="hidden sm:inline">{item.name}</span>
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
