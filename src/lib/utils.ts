import { type ClassValue, clsx } from 'clsx'

/**
 * Utility for constructing className strings conditionally
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}

/**
 * Format a date string for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Generate a URL-friendly slug from text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Capitalize first letter of each word
 */
export function titleCase(text: string): string {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Extract plain text from markdown
 */
export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/[*_~`#]/g, '') // Remove formatting characters
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
}

/**
 * Truncate text to a maximum length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Extract the first paragraph from markdown content
 */
export function getExcerpt(content: string, maxLength: number = 160): string {
  // Remove Quick Answer blockquote if present
  const withoutQuickAnswer = content.replace(/^>\s*\*\*Quick Answer:\*\*[\s\S]*?\n\n/m, '')

  // Get first real paragraph
  const paragraphs = withoutQuickAnswer.split('\n\n')
  const firstParagraph = paragraphs.find((p) =>
    p.trim() &&
    !p.startsWith('#') &&
    !p.startsWith('-') &&
    !p.startsWith('|') &&
    !p.startsWith('>')
  )

  if (!firstParagraph) return ''

  const plainText = stripMarkdown(firstParagraph)
  return truncate(plainText, maxLength)
}

/**
 * Parse R-value string (e.g., "R-38") to number
 */
export function parseRValue(rValueString: string): number | null {
  const match = rValueString.match(/R-?(\d+(?:\.\d+)?)/i)
  if (match) {
    return parseFloat(match[1])
  }
  return null
}

/**
 * Format R-value for display
 */
export function formatRValue(value: number): string {
  return `R-${value}`
}

/**
 * Navigation structure for the site
 */
export const navigationCategories = {
  guides: {
    title: 'Guides',
    items: [
      { title: 'Attic Insulation', href: '/attic-insulation' },
      { title: 'Wall Insulation', href: '/wall-insulation' },
      { title: 'Basement Insulation', href: '/basement-insulation' },
      { title: 'Crawl Space Insulation', href: '/crawl-space-insulation' },
      { title: 'Garage Insulation', href: '/garage-insulation' },
    ],
  },
  materials: {
    title: 'Materials',
    items: [
      { title: 'Spray Foam Insulation', href: '/spray-foam-insulation' },
      { title: 'Fiberglass Insulation', href: '/fiberglass-insulation' },
      { title: 'Mineral Wool', href: '/mineral-wool-insulation' },
      { title: 'Cellulose Insulation', href: '/cellulose-insulation' },
      { title: 'Blown-In Insulation', href: '/blown-in-insulation' },
      { title: 'Rigid Foam Insulation', href: '/rigid-foam-insulation' },
      { title: 'Radiant Barrier', href: '/radiant-barrier-insulation' },
    ],
  },
  tools: {
    title: 'Tools',
    items: [
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
    items: [
      { title: 'Open vs Closed Cell Spray Foam', href: '/open-cell-vs-closed-cell-spray-foam' },
      { title: 'Fiberglass vs Cellulose', href: '/fiberglass-vs-cellulose' },
      { title: 'Fiberglass vs Mineral Wool', href: '/fiberglass-vs-mineral-wool' },
      { title: 'XPS vs EPS', href: '/xps-vs-eps' },
      { title: 'Batts vs Blown-In', href: '/batt-vs-blown-in-insulation' },
      { title: 'Faced vs Unfaced', href: '/faced-vs-unfaced-insulation' },
    ],
  },
  costs: {
    title: 'Costs & Savings',
    items: [
      { title: 'Spray Foam Cost', href: '/spray-foam-insulation-cost' },
      { title: 'Attic Insulation Cost', href: '/attic-insulation-cost' },
    ],
  },
  resources: {
    title: 'Resources',
    items: [
      { title: 'R-Value Chart', href: '/r-value-chart' },
      { title: 'R-Value Per Inch', href: '/r-value-per-inch' },
      { title: 'Types of Insulation', href: '/types-of-insulation' },
      { title: 'What Is R-Value?', href: '/what-is-r-value' },
    ],
  },
}

export type NavigationCategory = keyof typeof navigationCategories
