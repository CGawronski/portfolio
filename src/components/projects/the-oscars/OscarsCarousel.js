import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import oscars1 from "../../../assets/the-oscars-assets/oscars_1.png";
import oscars2 from "../../../assets/the-oscars-assets/oscars_2.png";
import oscars3 from "../../../assets/the-oscars-assets/oscars_3.png";
import oscars4 from "../../../assets/the-oscars-assets/oscars_4.png";

const items = [
  {
    src: oscars1,
    altText: "Debuggin' app screenshot 1",
    key: "1",
    caption: "",
    header: "",
  },
  {
    src: oscars2,
    altText: "Debuggin' app screenshot 2",
    key: "2",
  },
  {
    src: oscars3,
    altText: "Debuggin' app screenshot 3",
    key: "3",
  },
  {
    src: oscars4,
    altText: "Debuggin' app screenshot 4",
    key: "4",
  },
];

const OscarsCarousel = () => (
  <>
    <UncontrolledCarousel className="mb-5" items={items} />
  </>
);

export default OscarsCarousel;
