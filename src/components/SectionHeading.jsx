// Reusable section title with an optional small label above it.
export default function SectionHeading({ label, title }) {
  return (
    <div className="max-w-[640px]">
      {label && <div className="text-[13px] font-bold tracking-wider text-link">{label}</div>}
      <h2 className="m-0 mt-2 text-3xl font-bold tracking-[-.5px] sm:text-[34px]">{title}</h2>
    </div>
  )
}
