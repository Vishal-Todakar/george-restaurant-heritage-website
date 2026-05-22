import AnimatedSection from '../components/AnimatedSection'

function ReservationCTASection() {
  return (
    <AnimatedSection id="reserve" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="rounded-3xl border border-orange-500/40 bg-gradient-to-r from-[#1a120d] via-[#23150f] to-[#29160f] p-8 text-center shadow-2xl shadow-black/30 sm:p-12">
        <p className="text-xs tracking-[0.28em] text-orange-200 uppercase">Reservation CTA</p>
        <h2 className="mt-3 font-serif text-3xl text-amber-50 sm:text-4xl">Reserve Your George Evening</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-amber-100/80 sm:text-base">
          Book your table for authentic Mughlai flavors and a timeless Camp dining experience.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="tel:+912026352350" className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-400">
            Call to Reserve
          </a>
          <a href="mailto:reservations@georgerestaurant.in" className="rounded-full border border-amber-300 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-100/10">
            Send Reservation Request
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ReservationCTASection
