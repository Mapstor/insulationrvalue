import type { Article } from '@/lib/mdx'
import Breadcrumbs, { type BreadcrumbItem } from '@/components/layout/Breadcrumbs'
import TableOfContents from '@/components/layout/TableOfContents'
import SchemaMarkup from '@/components/seo/SchemaMarkup'
import { formatDate } from '@/lib/utils'
import { Clock, Calendar, User } from 'lucide-react'

interface ArticleLayoutProps {
  article: Article
  children: React.ReactNode
}

export default function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const { frontmatter, headings, readingTime } = article

  // Build breadcrumb items
  const breadcrumbs: BreadcrumbItem[] = [
    { name: frontmatter.title, href: `/${article.slug}` },
  ]

  return (
    <>
      {/* Schema Markup */}
      <SchemaMarkup
        type="article"
        data={{
          title: frontmatter.title,
          description: frontmatter.metaDescription,
          slug: article.slug,
          datePublished: frontmatter.datePublished,
          dateModified: frontmatter.dateModified,
          author: frontmatter.author,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* Main Content */}
          <article className="min-w-0">
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">
                {frontmatter.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                {frontmatter.author && (
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{frontmatter.author}</span>
                  </div>
                )}
                {frontmatter.dateModified && (
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>Updated {formatDate(frontmatter.dateModified)}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </header>

            {/* Raptive In-Content Ad Slot - After Intro */}
            {/* This will be auto-populated by Raptive after site approval */}
            <div className="my-8" data-ad-slot="in-content-top">
              {/* Raptive auto-inserts ads here */}
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {children}
            </div>

            {/* Raptive In-Content Ad Slot - Before FAQ */}
            <div className="my-8" data-ad-slot="in-content-bottom">
              {/* Raptive auto-inserts ads here */}
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-surface-200">
              <div className="bg-surface-100 rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">
                  Was this article helpful?
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  If you found this guide useful, consider sharing it with others
                  who might benefit from this information.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(frontmatter.title)}&url=${encodeURIComponent(`https://insulationrvalues.com/${article.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Share on X
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://insulationrvalues.com/${article.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Share on Facebook
                  </a>
                </div>
              </div>
            </footer>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={headings} />

              {/* Raptive Sidebar Ad Slot */}
              <div
                className="mt-8 min-h-[250px]"
                data-ad-slot="sidebar-sticky"
              >
                {/* Raptive auto-inserts sticky sidebar ad here after approval */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
