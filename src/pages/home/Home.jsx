import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ContactBanner from "@/components/sections/ContactBanner";

export default function Home() {
  return (
    <main className="px-6 md:px-20 space-y-20">
      <HeroSection />
      <HighlightsSection />
      <WhatIDoSection/>
      <ProjectsPreview/>
      <ContactBanner/>
    </main>
  );
}