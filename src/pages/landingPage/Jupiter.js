import { useContext } from "react";
import { PlanetContext } from "../../components/PlanetContext";

const Jupiter = () => {
  const pageName = "Jupiter";
  const { planets } = useContext(PlanetContext);

  const jupiterInfo = planets ? planets.data.bodies[2] : "Loading";
  console.log(planets);

  return (
    <div>
      <h1>{pageName}</h1>
      <h2>{jupiterInfo.englishName}</h2>
      <ul>
        <li>{jupiterInfo ? jupiterInfo.gravity : "Loading"}</li>
        <li>{jupiterInfo.moons ? jupiterInfo.moons[0].moon : "Loading"}</li>
        <li>{jupiterInfo ? jupiterInfo.bodyType : "Loading"}</li>
      </ul>
    </div>
  );
};

export default Jupiter;
