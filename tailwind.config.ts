import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // src/lib holds site config + page data, which carry class names (e.g. image
    // focal points). Tailwind only emits classes it finds inside these globs, so
    // leaving this out makes those classes silently compile to nothing.
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#161616',
          light: '#2E2E2E',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#D51212',
          light: '#E63535',
          dark: '#A80D0D',
        },
      },
      fontFamily: {
        sans: ['var(--font-work-sans)', 'sans-serif'],
        serif: ['var(--font-barlow)', 'Arial Narrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
