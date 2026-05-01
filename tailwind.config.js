/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-400': '#00FF88',
        'cyan-400': '#00D9FF',
        'cyan-500': '#00D9FF',
        'purple-400': '#B818FF',
      },
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
