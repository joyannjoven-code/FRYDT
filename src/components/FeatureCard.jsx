import { useState } from 'react'
import BulletList from './BulletList'
import Icon from './Icon'

// Reusable card. Interactive feature #5: expandable "More detail" section.
export default function FeatureCard({ icon, title, summary, bullets, details }) {
  const [expanded, setExpanded] = useState(false)
  const panelId = `details-${title.replace(/\W+/g, '-').toLowerCase()}`

  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-ink-line bg-surface p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-teal-pale">
        <Icon name={icon} />
      </div>
      <h3 className="m-0 text-[19px] font-bold">{title}</h3>
      <p className="m-0 text-sm leading-relaxed text-ink-soft">{summary}</p>
      <BulletList items={bullets} />

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="mt-auto inline-flex min-h-11 items-center gap-1 self-start text-sm font-medium text-link hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-link"
      >
        {expanded ? 'Show less' : 'More detail'}
        <svg
          className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {expanded && (
        <p id={panelId} className="m-0 border-t border-ink-line pt-3 text-sm leading-relaxed text-ink-soft">
          {details}
        </p>
      )}
    </div>
  )
}
