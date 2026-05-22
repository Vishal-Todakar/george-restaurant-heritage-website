import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-[#0a0604]" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 text-xs tracking-[0.28em] text-amber-300 uppercase">Legendary Since Camp, Pune</p>
        <h1 className="font-serif text-4xl leading-tight text-amber-50 sm:text-6xl">
          The Taste Pune Grew Up With
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm text-amber-100/80 sm:text-lg">
          Heritage Mughlai and biryani recipes, passed through decades, served in a timeless old-school atmosphere.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#dishes" className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-400">
            View Menu
          </a>
          <a href="#reserve" className="rounded-full border border-amber-400 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-200/10">
            Reserve Table
          </a>
          <a href="#reserve" className="rounded-full border border-orange-400/70 px-6 py-3 text-sm font-semibold text-orange-100 transition hover:bg-orange-400/10">
            Order Online
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
