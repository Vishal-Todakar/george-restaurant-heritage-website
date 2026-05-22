function SectionTitle({ eyebrow, title, description }) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-amber-300 uppercase">{eyebrow}</p>
      <h2 className="font-serif text-3xl text-amber-50 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-sm text-amber-100/70 sm:text-base">{description}</p> : null}
    </header>
  )
}

export default SectionTitle
