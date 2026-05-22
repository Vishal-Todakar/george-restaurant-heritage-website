function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-2xl border border-amber-600/30 bg-[#18110d]/90 p-6 shadow-lg shadow-black/20">
      <p className="text-sm leading-relaxed text-amber-100/80">“{testimonial.quote}”</p>
      <p className="mt-5 font-serif text-lg text-amber-200">{testimonial.name}</p>
    </article>
  )
}

export default TestimonialCard
