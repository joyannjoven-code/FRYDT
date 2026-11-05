import { useEffect, useState } from 'react'
import logo from '../assets/frydt_circle_logo.png'
import useMediaQuery from '../hooks/useMediaQuery'
import ThemeToggle from './ThemeToggle'

// Left: logo + shop name. Right: navigation, theme toggle, Sign In.
// On phones the navigation becomes a menu that drops down from the top of the page.
// Interactive feature: menu toggle (state + click/Escape handlers).
export default function Header({ links, isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 767px)')
  const menuOpen = isMobile && open

  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-30 bg-navy">
      <div className="mx-auto flex min-h-[68px] max-w-[1200px] items-center gap-2 px-3 sm:px-4 md:px-8">
        <a href="#top" className="flex min-h-11 min-w-0 items-center gap-2 no-underline sm:gap-3" aria-label="FRYDT Laundry home">
          <img src={logo} alt="" className="h-10 w-10 shrink-0 rounded-full object-contain sm:h-12 sm:w-12" />
          <span className="truncate text-sm font-bold tracking-wider text-white sm:text-lg">FRYDT LAUNDRY</span>
        </a>

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2 md:gap-6">
          {menuOpen && (
            <div className="fixed inset-x-0 bottom-0 top-[68px] z-10 bg-black/40 md:hidden" onClick={() => setOpen(false)} aria-hidden="true" />
          )}

          <nav
            id="main-nav"
            aria-label="Main"
            className={`absolute inset-x-0 top-full z-20 flex flex-col border-t border-white/10 bg-navy px-4 py-2 shadow-[0_12px_32px_rgba(0,0,0,.35)] transition-[opacity,transform,visibility] duration-200 md:visible md:static md:translate-y-0 md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none ${
              menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
            }`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center border-b border-white/10 text-[15px] text-[#CFE0EA] no-underline last:border-0 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:border-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          <a
            href="#login"
            className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-teal-light bg-teal-light px-3 text-sm font-bold text-[#06222B] no-underline transition hover:bg-[#48B5C7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:px-5 md:text-base"
          >
            Sign In
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="main-nav"
            aria-expanded={menuOpen}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
