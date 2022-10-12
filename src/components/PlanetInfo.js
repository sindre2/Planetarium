import { useContext, useState, useEffect } from "react";
import { PlanetContext } from "./PlanetContext";
import axios from "axios";
import {
  PlanetContainer,
  PlanetSection,
  PlanetTitle,
} from "../styledComponents/PlanetStyles";

export function PlanetInfo(props) {
  const { planets } = useContext(PlanetContext);
  const [wiki, setWiki] = useState();
  const planetInfo = planets ? planets.data.bodies[props.index] : "Loading";
  const wikiText = wiki ? wiki.data.extract : "Loading";
  const tempCelcius = planetInfo.avgTemp - 273.15;
  const tempDecimal = Math.round(tempCelcius);

  const getWiki = () => {
    axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${props.name}`)
      .then((res) => setWiki(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => getWiki(), []);

  return (
    <>
      <PlanetContainer>
        <PlanetTitle>{planetInfo.englishName}</PlanetTitle>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons.jpg/320px-Jupiter_New_Horizons.jpg" />
        <main>{wikiText}</main>
        <PlanetSection>
          <div>
            <h3>{planetInfo.englishName} data:</h3>
          </div>
          <div>
            Discovered: "
            {planetInfo.discoveryDate ? planetInfo.discoveryDate: "unknown date"}
            " by "
            {planetInfo.discoveredBy ? planetInfo.discoveredBy : "unknown"}"
          </div>
          <div>
            Gravity:{" "}
            {planetInfo.gravity ? planetInfo.gravity.toFixed(2) : "Loading"} m/s
            <sup>2</sup>
          </div>
          <div>
            Mass:{" "}
            {planetInfo.mass ? planetInfo.mass.massValue.toFixed(2) : "Loading"}{" "}
            &#215; 10
            <sup>
              {planetInfo.mass ? planetInfo.mass.massExponent : "Loading"}
            </sup>{" "}
            kg
          </div>
          <div>
            Volume:{" "}
            {planetInfo.vol ? planetInfo.vol.volValue.toFixed(2) : "Loading"}{" "}
            &#215; 10
            <sup>{planetInfo.vol ? planetInfo.volExponent : "Loading"}</sup> km
            <sup>3</sup>
          </div>
          <div>
            Escape height:{" "}
            {planetInfo.escape ? planetInfo.escape.toExponential(2) : "Loading"}{" "}
            km
          </div>
          <div>
            Avg. Temperature: {tempDecimal} <sup>o</sup>C
          </div>
          <div>
            Radius: {planetInfo.meanRadius ? planetInfo.meanRadius : "Loading"}{" "}
            km
          </div>
          <div>
            Polar radius:{" "}
            {planetInfo.polarRadius
              ? planetInfo.polarRadius.toExponential(2)
              : "Loading"}{" "}
            km
          </div>
          <div>
            Perihelion:{" "}
            {planetInfo.perihelion
              ? planetInfo.perihelion.toExponential(2)
              : "Loading"}{" "}
            km{" "}
          </div>
          <div>
            Aphelion:{" "}
            {planetInfo.aphelion
              ? planetInfo.aphelion.toExponential(2)
              : "Loading"}{" "}
            km
          </div>
          <div>
            Moons: {planetInfo.moons ? planetInfo.moons.length : "No moons"}
          </div>
        </PlanetSection>
      </PlanetContainer>
    </>
  );
}
