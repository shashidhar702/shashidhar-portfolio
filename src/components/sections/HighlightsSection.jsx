import { Card } from "@/components/ui/card";

export default function HighlightsSection() {
  const highlights = [
    "🎓 MS in Computer Science – Montclair State (2024)",
    "💼 5+ years in Full-Stack + SAP BTP Development",
    "🧩 SAP UI5 / Fiori · CAP · React · Node · S/4HANA",
    "🌍 F-1 STEM OPT · Open to Relocation",
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