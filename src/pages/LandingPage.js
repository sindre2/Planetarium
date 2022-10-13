import { useEffect, useState } from "react";
import axios from "axios";
import Background from "../components/Background/BackgroundParticles";
import Navbar from "../components/Navbar/Navbar";
import AnimationRoutes from "../components/AnimatedRoutes";
import { PlanetContext } from "../components/PlanetContext";

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
      <PlanetContext.Provider value={{ planetData, planets }}>
        <Background />
        <Navbar />
        <AnimationRoutes />
      </PlanetContext.Provider>
    </>
  );
};

export default LandingPage;
