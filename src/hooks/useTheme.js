import { useEffect, useState } from 'react'

const KEY = 'frydt-theme'

// Light/dark theme. Adds or removes the "dark" class on <html> and remembers the choice.
export default function useTheme() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    try {
      localStorage.setItem(KEY, isDark ? 'dark' : 'light')
    } catch (e) {
      /* storage unavailable: the theme still works for this visit */
    }
  }, [isDark])

  return [isDark, () => setIsDark((d) => !d)]
}
