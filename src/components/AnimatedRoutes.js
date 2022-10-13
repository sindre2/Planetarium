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

const AnimationRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Wrapper className="appWrapper">
        <Routes location={location} key={location.path}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/mercury" element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </Wrapper>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
