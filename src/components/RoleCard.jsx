import BulletList from './BulletList'

// Reusable card. `active` highlights the role currently chosen in the sign-in box.
export default function RoleCard({ title, description, permissions, active, onSelect }) {
  return (
    <div
      className={`rounded-xl border p-6 transition-colors ${
        active ? 'border-navy bg-navy text-white dark:border-teal-light' : 'border-ink-line bg-white'
      }`}
    >
      <h3 className="m-0 mb-2 text-[22px] font-bold">{title}</h3>
      <p className={`mb-4 mt-0 leading-relaxed ${active ? 'text-[#CFE0EA]' : 'text-ink-soft'}`}>{description}</p>
      <BulletList items={permissions} />
      {!active && (
        <button
          type="button"
          onClick={onSelect}
          className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-link hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-link"
        >
          Sign in as {title}
        </button>
      )}
    </div>
  )
}
