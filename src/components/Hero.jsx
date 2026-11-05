import BulletList from './BulletList'
import LoginCard from './LoginCard'

export default function Hero({ highlights, roles, role, onRoleChange }) {
  return (
    <section id="top" className="bg-gradient-to-b from-herofrom to-ink-mist py-[72px] pb-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] md:gap-14 md:px-8">
        <div className="flex flex-col gap-6">
          <span className="self-start rounded-full border border-ink-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-link">
            FRYDT Laundry Shop Management
          </span>
          <h1 className="m-0 text-4xl font-bold leading-tight tracking-tight sm:text-[52px] sm:leading-[1.08] sm:tracking-[-1px]">
            Run the whole shop from one place.
          </h1>
          <p className="m-0 max-w-[560px] text-lg leading-relaxed text-ink-soft">
            Record every order, track every load from drop-off to pick-up, and keep tabs on supplies, payments and
            expenses. Built for FRYDT’s owner and handlers, not for walk-in customers.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#features"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-teal bg-teal px-5 font-medium text-white no-underline transition hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
            >
              Explore
            </a>
          </div>
          <BulletList items={highlights} className="mt-1 !flex-row flex-wrap gap-x-7" />
        </div>

        <LoginCard roles={roles} role={role} onRoleChange={onRoleChange} />
      </div>
    </section>
  )
}
