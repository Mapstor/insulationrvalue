import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          50: '#f0f5fa',
          100: '#e0ebf5',
          200: '#b8d0e8',
          300: '#8fb5db',
          400: '#4d8ac3',
          500: '#1e3a5f',
          600: '#1a3454',
          700: '#162c47',
          800: '#12243a',
          900: '#0e1c2e',
        },
        secondary: {
          DEFAULT: '#e67e22',
          50: '#fef8f0',
          100: '#fdf1e0',
          200: '#fbe0b8',
          300: '#f8ce8f',
          400: '#f2a44d',
          500: '#e67e22',
          600: '#cf711e',
          700: '#ad5e19',
          800: '#8b4c14',
          900: '#693910',
        },
        accent: {
          DEFAULT: '#27ae60',
          50: '#f0faf5',
          100: '#e0f5ea',
          200: '#b8e8cc',
          300: '#8fdbad',
          400: '#4dc37f',
          500: '#27ae60',
          600: '#229c56',
          700: '#1d824a',
          800: '#17683b',
          900: '#124f2d',
        },
        surface: {
          DEFAULT: '#f8f9fa',
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#f1f3f5',
          300: '#e9ecef',
          400: '#dee2e6',
          500: '#ced4da',
        },
        text: {
          DEFAULT: '#1a1a2e',
          muted: '#6c757d',
          light: '#868e96',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        base: ['18px', '1.7'],
      },
      maxWidth: {
        'article': '780px',
        'calculator': '960px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '780px',
            color: '#1a1a2e',
            fontSize: '18px',
            lineHeight: '1.7',
            h1: {
              color: '#1e3a5f',
              fontWeight: '700',
            },
            h2: {
              color: '#1e3a5f',
              fontWeight: '600',
            },
            h3: {
              color: '#1e3a5f',
              fontWeight: '600',
            },
            a: {
              color: '#1e3a5f',
              textDecoration: 'underline',
              '&:hover': {
                color: '#4d8ac3',
              },
            },
            'blockquote': {
              borderLeftColor: '#e67e22',
              backgroundColor: '#fef8f0',
              padding: '1rem 1.5rem',
              borderRadius: '0.375rem',
              fontStyle: 'normal',
            },
            table: {
              fontSize: '15px',
            },
            'thead th': {
              backgroundColor: '#1e3a5f',
              color: '#ffffff',
              padding: '0.75rem 1rem',
            },
            'tbody td': {
              padding: '0.75rem 1rem',
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: '#f8f9fa',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
