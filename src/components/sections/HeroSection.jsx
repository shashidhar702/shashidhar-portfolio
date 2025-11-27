import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-20">
      {/* LEFT SIDE TEXT */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
          Hi, I'm Shashidhar Reddy Chamakura.
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
          Full-Stack Developer & SAP BTP Engineer.  
          I build enterprise-grade apps using React, Node.js,  
          SAP UI5/Fiori, CAP & S/4HANA.
        </p>

        <div className="flex items-center gap-4">
          <Button size="lg">View My Work</Button>
          <Button variant="outline" size="lg">
            Download Resume
          </Button>
        </div>

        <p className="text-slate-500">📍 New Jersey · Open to roles</p>
      </div>

      {/* RIGHT SIDE VISUAL */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-90 shadow-xl"></div>
      </div>
    </section>
  );
}