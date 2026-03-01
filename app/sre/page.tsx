import { SreHeroSection } from '@/components/sre/SreHeroSection'
import { SreValueProposition } from '@/components/sre/SreValueProposition'
import { SrePlatformSection } from '@/components/sre/SrePlatformSection'
import { SreFeaturesSection } from '@/components/sre/SreFeaturesSection'
import { SreSolutionsSection } from '@/components/sre/SreSolutionsSection'
import { SreCredibilitySection } from '@/components/sre/SreCredibilitySection'
import { SreFooter } from '@/components/sre/SreFooter'

export default function SrePage() {
  return (
    <main className="min-h-screen bg-white">
      <SreHeroSection />
      <SreValueProposition />
      <SrePlatformSection />
      <SreFeaturesSection />
      <SreSolutionsSection />
      <SreCredibilitySection />
      <SreFooter />
    </main>
  )
}
