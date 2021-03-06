import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import viewTicket from "../../../assets/debuggin-assets/db-view-ticket.png";
import signIn from "../../../assets/debuggin-assets/db-sign-in.png";
import newBug from "../../../assets/debuggin-assets/db-new-bug.png";
import closeTicket from "../../../assets/debuggin-assets/db-close-ticket.png";
import home from "../../../assets/debuggin-assets/db-home.png";

const items = [
  {
    src: home,
    altText: "Debuggin' app screenshot 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: signIn,
    altText: "Debuggin' app screenshot 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: viewTicket,
    altText: "Debuggin' app screenshot 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: newBug,
    altText: "Debuggin' app screenshot 4",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: closeTicket,
    altText: "Debuggin' app screenshot 4",
    caption: "",
    header: "",
    key: "3",
  },
];

const DebugginCarousel = () => (
  <>
    <UncontrolledCarousel className="mb-5" items={items} />
  </>
);

export default DebugginCarousel;
