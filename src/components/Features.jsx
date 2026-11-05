import Carousel from './Carousel'
import FeatureCard from './FeatureCard'
import SectionHeading from './SectionHeading'

export default function Features({ features }) {
  return (
    <section id="features" className="py-[72px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 md:px-8">
        <SectionHeading label="FEATURES" title="Everything the shop records, tracked and reported." />
        {/* -mx-2 cancels the slides' side padding so the cards line up with the heading */}
        <div className="-mx-2">
          <Carousel
            label="FRYDT features"
            items={features}
            getKey={(f) => f.id}
            renderItem={(f) => <FeatureCard {...f} />}
          />
        </div>
      </div>
    </section>
  )
}
