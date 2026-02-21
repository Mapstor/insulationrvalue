import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'IECC Climate Zone Map - Find Your Zone by ZIP Code'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1e3a5f',
          backgroundImage: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)',
        }}
      >
        {/* Map icon */}
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#27ae60',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 56, color: 'white' }}>🗺️</span>
        </div>

        {/* Main title */}
        <h1
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Climate Zone Map
        </h1>

        {/* Subtitle */}
        <h2
          style={{
            fontSize: 32,
            color: '#e67e22',
            textAlign: 'center',
            marginTop: 24,
            fontWeight: 500,
          }}
        >
          Find Your IECC Zone by ZIP Code
        </h2>

        {/* Zone legend */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 48,
          }}
        >
          {[
            { zone: '1-2', color: '#ef4444', label: 'Hot' },
            { zone: '3-4', color: '#eab308', label: 'Mixed' },
            { zone: '5-6', color: '#22c55e', label: 'Cold' },
            { zone: '7-8', color: '#3b82f6', label: 'Very Cold' },
          ].map((item) => (
            <div
              key={item.zone}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.15)',
                padding: '8px 16px',
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: item.color,
                  borderRadius: 4,
                  marginRight: 8,
                }}
              />
              <span style={{ color: 'white', fontSize: 18 }}>
                Zone {item.zone}: {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#e67e22',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
            }}
          >
            <span style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>R</span>
          </div>
          <span style={{ fontSize: 24, color: 'rgba(255,255,255,0.8)' }}>
            InsulationRValues.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
