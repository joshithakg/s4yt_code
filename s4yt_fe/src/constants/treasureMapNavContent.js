import routeDisableOn from "@root/routes/disableOn";

import playAndGet from "@images/NewMap/play_and_get.png";
import rafflePage from "@images/NewMap/raffle_page.png";
import seePartners from "@images/NewMap/see_partners.png";
import wrapUp from "@images/NewMap/event_wrap_up.png";

export default [
  {
    id: "play_and_get",
    img: { src: playAndGet, alt: "Play and Get Tokens" },
    to: "/learn",
    position: { x: 390, y: -10 },
    connectsTo: ["raffle"],
    disableOn: routeDisableOn["/learn"]
  },
  {
    id: "raffle",
    img: { src: rafflePage, alt: "Raffle" },
    to: "/raffle",
    position: { x: 490, y: 120 },
    connectsTo: ["partners"],
    disableOn: routeDisableOn["/raffle"]
  },
  {
    id: "partners",
    img: { src: seePartners, alt: "Partners" },
    to: "/businesses",
    position: { x: 515, y: 285 },
    connectsTo: ["wrap_up"],
    disableOn: routeDisableOn["/businesses"]
  },
  {
    id: "wrap_up",
    img: { src: wrapUp, alt: "Wrap Up" },
    to: "/results",
    position: { x: 690, y: 70 },
    connectsTo: [],
    disableOn: routeDisableOn["/results"]
  }
];