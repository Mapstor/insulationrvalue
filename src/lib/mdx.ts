import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface ArticleFrontmatter {
  title: string
  metaTitle: string
  metaDescription: string
  slug: string
  primaryKeyword?: string
  datePublished?: string
  dateModified?: string
  author?: string
}

export interface Article {
  slug: string
  frontmatter: ArticleFrontmatter
  content: string
  headings: TableOfContentsItem[]
  readingTime: number
}

export interface TableOfContentsItem {
  id: string
  text: string
  level: number
}

/**
 * Parse HTML comment frontmatter format
 * <!-- Meta Title: Some Title -->
 * <!-- Meta Description: Some description -->
 * <!-- Primary Keyword: some keyword -->
 */
function parseHtmlCommentFrontmatter(content: string): { data: Partial<ArticleFrontmatter>; content: string } {
  const data: Partial<ArticleFrontmatter> = {}
  let cleanContent = content

  // Extract Meta Title
  const titleMatch = content.match(/<!--\s*Meta Title:\s*(.+?)\s*-->/)
  if (titleMatch) {
    data.metaTitle = titleMatch[1].trim()
    // Extract title from metaTitle (before the pipe)
    const titleParts = data.metaTitle.split('|')
    data.title = titleParts[0].trim()
  }

  // Extract Meta Description
  const descMatch = content.match(/<!--\s*Meta Description:\s*(.+?)\s*-->/)
  if (descMatch) {
    data.metaDescription = descMatch[1].trim()
  }

  // Extract Primary Keyword
  const keywordMatch = content.match(/<!--\s*Primary Keyword:\s*(.+?)\s*-->/)
  if (keywordMatch) {
    data.primaryKeyword = keywordMatch[1].trim()
  }

  // Remove all HTML comments from content
  cleanContent = content.replace(/<!--[\s\S]*?-->\n*/g, '').trim()

  return { data, content: cleanContent }
}

/**
 * Extract headings from markdown content for Table of Contents
 */
function extractHeadings(content: string): TableOfContentsItem[] {
  const headings: TableOfContentsItem[] = []
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    // Generate slug from text
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    headings.push({ id, text, level })
  }

  return headings
}

/**
 * Calculate reading time (words per minute)
 */
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Get all article slugs for static generation
 */
export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.(mdx|md)$/, ''))
}

/**
 * Get article data by slug
 */
export function getArticleBySlug(slug: string): Article | null {
  const mdxPath = path.join(articlesDirectory, `${slug}.mdx`)
  const mdPath = path.join(articlesDirectory, `${slug}.md`)

  let fullPath = ''
  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath
  } else {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Try parsing with gray-matter first (for YAML frontmatter)
  let frontmatter: ArticleFrontmatter
  let content: string

  // Check if it starts with HTML comments (our custom format)
  if (fileContents.trim().startsWith('<!--')) {
    const parsed = parseHtmlCommentFrontmatter(fileContents)
    frontmatter = {
      title: parsed.data.title || slug,
      metaTitle: parsed.data.metaTitle || parsed.data.title || slug,
      metaDescription: parsed.data.metaDescription || '',
      slug,
      primaryKeyword: parsed.data.primaryKeyword,
      datePublished: new Date().toISOString().split('T')[0],
      dateModified: new Date().toISOString().split('T')[0],
      author: 'InsulationRValues.com Editorial Team',
    }
    content = parsed.content
  } else {
    // Try YAML frontmatter
    const { data, content: matterContent } = matter(fileContents)
    frontmatter = {
      title: data.title || slug,
      metaTitle: data.metaTitle || data.title || slug,
      metaDescription: data.metaDescription || data.meta_description || '',
      slug: data.slug || slug,
      primaryKeyword: data.primaryKeyword || data.primary_keyword,
      datePublished: data.datePublished || data.date_published || new Date().toISOString().split('T')[0],
      dateModified: data.dateModified || data.date_modified || new Date().toISOString().split('T')[0],
      author: data.author || 'InsulationRValues.com Editorial Team',
    }
    content = matterContent
  }

  const headings = extractHeadings(content)
  const readingTime = calculateReadingTime(content)

  return {
    slug,
    frontmatter,
    content,
    headings,
    readingTime,
  }
}

/**
 * Get all articles
 */
export function getAllArticles(): Article[] {
  const slugs = getAllArticleSlugs()
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))

  return articles
}

/**
 * Get articles by category based on slug patterns
 */
export function getArticlesByCategory(category: string): Article[] {
  const allArticles = getAllArticles()

  const categoryPatterns: Record<string, RegExp[]> = {
    guides: [
      /attic/i, /wall/i, /basement/i, /crawl-space/i, /garage/i,
      /how-to/i, /insulate/i
    ],
    materials: [
      /spray-foam/i, /fiberglass/i, /mineral-wool/i, /cellulose/i,
      /blown-in/i, /rigid-foam/i, /radiant/i, /polyiso/i, /xps/i, /eps/i
    ],
    comparisons: [
      /vs/i, /faced-vs-unfaced/i, /batt-vs/i, /open-cell-vs/i
    ],
    costs: [
      /cost/i, /price/i
    ],
    resources: [
      /r-value/i, /chart/i, /types/i, /code/i, /climate/i, /what-is/i
    ],
  }

  const patterns = categoryPatterns[category] || []

  return allArticles.filter((article) =>
    patterns.some((pattern) => pattern.test(article.slug))
  )
}

/**
 * Process markdown content to add IDs to headings
 */
export function processMarkdownContent(content: string): string {
  // Add IDs to headings for anchor links
  return content.replace(
    /^(#{2,3})\s+(.+)$/gm,
    (match, hashes, text) => {
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
      return `${hashes} ${text} {#${id}}`
    }
  )
}
