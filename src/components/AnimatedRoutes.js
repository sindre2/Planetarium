import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Wrapper } from "../styledComponents/wrapper";
import HomePage from "../pages/landingPage/Home";
import Mercury from "../pages/landingPage/Mercury";
import Earth from "../pages/landingPage/Earth";
import Mars from "../pages/landingPage/Mars";
import Jupiter from "../pages/landingPage/Jupiter";
import Saturn from "../pages/landingPage/Saturn";
import Uranus from "../pages/landingPage/Uranus";
import Neptune from "../pages/landingPage/Neptune";
import Venus from "../pages/landingPage/Venus";
import Contact from "../pages/landingPage/Contact";
import RouteNotFound from "../pages/landingPage/404";
import { TEXT_AND_CONTENT } from "../textAndContent/textAndConent";

const AnimationRoutes = () => {
  const navBar = TEXT_AND_CONTENT.NAVIGATION.NAVIGATION_BAR;
  const location = useLocation();
  return (
    <AnimatePresence>
      <Wrapper className="appWrapper">
        <Routes location={location} key={location.path}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path={"/" + navBar.MERCURY.toLowerCase()}
            element={<Mercury />}
          />
          <Route path={"/" + navBar.VENUS.toLowerCase()} element={<Venus />} />
          <Route path={"/" + navBar.EARTH.toLowerCase()} element={<Earth />} />
          <Route path={"/" + navBar.MARS.toLowerCase()} element={<Mars />} />
          <Route
            path={"/" + navBar.JUPITER.toLowerCase()}
            element={<Jupiter />}
          />
          <Route
            path={"/" + navBar.SATURN.toLowerCase()}
            element={<Saturn />}
          />
          <Route
            path={"/" + navBar.URANUS.toLowerCase()}
            element={<Uranus />}
          />
          <Route
            path={"/" + navBar.NEPTUNE.toLowerCase()}
            element={<Neptune />}
          />
          <Route
            path={"/" + navBar.CONTACT.toLowerCase()}
            element={<Contact />}
          />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </Wrapper>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
