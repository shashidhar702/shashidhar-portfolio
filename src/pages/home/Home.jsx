import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ContactBanner from "@/components/sections/ContactBanner";
import SectionDotsNav from "@/components/common/SectionDotsNav";

export default function Home() {
  return (
    <div className="relative">

      {/* FULL PAGE GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0 -z-10 bg-white
        bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_60%)]
        bg-[radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.12),_transparent_70%)]"
      />
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-white" /> */}
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)]" /> */}

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