import React from "react";

import DebugginCarousel from "./debuggin/DebugginCarousel";
import DebugginHeader from "./debuggin/DebugginHeader";
import WinePassCarousel from "./winepass/WinePassCarousel";
import WinePassHeader from "./winepass/WinePassHeader";

const Projects = () => {
  return (
    <div>
      <DebugginHeader />
      <DebugginCarousel />
      <WinePassHeader />
      <WinePassCarousel />
    </div>
  );
};

export default Projects;
