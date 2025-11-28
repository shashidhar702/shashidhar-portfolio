import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Home from "@/pages/home/Home";
import ProjectsPage from "@/pages/projects/ProjectsPage";
import SkillsPage from "@/pages/skills/SkillsPage";
import AboutPage from "@/pages/about/AboutPage";
import Footer from "@/components/common/Footer";


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </>
  );
}