import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
    { name: "About", to: "/about" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo / Name */}

        <div className="text-2xl font-bold text-slate-900">
          {/* <Link to="/" className="text-2xl font-bold text-slate-900">
          Shashidhar
        </Link> */}

        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-slate-600 hover:text-slate-900 transition font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Resume button can later link to /resume or PDF */}
          <Button className="px-6 py-2">Resume</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="block text-slate-700 text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Button className="w-full">Resume</Button>
        </div>
      )}
    </nav>
  );
}