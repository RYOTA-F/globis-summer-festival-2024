import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        t: '#333333',
        tsub: '#7b7b7b',
        bmask: '#e9edfb',
        ymask: '#fdf9d9',
        w70: 'rgba(255, 255, 255, 0.7)',
        footer: '#5e6c77',
        main: '#1748c6',
        sub: '#dbd394',
      },
    },
  },
  plugins: [],
}
export default config
