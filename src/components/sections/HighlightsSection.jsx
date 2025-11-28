import { Card } from "@/components/ui/card";

export default function HighlightsSection() {
  const highlights = [
    "🎓 MS in Computer Science – Montclair State University (DECEMBER 2024)",
    "💼 5+ years in Full-Stack + SAP BTP Development",
    "🏢 Built & supported enterprise apps used by global business teams",
    "🧩 SAP UI5 / Fiori · CAPM · NodeJS · S/4HANA · SAP BTP · React · NestJs",
    "🌍 F-1 STEM OPT · Based in New Jersey · Open to Relocation",
    "🛠️ Delivered 10+ enterprise-grade applications across multiple teams",
    "🎨 Modern + enterprise UI/UX sense – shadcn/ui, Tailwind, Material UI, Ant Design & SAP Fiori design system",
    "🚀 Passionate about AI, cloud technologies, and modern engineering",
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {highlights.map((item, index) => (
          <Card
            key={index}
            className="p-6 text-center text-slate-700 font-medium shadow-sm hover:shadow-md transition shadow-none border border-slate-200"
          >
            {item}
          </Card>
        ))}
      </div>
    </section>
  );
}