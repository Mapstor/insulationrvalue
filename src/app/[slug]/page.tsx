import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllArticleSlugs, getArticleBySlug } from '@/lib/mdx'
import { generateArticleMetadata } from '@/lib/seo'
import ArticleLayout from '@/components/content/ArticleLayout'
import type { Components } from 'react-markdown'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all articles
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for each article
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return generateArticleMetadata(article.frontmatter, slug)
}

// Helper to generate slug from text
function slugify(text: string): string {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

// Custom components for react-markdown
const markdownComponents: Components = {
  // Custom table wrapper for responsive scrolling
  table: ({ children }) => (
    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 my-6">
      <table className="min-w-full border-collapse">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-primary text-white">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold border border-surface-200">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-sm border border-surface-200 bg-white">
      {children}
    </td>
  ),
  tr: ({ children }) => (
    <tr className="even:bg-surface-50">{children}</tr>
  ),
  // Style blockquotes as Pro Tips or Quick Answers
  blockquote: ({ children }) => {
    const childContent = String(children)
    const isProTip = childContent.includes('Pro Tip')
    const isQuickAnswer = childContent.includes('Quick Answer')

    if (isProTip) {
      return (
        <div className="border-l-4 border-secondary bg-secondary-50 p-4 rounded-r-lg my-6 not-italic">
          {children}
        </div>
      )
    }

    if (isQuickAnswer) {
      return (
        <div className="bg-primary-50 border border-primary-200 p-6 rounded-lg my-6 not-italic">
          {children}
        </div>
      )
    }

    return (
      <blockquote className="border-l-4 border-surface-300 pl-4 my-4 italic text-text-muted">
        {children}
      </blockquote>
    )
  },
  // Style links
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http')
    return (
      <a
        href={href}
        className="text-primary hover:text-primary-600 underline"
        {...(isExternal && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
      >
        {children}
      </a>
    )
  },
  // Add IDs to headings
  h1: ({ children }) => {
    const id = slugify(String(children))
    return (
      <h1 id={id} className="text-3xl sm:text-4xl font-bold text-primary mt-8 mb-4">
        {children}
      </h1>
    )
  },
  h2: ({ children }) => {
    const id = slugify(String(children))
    return (
      <h2 id={id} className="text-2xl sm:text-3xl font-bold text-primary mt-8 mb-4 scroll-mt-20">
        {children}
      </h2>
    )
  },
  h3: ({ children }) => {
    const id = slugify(String(children))
    return (
      <h3 id={id} className="text-xl sm:text-2xl font-semibold text-primary mt-6 mb-3 scroll-mt-20">
        {children}
      </h3>
    )
  },
  h4: ({ children }) => {
    const id = slugify(String(children))
    return (
      <h4 id={id} className="text-lg font-semibold text-primary mt-4 mb-2">
        {children}
      </h4>
    )
  },
  // Paragraphs
  p: ({ children }) => (
    <p className="text-text leading-relaxed mb-4">{children}</p>
  ),
  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-6 mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-6 mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-text leading-relaxed">{children}</li>
  ),
  // Horizontal rule
  hr: () => (
    <hr className="my-8 border-t border-surface-200" />
  ),
  // Strong and emphasis
  strong: ({ children }) => (
    <strong className="font-semibold text-text">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic">{children}</em>
  ),
  // Code blocks
  code: ({ children, className }) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="bg-surface-100 text-secondary px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      )
    }
    return (
      <code className="block bg-surface-100 p-4 rounded-lg text-sm font-mono overflow-x-auto">
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre className="bg-surface-100 p-4 rounded-lg overflow-x-auto my-4">
      {children}
    </pre>
  ),
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <ArticleLayout article={article}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {article.content}
      </ReactMarkdown>
    </ArticleLayout>
  )
}
