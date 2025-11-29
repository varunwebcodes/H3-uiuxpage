import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import HomeHero1 from "./assets/homehero1.png";
import HomeHero2 from "./assets/homehero2.png";
import HomeHero3 from "./assets/homehero3.png";



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <IntroSection />

      {/* Projects */}
     <div className="container mx-auto px-4">
      <ProjectCard
        image={HomeHero1}
        title="Adalo Brand Refresh"
        description="Brand refresh and website redesign"
        tags={["Webflow development", "Graphic design", "UI/UX design"]}
      />
      <ProjectCard
        image={HomeHero2}
        title="FairwayiQ Redesign"
        description="Website redesign and migration"
        tags={["Webflow development", "Graphic design"]}
      />
      <ProjectCard
        image={HomeHero3}
        title="Finsweet Church Template"
        description="Website redesign and migration"
        tags={["Webflow development"]}
      />
    </div>

      {/* Services + About + CTA */}
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
