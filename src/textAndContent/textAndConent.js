import earth from "../img/earth";
import jupiter from "../img/jupiter";
import mars from "../img/mars";
import mercury from "../img/mercury";
import neptune from "../img/neptune";
import saturn from "../img/saturn";
import uranus from "../img/uranus";
import venus from "../img/venus";
import sun from "../img/sun";

export const TEXT_AND_CONTENT = {
  PLANET_INFO: {
    IMG: [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, sun],
  },
  NAVIGATION: {
    NAVIGATION_BAR: {
      PLANETARIUM: "Planetarium",
      MERCURY: "Mercury",
      VENUS: "Venus",
      EARTH: "Earth",
      MARS: "Mars",
      JUPITER: "Jupiter",
      URANUS: "Uranus",
      NEPTUNE: "Neptune",
      CONTACT: "Contact",
    },
    NAVIGATION_ROUTES: {
      PLANETARIUM: "/" + TEXT_AND_CONTENT.NAVIGATION.PLANETARIUM,
      MERCURY: "/" + TEXT_AND_CONTENT.NAVIGATION.MERCURY,
      VENUS: "/" + TEXT_AND_CONTENT.NAVIGATION.VENUS,
      EARTH: "/" + TEXT_AND_CONTENT.NAVIGATION.EARTH,
      MARS: "/" + TEXT_AND_CONTENT.NAVIGATION.MARS,
      JUPITER: "/" + TEXT_AND_CONTENT.NAVIGATION.JUPITER,
      URANUS: "/" + TEXT_AND_CONTENT.NAVIGATION.URANUS,
      NEPTUNE: "/" + TEXT_AND_CONTENT.NAVIGATION.NEPTUNE,
      CONTACT: "/" + TEXT_AND_CONTENT.NAVIGATION.CONTACT,
    },
  },
  CONTACT_FORM: {
    INPUT_ONE: "Name",
    INPUT_TWO: "Email",
    INPUT_THREE: "Phone number",
    BTN_TEXT: "Send Message",
  },
};
