import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Side */}
        <div className="text-sm text-slate-500 text-center md:text-left leading-relaxed">
          <p>© {new Date().getFullYear()} Shashidhar Reddy Chamakura. All rights reserved.</p>
          <p className="mt-1">
            Built with React, Vite, Tailwind CSS &amp; shadcn/ui.
          </p>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex items-center gap-5">
          {/* Email */}
          <a
            href="mailto:shashidhar702@gmail.com"
            className="text-slate-500 hover:text-slate-900 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/shashidhar702"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shashidhar-reddy-chamakura-450883194/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}