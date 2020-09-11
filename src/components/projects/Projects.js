import React from "react";

import DebugginHeader from "./debuggin/DebugginHeader";
import DebugginCarousel from "./debuggin/DebugginCarousel";

import WinePassHeader from "./winepass/WinePassHeader";
import WinePassCarousel from "./winepass/WinePassCarousel";

import OscarsHeader from "./the-oscars/OscarsHeader";
import OscarsCarousel from "./the-oscars/OscarsCarousel";

const Projects = () => {
  return (
    <div>
      <DebugginHeader />
      <DebugginCarousel />
      <OscarsHeader />
      <OscarsCarousel />
      <WinePassHeader />
      <WinePassCarousel />
    </div>
  );
};

export default Projects;
