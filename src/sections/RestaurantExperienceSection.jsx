import AnimatedSection from '../components/AnimatedSection'
import SectionTitle from '../components/SectionTitle'
import { experienceHighlights } from '../data/content'

function RestaurantExperienceSection() {
  return (
    <AnimatedSection id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle
        eyebrow="Restaurant Experience"
        title="Cinematic, Warm and Timeless"
        description="Step into an atmosphere crafted with golden light, heritage textures, and the unmistakable aroma of Mughlai comfort."
      />
      <div className="grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1300&q=80"
          alt="Guests enjoying dinner in a warmly lit heritage restaurant"
          loading="lazy"
          className="h-72 w-full rounded-3xl border border-amber-700/30 object-cover shadow-2xl shadow-black/35 sm:h-96"
        />
        <ul className="space-y-4 rounded-3xl border border-amber-700/30 bg-[#120c09] p-7">
          {experienceHighlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-amber-100/80 sm:text-base">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  )
}

export default RestaurantExperienceSection
