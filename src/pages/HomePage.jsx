import NavBar from '../components/NavBar'
import FooterSection from '../sections/FooterSection'
import GallerySection from '../sections/GallerySection'
import HeroSection from '../sections/HeroSection'
import LegacyStorySection from '../sections/LegacyStorySection'
import ReservationCTASection from '../sections/ReservationCTASection'
import RestaurantExperienceSection from '../sections/RestaurantExperienceSection'
import SignatureDishesSection from '../sections/SignatureDishesSection'
import TestimonialsSection from '../sections/TestimonialsSection'

function HomePage() {
  return (
    <div className="min-h-screen bg-[#070504] text-amber-50">
      <NavBar />
      <main>
        <HeroSection />
        <LegacyStorySection />
        <SignatureDishesSection />
        <RestaurantExperienceSection />
        <TestimonialsSection />
        <GallerySection />
        <ReservationCTASection />
      </main>
      <FooterSection />
    </div>
  )
}

export default HomePage
