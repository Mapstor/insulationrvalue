import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Insulation Savings Calculator - Calculate ROI & Payback Period'
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
        {/* Savings icon */}
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
          <span style={{ fontSize: 56, color: 'white' }}>💵</span>
        </div>

        {/* Main title */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Insulation Savings Calculator
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
          Calculate Your ROI & Payback Period
        </h2>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 48,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: 22 }}>
            <span style={{ marginRight: 8 }}>✓</span> Annual Savings
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: 22 }}>
            <span style={{ marginRight: 8 }}>✓</span> 10-30 Year Projections
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: 22 }}>
            <span style={{ marginRight: 8 }}>✓</span> Tax Credit Info
          </div>
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
