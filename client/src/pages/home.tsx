import StarBackground from '@/components/star-background';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsConstellation from '@/components/skills-constellation';
import ProjectsCarousel from '@/components/projects-carousel';
import ContactFooter from '@/components/contact-footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      
      <main className="relative z-10">
        <HeroSection />
        
        {/* Section Divider */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-stellar-blue/50 to-transparent"></div>
        
        <AboutSection />
        
        {/* Section Divider */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-stellar-purple/50 to-transparent"></div>
        
        <SkillsConstellation />
        
        {/* Section Divider */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-stellar-cyan/50 to-transparent"></div>
        
        <ProjectsCarousel />
        
        {/* Section Divider */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-stellar-blue/50 to-transparent"></div>
        
        <ContactFooter />
      </main>
    </div>
  );
}
