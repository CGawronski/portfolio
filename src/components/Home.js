import React from "react";

import Hero from "./Hero";
import Projects from "./projects/Projects";
import SectionHeader from "./SectionHeader";

const Home = () => {
  return (
    <div>
      <Hero />
      <SectionHeader title="PROJECTS" id="projects" />
      <Projects />
    </div>
  );
};

export default Home;
