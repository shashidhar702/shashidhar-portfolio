import { Card } from "@/components/ui/card";

export default function WhatIDoSection() {
  const skills = [
    {
      title: "Full-Stack Development",
      description: "React, Node.js, PostgreSQL, Express, Firebase",
      icon: "🧑‍💻",
    },
    {
      title: "SAP BTP Engineering",
      description: "CAP, SAP UI5/Fiori, S/4HANA Extensions, Integrations",
      icon: "🧩",
    },
    {
      title: "Cloud & Automations",
      description: "APIs, Workflows, Enterprise Tools, Deployment Pipelines",
      icon: "☁️",
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800">
          What I Do
        </h2>
        <p className="text-slate-500 text-lg mt-2">
          I design and build modern full-stack solutions and SAP BTP extensions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="p-8 text-center shadow-sm hover:shadow-md transition border border-slate-200"
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-slate-800">{skill.title}</h3>
            <p className="mt-2 text-slate-600">{skill.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}