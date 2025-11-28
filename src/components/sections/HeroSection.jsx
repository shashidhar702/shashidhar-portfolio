import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile1.png";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-20">
      {/* LEFT SIDE TEXT */}
      <div className="flex-1 space-y-6">
        {/* <h1 className="text-4xl md:text-6xl font-bold text-slate-900"> */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Hi, I'm <span className="whitespace-nowrap">Shashidhar Reddy</span> Chamakura
          </h1>
          {/* Hi, I'm Shashidhar Reddy Chamakura.
        </h1> */}

        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
          SAP BTP Engineer & Full-Stack Developer.
          I build enterprise-grade apps using React, Node.js,
          SAP UI5/Fiori, CAP & S/4HANA.
        </p>

        <div className="flex items-center gap-4">
          <Button size="lg">View My Work</Button>
          <Button variant="outline" size="lg">
            Download My Resume
          </Button>
        </div>

        <p className="text-slate-500">📍 Plainsboro, New Jersey, USA. --Open to roles</p>
      </div>

      {/* RIGHT SIDE VISUAL */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src={profileImg}
          alt="Shashidhar"
          className="
            w-80 h-80 
            object-cover
            rounded-full 
            shadow-xl 
            border-4 border-white
            hover:scale-105 
            transition-transform 
            duration-300
          "
        />
      </div>
    </section>
  );
}