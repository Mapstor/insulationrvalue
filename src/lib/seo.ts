import type { Metadata } from 'next'
import type { ArticleFrontmatter, TableOfContentsItem } from './mdx'

const siteUrl = 'https://www.insulationrvalues.com'
const siteName = 'InsulationRValues.com'

/**
 * Generate metadata for an article page
 */
export function generateArticleMetadata(
  frontmatter: ArticleFrontmatter,
  slug: string
): Metadata {
  return {
    title: frontmatter.metaTitle || frontmatter.title,
    description: frontmatter.metaDescription,
    openGraph: {
      title: frontmatter.metaTitle || frontmatter.title,
      description: frontmatter.metaDescription,
      url: `${siteUrl}/${slug}`,
      siteName,
      type: 'article',
      publishedTime: frontmatter.datePublished,
      modifiedTime: frontmatter.dateModified,
      authors: [frontmatter.author || 'Josh D.'],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.metaTitle || frontmatter.title,
      description: frontmatter.metaDescription,
    },
    alternates: {
      canonical: `${siteUrl}/${slug}`,
    },
  }
}

/**
 * Generate Article schema JSON-LD
 */
export function generateArticleSchema(
  frontmatter: ArticleFrontmatter,
  slug: string,
  content: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.metaDescription,
    author: {
      '@type': 'Person',
      name: frontmatter.author || 'Josh D.',
      url: `${siteUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    datePublished: frontmatter.datePublished,
    dateModified: frontmatter.dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/${slug}`,
    },
    url: `${siteUrl}/${slug}`,
  }
}

/**
 * Extract FAQ items from markdown content.
 *
 * Looks for a "## FAQ" or "## FAQs" section, then extracts each "### Question"
 * and its following answer. Uses split-based parsing rather than a single
 * regex to avoid the `$` lookahead edge case (with multiline flag, `$` matches
 * any end-of-line, which prematurely terminates capture groups).
 */
export function extractFAQItems(
  content: string
): { question: string; answer: string }[] {
  const faqItems: { question: string; answer: string }[] = []

  // Locate the FAQ section header
  const faqHeaderMatch = content.match(/^## FAQs?\s*$/m)
  if (!faqHeaderMatch || faqHeaderMatch.index === undefined) return faqItems

  // Take content after the header
  const afterHeader = content.slice(
    faqHeaderMatch.index + faqHeaderMatch[0].length
  )

  // Stop at the next "## " section header (if any)
  const nextSectionMatch = afterHeader.match(/^## /m)
  const faqContent =
    nextSectionMatch && nextSectionMatch.index !== undefined
      ? afterHeader.slice(0, nextSectionMatch.index)
      : afterHeader

  // Split on "### " markers; each block is one Q&A pair
  const questionBlocks = faqContent.split(/^### /m).slice(1) // skip preface before first ###

  for (const block of questionBlocks) {
    const firstNewline = block.indexOf('\n')
    if (firstNewline === -1) continue

    const question = block.slice(0, firstNewline).trim()
    const answer = block
      .slice(firstNewline + 1)
      .trim()
      .replace(/\n+/g, ' ')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // strip markdown links, keep label text
      .trim()

    if (question && answer) {
      faqItems.push({ question, answer })
    }
  }

  return faqItems
}

/**
 * Generate FAQPage schema JSON-LD
 */
export function generateFAQSchema(
  faqItems: { question: string; answer: string }[]
): object | null {
  if (faqItems.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * Generate BreadcrumbList schema JSON-LD
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  }
}

/**
 * Generate Organization schema JSON-LD
 */
export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    sameAs: [],
    description:
      'The most comprehensive, unbiased insulation R-value resource. Expert guides, calculators, and data-driven recommendations for every insulation project.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@insulationrvalues.com',
      contactType: 'customer service',
    },
  }
}

/**
 * Generate WebSite schema for the site root.
 * Emitted on homepage (and About) so search engines have a clear site identity
 * record alongside the Organization schema.
 */
export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description:
      'Independent insulation reference site. R-value charts, IECC code requirements, material comparisons, climate zones, calculators, and installation guidance sourced from primary documents (DOE, ORNL, BSC, IECC, manufacturer technical data).',
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    inLanguage: 'en-US',
  }
}

/**
 * Generate WebApplication schema for calculator pages
 */
export function generateWebApplicationSchema(
  name: string,
  description: string,
  url: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: url.startsWith('http') ? url : `${siteUrl}${url}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

/**
 * Generate HowTo schema for how-to articles
 */
export function generateHowToSchema(
  title: string,
  description: string,
  steps: { name: string; text: string }[],
  url: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    url: url.startsWith('http') ? url : `${siteUrl}${url}`,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

/**
 * Generate WebPage schema for static pages
 */
export function generateWebPageSchema(
  name: string,
  description: string,
  url: string
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: url.startsWith('http') ? url : `${siteUrl}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
    },
  }
}

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us',
    description: 'Get in touch with the InsulationRValues.com team.',
    url: `${siteUrl}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteName,
      email: 'info@insulationrvalues.com',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@insulationrvalues.com',
        contactType: 'customer service',
      },
    },
  }
}

/**
 * Extract steps from how-to article content
 */
export function extractHowToSteps(
  content: string
): { name: string; text: string }[] {
  const steps: { name: string; text: string }[] = []

  // Look for numbered steps or h3 headings that look like steps
  const stepRegex = /(?:^### (?:Step \d+[:\s]*)?(.+)$|^(\d+)\.\s*\*\*(.+?)\*\*)/gm
  let match

  while ((match = stepRegex.exec(content)) !== null) {
    const name = match[1] || match[3]
    if (name) {
      // Get the content after this heading until next heading
      const startIndex = match.index + match[0].length
      const nextHeadingMatch = content.slice(startIndex).match(/^#{2,3} /m)
      const endIndex = nextHeadingMatch
        ? startIndex + (nextHeadingMatch.index || 0)
        : content.length
      const text = content
        .slice(startIndex, endIndex)
        .trim()
        .replace(/\n+/g, ' ')
        .slice(0, 500)

      steps.push({ name, text })
    }
  }

  return steps
}
