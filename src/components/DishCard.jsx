import { motion } from 'framer-motion'

function DishCard({ dish }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="overflow-hidden rounded-2xl border border-amber-600/30 bg-[#1a120d]/80"
    >
      <img
        src={dish.image}
        alt={dish.name}
        loading="lazy"
        className="h-48 w-full object-cover"
      />
      <div className="space-y-3 p-5">
        <h3 className="font-serif text-xl text-amber-50">{dish.name}</h3>
        <p className="text-sm text-amber-100/70">{dish.description}</p>
      </div>
    </motion.article>
  )
}

export default DishCard
