import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "GCRaft KCRS (SAP BTP + CAP + UI5 + S/4HANA)",
      description:
        "An enterprise change request management system built on SAP BTP using CAP services, SAP UI5 frontend, and S/4HANA integrations.",
      tech: "SAP BTP · CAPM · UI5 · S/4HANA",
    },
    {
      title: "Secure Transfers (Angular + NestJS)",
      description:
        "A secure internal file transfer tool for enterprise users with role-based access, encryption, and audit tracking.",
      tech: "Angular · NestJS · NodeJS",
    },
    {
      title: "Cutover Tool (React + postgreSql)",
      description:
        "A real-time go-live and deployment management tool used by teams for tracking cutover activities and issue resolution. Deployed the entire application as a non-SAP workload on SAP BTP Cloud Foundry. ",
      tech: "React · NodeJs · SAPBTP · Cloud Foundry",
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800">Featured Projects</h2>
        <p className="text-slate-500 text-lg mt-2">
          A glimpse of my enterprise-grade development work.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="p-6 border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">{project.description}</p>
            <p className="mt-4 text-sm font-medium text-slate-500">{project.tech}</p>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg">View All Projects</Button>
      </div>
    </section>
  );
}