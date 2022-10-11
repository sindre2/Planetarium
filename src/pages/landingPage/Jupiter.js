import { useContext } from "react";
import { PlanetContext } from "../../components/PlanetContext";
import { PlanetInfo } from "../../components/PlanetInfo";

const Jupiter = () => {
  const pageName = "Jupiter";
  const { planets } = useContext(PlanetContext);

  const jupiterInfo = planets ? planets.data.bodies[2] : "Loading";

  return (
    <div>
      <h1>{pageName}</h1>
      <h2>{jupiterInfo.englishName}</h2>
      <ul>
        <li>{jupiterInfo ? jupiterInfo.gravity : "Loading"}</li>
        <li>{jupiterInfo.moons ? jupiterInfo.moons[0].moon : "Loading"}</li>
        <li>{jupiterInfo ? jupiterInfo.bodyType : "Loading"}</li>
      </ul>
      <PlanetInfo index={2} name={"Jupiter"}/>
    </div>
  );
};

export default Jupiter;
