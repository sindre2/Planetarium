import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import { PlanetContext } from "../components/PlanetContext";
import axios from "axios";
import Contact from "./landingPage/Contact";
import Background from "../components/Background/BackgroundParticles";
import RouteNotFound from "./landingPage/404";


const LandingPage = () => {
  const [planets, setPlanets] = useState();
  const planetData = () => {
    axios
      .get(
        "https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true"
      )
      .then((res) => setPlanets(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => planetData(), []);

  return (
    <>
      <Background />
      <Navbar />
      <PlanetContext.Provider value={{ planetData, planets }}>
        <Routes>
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
          <Route path="/pluto" element={<Pluto />} />
          <Route path="/pluto" element={<Pluto />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </PlanetContext.Provider>
    </>
  );
};

export default LandingPage;
