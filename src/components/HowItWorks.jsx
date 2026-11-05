import SectionHeading from './SectionHeading'

function StepCard({ number, title, text }) {
  return (
    <div className="rounded-xl border border-ink-line bg-surface p-6">
      <div className="font-mono text-sm text-ink-soft">{String(number).padStart(2, '0')}</div>
      <h3 className="mb-1.5 mt-1.5 text-[19px] font-bold">{title}</h3>
      <p className="m-0 text-sm leading-relaxed text-ink-soft">{text}</p>
    </div>
  )
}

export default function HowItWorks({ steps }) {
  return (
    <section id="how" className="py-[72px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 md:px-8">
        <SectionHeading title="How a day runs in FRYDT" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {steps.map((s, i) => (
            <StepCard key={s.title} number={i + 1} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
