import { useEffect, useRef } from 'react'

// Reusable dialog. Closes with the X button, the backdrop, or Escape.
export default function Modal({ open, title, onClose, children }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/60" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-md rounded-xl bg-surface p-6 shadow-[0_12px_32px_rgba(15,42,67,.3)]"
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <h2 id="modal-title" className="m-0 text-xl font-bold">
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-ink-soft hover:bg-ink-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-link"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="text-sm leading-relaxed text-ink-soft">{children}</div>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-teal bg-teal px-5 font-medium text-white transition hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
