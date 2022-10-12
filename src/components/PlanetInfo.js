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
        <PlanetTitle className="planet_Title">
          {planetInfo.englishName}
        </PlanetTitle>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons.jpg/320px-Jupiter_New_Horizons.jpg" />
        <main>{wikiText}</main>
        <PlanetSection className="data">
          <div className="planet_Title">
            <h3>{planetInfo.englishName} data:</h3>
          </div>
          <div className="data_Container">
            <ul className="data_Text">
              <li>Discovered: </li>
              <li>Gravity:</li>
              <li>Mass:</li>
              <li>Volume:</li>
              <li>Escape height:</li>
              <li>Avg. Temperature: </li>
              <li>Radius: </li>
              <li>Polar radius:</li>
              <li>Perihelion:</li>
              <li>Aphelion:</li>
              <li>Moons: </li>
            </ul>
            <ul className="data_Number">
              <li>
                "
                {planetInfo.discoveryDate
                  ? planetInfo.discoveryDate
                  : "unknown date"}
                " by "
                {planetInfo.discoveredBy ? planetInfo.discoveredBy : "unknown"}"
              </li>
              <li>
                {planetInfo.gravity ? planetInfo.gravity.toFixed(2) : "Loading"}{" "}
                m/s
                <sup>2</sup>
              </li>
              <li>
                {planetInfo.mass
                  ? planetInfo.mass.massValue.toFixed(2)
                  : "Loading"}
                &#215; 10
                <sup>
                  {planetInfo.mass ? planetInfo.mass.massExponent : "Loading"}
                  kg
                </sup>
              </li>
              <li>
                {planetInfo.vol
                  ? planetInfo.vol.volValue.toFixed(2)
                  : "Loading"}{" "}
                &#215; 10
                <sup>
                  {planetInfo.vol ? planetInfo.volExponent : "Loading"}
                </sup>{" "}
                km
                <sup>3</sup>
              </li>
              <li>
                {planetInfo.escape
                  ? planetInfo.escape.toExponential(2)
                  : "Loading"}{" "}
                km
              </li>
              <li>
                {tempDecimal} <sup>o</sup>C
              </li>
              <li>
                {planetInfo.meanRadius ? planetInfo.meanRadius : "Loading"} km
              </li>
              <li>
                {planetInfo.polarRadius
                  ? planetInfo.polarRadius.toExponential(2)
                  : "Loading"}
                km
              </li>
              <li>
                {planetInfo.perihelion
                  ? planetInfo.perihelion.toExponential(2)
                  : "Loading"}{" "}
                km
              </li>
              <li>
                {planetInfo.aphelion
                  ? planetInfo.aphelion.toExponential(2)
                  : "Loading"}{" "}
                km
              </li>
              <li>{planetInfo.moons ? planetInfo.moons.length : "No moons"}</li>
            </ul>
          </div>
        </PlanetSection>
      </PlanetContainer>
    </>
  );
}
