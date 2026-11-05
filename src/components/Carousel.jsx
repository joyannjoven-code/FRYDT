import { useEffect, useRef, useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

// Reusable carousel. Shows 1 slide on phones, 2 on tablets, 3 on desktops.
// `items` is any array, `renderItem(item)` draws one slide, `getKey(item)` gives its key.
// Interactive feature: previous/next buttons, dots and swipe, all driven by React state.
export default function Carousel({ items, renderItem, getKey, label }) {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const isTablet = useMediaQuery('(min-width: 640px)')
  const perView = isDesktop ? 3 : isTablet ? 2 : 1
  const lastIndex = Math.max(0, items.length - perView)

  const [index, setIndex] = useState(0)
  const touchX = useRef(null)

  // Keep the position valid when the screen size changes the slides per view.
  useEffect(() => {
    setIndex((i) => Math.min(i, lastIndex))
  }, [lastIndex])

  const go = (next) => setIndex(Math.min(Math.max(next, 0), lastIndex))

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1))
  }

  const arrowClass =
    'inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-line bg-surface text-main transition hover:border-teal hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-ink-line disabled:hover:text-main'

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="flex flex-col gap-5">
      <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="flex items-stretch transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
        >
          {items.map((item, i) => {
            const visible = i >= index && i < index + perView
            return (
              <div
                key={getKey(item)}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${items.length}`}
                aria-hidden={visible ? undefined : 'true'}
                inert={visible ? undefined : ''}
                className="shrink-0 px-2"
                style={{ flexBasis: `${100 / perView}%` }}
              >
                {renderItem(item)}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1" role="group" aria-label="Choose slide">
          {Array.from({ length: lastIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to position ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className="group inline-flex h-11 w-6 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-link"
            >
              <span className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-teal' : 'w-2 bg-ink-line group-hover:bg-teal-light'}`} />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous features" className={arrowClass}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" onClick={() => go(index + 1)} disabled={index === lastIndex} aria-label="Next features" className={arrowClass}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
