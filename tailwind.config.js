/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2A43', // header and footer stay dark in both themes
        teal: { DEFAULT: '#1B6F82', light: '#2FA4B8', pale: 'rgb(var(--tealpale) / <alpha-value>)' },
        ink: {
          soft: 'rgb(var(--soft) / <alpha-value>)',
          line: 'rgb(var(--line) / <alpha-value>)',
          mist: 'rgb(var(--page) / <alpha-value>)',
        },
        surface: 'rgb(var(--surface) / <alpha-value>)',
        main: 'rgb(var(--main) / <alpha-value>)',
        link: 'rgb(var(--link) / <alpha-value>)',
        field: 'rgb(var(--field) / <alpha-value>)',
        seg: 'rgb(var(--seg) / <alpha-value>)',
        herofrom: 'rgb(var(--herofrom) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
