import AnimatedSection from '../components/AnimatedSection'
import SectionTitle from '../components/SectionTitle'

function LegacyStorySection() {
  return (
    <AnimatedSection id="legacy" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle
        eyebrow="Legacy Story"
        title="An Icon of Camp, Pune"
        description="George Restaurant has welcomed generations with the aroma of dum biryani, warm hospitality, and recipes that carry the spirit of old Pune."
      />
      <div className="grid gap-8 rounded-3xl border border-amber-700/30 bg-[#120c09] p-8 md:grid-cols-2 md:p-10">
        <p className="text-sm leading-relaxed text-amber-100/75 sm:text-base">
          For decades, families, students, and travelers have walked into George for comfort and celebration. Our kitchen honors classic Mughlai craft with patient marination, charcoal smoke, and carefully layered spices.
        </p>
        <p className="text-sm leading-relaxed text-amber-100/75 sm:text-base">
          Every plate is a memory in the making—from Sunday biryani gatherings to late-night cravings in Camp. George remains a heritage table where nostalgia meets premium dining.
        </p>
      </div>
    </AnimatedSection>
  )
}

export default LegacyStorySection
