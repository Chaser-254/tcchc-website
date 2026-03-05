import { HeroSection } from '../components/home/HeroSection';
import { MissionSection } from '../components/home/MissionSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { EventsTicker } from '../components/home/EventsTicker';
import { ProgramHighlights } from '../components/home/ProgramHighlights';
import { CTASection } from '../components/home/CTASection';
export function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <EventsTicker />
      <ProgramHighlights />
      <CTASection />
    </>);

}