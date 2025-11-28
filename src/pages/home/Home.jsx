import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ContactBanner from "@/components/sections/ContactBanner";
import SectionDotsNav from "@/components/common/SectionDotsNav";

export default function Home() {
  return (
    <div className="relative">
      {/* Vertical dots navigation */}
      <SectionDotsNav />

      <main className="px-6 md:px-20 space-y-20">
        <section id="home">
          <HeroSection />
        </section>

        <section id="highlights">
          <HighlightsSection />
        </section>

        <section id="skills">
          <WhatIDoSection />
        </section>

        <section id="projects">
          <ProjectsPreview />
        </section>

        <section id="contact">
          <ContactBanner />
        </section>
      </main>
    </div>
  );
}