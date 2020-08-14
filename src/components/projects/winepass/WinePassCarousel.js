import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import winepass1 from "../../../assets/winepass-assets/winepass_1.png";
import winepass2 from "../../../assets/winepass-assets/winepass_2.png";
import winepass3 from "../../../assets/winepass-assets/winepass_3.png";
import winepass4 from "../../../assets/winepass-assets/winepass_4.png";
import winepass5 from "../../../assets/winepass-assets/winepass_5.png";

const items = [
  {
    src: winepass1,
    altText: "Debuggin' app screenshot 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: winepass2,
    altText: "Debuggin' app screenshot 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: winepass3,
    altText: "Debuggin' app screenshot 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: winepass4,
    altText: "Debuggin' app screenshot 4",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: winepass5,
    altText: "Debuggin' app screenshot 4",
    caption: "",
    header: "",
    key: "3",
  },
];

const WinePassCarousel = () => (
  <>
    <UncontrolledCarousel className="mb-5" items={items} />
  </>
);

export default WinePassCarousel;
