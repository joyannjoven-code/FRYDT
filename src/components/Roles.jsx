import RoleCard from './RoleCard'
import SectionHeading from './SectionHeading'

export default function Roles({ roles, activeRole, onRoleChange }) {
  return (
    <section id="roles" className="border-y border-ink-line bg-surface py-[72px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 md:px-8">
        <SectionHeading label="WHO USES IT" title="Two roles, one shared record." />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {roles.map((r) => (
            <RoleCard key={r.id} {...r} active={activeRole === r.id} onSelect={() => onRoleChange(r.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}
