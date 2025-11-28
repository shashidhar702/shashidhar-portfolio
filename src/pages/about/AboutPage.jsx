export default function AboutPage() {
    return (
      <main className="px-6 md:px-20 py-16 space-y-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          About Me
        </h1>
        <p className="text-slate-600 mb-4">
          I’m Shashidhar, a Full-Stack Developer & SAP BTP Engineer based in New Jersey.
        </p>
        <p className="text-slate-600">
          {/* Later we’ll write a proper story here */}
          Here we’ll add your journey: India → SAP projects → MS in CS in the US → SAP BTP + PERN.
        </p>
      </main>
    );
  }