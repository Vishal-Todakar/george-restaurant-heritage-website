import AnimatedSection from '../components/AnimatedSection'
import DishCard from '../components/DishCard'
import SectionTitle from '../components/SectionTitle'
import { signatureDishes } from '../data/content'

function SignatureDishesSection() {
  return (
    <AnimatedSection id="dishes" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle
        eyebrow="Signature Dishes"
        title="George Classics"
        description="From soulful biryanis to old-world desserts, these are the flavors that made George legendary."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {signatureDishes.map((dish) => (
          <DishCard key={dish.name} dish={dish} />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default SignatureDishesSection
