// Reusable square-bullet list. `items` is an array of strings.
export default function BulletList({ items, className = '' }) {
  return (
    <ul className={`m-0 flex list-none flex-col gap-2 p-0 text-sm ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-teal-light" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
