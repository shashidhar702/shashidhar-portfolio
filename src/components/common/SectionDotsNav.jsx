import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "highlights", label: "Highlights" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SectionDotsNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(section.id);
          }
        },
        {
          root: null,
          threshold: 0.4, // ~40% of section visible
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* LEFT SIDE */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="relative group"
            aria-label={section.label}
          >
            <span
              className={`block w-3 h-3 rounded-full border transition-transform duration-200 ${
                activeId === section.id
                  ? "bg-slate-900 border-slate-900 scale-110"
                  : "bg-slate-300 border-slate-400 hover:scale-110"
              }`}
            />
            {/* Tooltip on left side (appears to the LEFT) */}
            <span className="pointer-events-none absolute left-full ml-3 rounded-md bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
              {section.label}
            </span>
          </button>
        ))}
      </div>
  
      {/* RIGHT SIDE */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="relative group"
            aria-label={section.label}
          >
            <span
              className={`block w-3 h-3 rounded-full border transition-transform duration-200 ${
                activeId === section.id
                  ? "bg-slate-900 border-slate-900 scale-110"
                  : "bg-slate-300 border-slate-400 hover:scale-110"
              }`}
            />
            {/* Tooltip on right side (appears to the RIGHT) */}
            <span className="pointer-events-none absolute right-full mr-3 rounded-md bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}