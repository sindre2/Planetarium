import Navbar from "../components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/landingPage/Home";
import Mercury from "../pages/landingPage/Mercury";
import Earth from "../pages/landingPage/Earth";
import Mars from "../pages/landingPage/Mars";
import Jupiter from "../pages/landingPage/Jupiter";
import Saturn from "../pages/landingPage/Saturn";
import Uranus from "../pages/landingPage/Uranus";
import Neptune from "../pages/landingPage/Neptune";
import Pluto from "../pages/landingPage/Pluto";
import Venus from "./landingPage/Venus";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
        <Route path="/pluto" element={<Pluto />} />
      </Routes>
    </>
  );
};

export default LandingPage;
