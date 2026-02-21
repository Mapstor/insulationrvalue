import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Insulation R-Values - Complete R-Value Guide & Calculator'
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
        {/* Logo/Brand area */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#e67e22',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 24,
            }}
          >
            <span style={{ fontSize: 48, color: 'white', fontWeight: 'bold' }}>R</span>
          </div>
          <span
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            InsulationRValues.com
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 60px',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Complete R-Value Guide
          </h1>
          <h2
            style={{
              fontSize: 32,
              color: '#e67e22',
              textAlign: 'center',
              marginTop: 20,
              fontWeight: 600,
            }}
          >
            Charts, Calculators & Expert Recommendations
          </h2>
        </div>

        {/* Feature badges */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            marginTop: 48,
          }}
        >
          {['R-Value Calculator', 'Climate Zone Map', 'Cost Estimator'].map((feature) => (
            <div
              key={feature}
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                padding: '12px 24px',
                borderRadius: 8,
                color: 'white',
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
