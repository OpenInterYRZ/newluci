import BirdHero from '@/components/bird/BirdHero'
import BirdProductDemo from '@/components/bird/BirdProductDemo'
import BirdFeatureBenefits from '@/components/bird/BirdFeatureBenefits'
import BirdHowItWorks from '@/components/bird/BirdHowItWorks'
import BirdFeatureShowcase from '@/components/bird/BirdFeatureShowcase'
import BirdPrivacySecurity from '@/components/bird/BirdPrivacySecurity'
import BirdTestimonials from '@/components/bird/BirdTestimonials'
import BirdFAQ from '@/components/bird/BirdFAQ'
import BirdCTA from '@/components/bird/BirdCTA'
import BirdFooter from '@/components/bird/BirdFooter'

export default function BirdPage() {
  return (
    <main className="min-h-screen bg-white">
      <BirdHero />
      <BirdProductDemo />
      <BirdFeatureBenefits />
      <BirdHowItWorks />
      <BirdFeatureShowcase />
      <BirdPrivacySecurity />
      <BirdTestimonials />
      <BirdFAQ />
      <BirdCTA />
      <BirdFooter />
    </main>
  )
}
