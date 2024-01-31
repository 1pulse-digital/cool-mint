import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDBB10",
        secondary: "#FAFAFA",
        textColor: "#A1A1AA",
        background: "#09090B",
      },
      fontSize: {
        'headings': '2.5rem', // Customize the font size for h1 (2xl) - adjust as needed
        'BodyText': '1.25rem', // Customize the font size for h2 (xl) - adjust as needed
      },
      fontFamily: {
        helvetica: "'Helvetica', sans-serif",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
  ],
}
export default config
