export default function Footer({ shop }) {
  return (
    <footer id="contact" className="bg-navy py-10 text-[#CFE0EA]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xl font-bold tracking-wider text-white">FRYDT</div>
            <div className="text-sm">{shop.tagline}</div>
          </div>

          {shop.branches.map((b) => (
            <div key={b.name} className="text-sm leading-relaxed">
              <div className="font-bold text-white">{b.name} branch</div>
              <div>{b.address}</div>
              <div className="text-[13px] opacity-80">{b.note}</div>
            </div>
          ))}

          <div className="text-sm leading-relaxed">
            <div className="font-bold text-white">Open daily</div>
            <div>{shop.hours}</div>
            <div className="mt-2">{shop.contactPerson}</div>
            <a href={`tel:${shop.contactNumber}`} className="text-[#CFE0EA] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {shop.contactNumber}
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 text-[13px]">
          © {shop.year} {shop.name}. For authorized staff only.
        </div>
      </div>
    </footer>
  )
}
