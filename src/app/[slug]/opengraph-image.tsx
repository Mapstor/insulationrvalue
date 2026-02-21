import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Insulation Guide'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

// Convert slug to readable title
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Determine article category based on slug patterns
function getCategory(slug: string): string {
  if (slug.includes('cost') || slug.includes('price')) return 'Cost Guide'
  if (slug.includes('attic')) return 'Attic Insulation'
  if (slug.includes('basement')) return 'Basement Insulation'
  if (slug.includes('wall')) return 'Wall Insulation'
  if (slug.includes('crawl')) return 'Crawl Space'
  if (slug.includes('spray-foam')) return 'Spray Foam'
  if (slug.includes('fiberglass')) return 'Fiberglass'
  if (slug.includes('cellulose')) return 'Cellulose'
  if (slug.includes('mineral-wool') || slug.includes('rockwool')) return 'Mineral Wool'
  if (slug.includes('rigid-foam') || slug.includes('xps') || slug.includes('eps')) return 'Rigid Foam'
  if (slug.includes('r-value')) return 'R-Value Guide'
  if (slug.includes('vs') || slug.includes('comparison')) return 'Comparison'
  if (slug.includes('garage')) return 'Garage Insulation'
  if (slug.includes('rim-joist')) return 'Rim Joist'
  if (slug.includes('cathedral') || slug.includes('ceiling')) return 'Ceiling Insulation'
  if (slug.includes('radiant')) return 'Radiant Barrier'
  if (slug.includes('blown-in')) return 'Blown-In Insulation'
  if (slug.includes('types')) return 'Insulation Types'
  return 'Insulation Guide'
}

export default async function Image({ params }: Props) {
  const { slug } = await params

  const title = slugToTitle(slug)
  const category = getCategory(slug)

  // Truncate title if too long
  const displayTitle = title.length > 50 ? title.substring(0, 47) + '...' : title

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#1e3a5f',
          backgroundImage: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)',
          padding: 60,
        }}
      >
        {/* Category badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              backgroundColor: '#e67e22',
              padding: '8px 20px',
              borderRadius: 8,
              color: 'white',
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.2,
              margin: 0,
              maxWidth: '90%',
            }}
          >
            {displayTitle}
          </h1>
        </div>

        {/* Bottom bar with brand and features */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
          }}
        >
          {/* Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                backgroundColor: '#e67e22',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 16,
              }}
            >
              <span style={{ fontSize: 28, color: 'white', fontWeight: 'bold' }}>R</span>
            </div>
            <span style={{ fontSize: 28, color: 'white', fontWeight: 600 }}>
              InsulationRValues.com
            </span>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: 'flex',
              gap: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'rgba(255,255,255,0.8)',
                fontSize: 18,
              }}
            >
              <span style={{ marginRight: 8 }}>✓</span> Expert Reviewed
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'rgba(255,255,255,0.8)',
                fontSize: 18,
              }}
            >
              <span style={{ marginRight: 8 }}>✓</span> 2024 Updated
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
