'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    )

    // Observe all headings
    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) {
    return null
  }

  return (
    <nav className="sticky top-24" aria-label="Table of contents">
      <h4 className="font-semibold text-sm text-primary mb-3 uppercase tracking-wide">
        On This Page
      </h4>
      <ul className="space-y-1 border-l border-surface-300">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                'block py-1.5 text-sm transition-colors',
                item.level === 3 ? 'pl-6' : 'pl-3',
                activeId === item.id
                  ? 'text-primary font-medium border-l-2 border-primary -ml-px'
                  : 'text-text-muted hover:text-primary'
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
