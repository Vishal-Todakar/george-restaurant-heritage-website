import AnimatedSection from '../components/AnimatedSection'
import SectionTitle from '../components/SectionTitle'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/content'

function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle
        eyebrow="Testimonials"
        title="Loved Across Generations"
        description="Guests return for the same reason every year: the taste, the warmth, and the memories."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default TestimonialsSection
