import AnimatedSection from '../components/AnimatedSection'
import SectionTitle from '../components/SectionTitle'
import { galleryImages } from '../data/content'

function GallerySection() {
  return (
    <AnimatedSection id="gallery" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle
        eyebrow="Gallery"
        title="A Visual Journey Through George"
        description="Cinematic corners, vintage charm, and food moments that define the George experience."
      />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-52 w-full rounded-2xl border border-amber-700/30 object-cover sm:h-64"
          />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default GallerySection
