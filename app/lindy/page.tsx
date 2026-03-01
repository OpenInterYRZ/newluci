import { Metadata } from 'next';
import LindyHero from '@/components/lindy/LindyHero';
import LindyProblem from '@/components/lindy/LindyProblem';
import LindyFeatures from '@/components/lindy/LindyFeatures';
import LindyTestimonials from '@/components/lindy/LindyTestimonials';
import LindyHowItWorks from '@/components/lindy/LindyHowItWorks';
import LindyIntegrations from '@/components/lindy/LindyIntegrations';
import LindyPricing from '@/components/lindy/LindyPricing';
import LindySecurity from '@/components/lindy/LindySecurity';
import LindyFooter from '@/components/lindy/LindyFooter';

export const metadata: Metadata = {
  title: 'Lindy - Text Your AI Assistant',
  description: 'Get answers. Get things done. Your AI assistant that handles scheduling, emails, and tasks via text.',
};

export default function LindyPage() {
  return (
    <main className="min-h-screen bg-white">
      <LindyHero />
      <LindyProblem />
      <LindyFeatures />
      <LindyTestimonials />
      <LindyHowItWorks />
      <LindyIntegrations />
      <LindyPricing />
      <LindySecurity />
      <LindyFooter />
    </main>
  );
}
