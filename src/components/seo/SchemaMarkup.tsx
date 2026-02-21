import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebApplicationSchema,
  generateWebPageSchema,
  generateContactPageSchema,
  extractFAQItems,
} from '@/lib/seo'

interface ArticleSchemaData {
  title: string
  description: string
  slug: string
  datePublished?: string
  dateModified?: string
  author?: string
  content?: string
}

interface CalculatorSchemaData {
  name: string
  description: string
  url: string
}

interface WebPageSchemaData {
  name: string
  description: string
  url: string
}

interface BreadcrumbSchemaData {
  items: { name: string; url: string }[]
}

// Empty object type for organization schema (no data needed)
interface OrganizationSchemaData {
  [key: string]: never
}

type SchemaType = 'article' | 'organization' | 'calculator' | 'breadcrumb' | 'webpage' | 'contactpage'

type SchemaDataType =
  | ArticleSchemaData
  | CalculatorSchemaData
  | BreadcrumbSchemaData
  | OrganizationSchemaData
  | WebPageSchemaData
  | Record<string, never>

interface SchemaMarkupProps {
  type: SchemaType
  data: SchemaDataType
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  let schemas: object[] = []

  switch (type) {
    case 'article': {
      const articleData = data as ArticleSchemaData
      schemas.push(
        generateArticleSchema(
          {
            title: articleData.title,
            metaTitle: articleData.title,
            metaDescription: articleData.description,
            slug: articleData.slug,
            datePublished: articleData.datePublished,
            dateModified: articleData.dateModified,
            author: articleData.author,
          },
          articleData.slug,
          articleData.content || ''
        )
      )

      // Add FAQ schema if content contains FAQ section
      if (articleData.content) {
        const faqItems = extractFAQItems(articleData.content)
        const faqSchema = generateFAQSchema(faqItems)
        if (faqSchema) {
          schemas.push(faqSchema)
        }
      }

      // Add breadcrumb schema
      schemas.push(
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: articleData.title, url: `/${articleData.slug}` },
        ])
      )
      break
    }

    case 'organization': {
      schemas.push(generateOrganizationSchema())
      break
    }

    case 'calculator': {
      const calcData = data as CalculatorSchemaData
      schemas.push(
        generateWebApplicationSchema(
          calcData.name,
          calcData.description,
          calcData.url
        )
      )
      break
    }

    case 'breadcrumb': {
      const breadcrumbData = data as BreadcrumbSchemaData
      schemas.push(generateBreadcrumbSchema(breadcrumbData.items))
      break
    }

    case 'webpage': {
      const pageData = data as WebPageSchemaData
      schemas.push(generateWebPageSchema(pageData.name, pageData.description, pageData.url))
      break
    }

    case 'contactpage': {
      schemas.push(generateContactPageSchema())
      break
    }
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
