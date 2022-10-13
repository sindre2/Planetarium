import { useContext, useState, useEffect } from "react";
import { PlanetContext } from "./PlanetContext";
import axios from "axios";
import {
  PlanetContainer,
  PlanetSection,
  PlanetTitle,
} from "../styledComponents/PlanetStyles";
import { TEXT_AND_CONTENT } from "../textAndContent/textAndConent";

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
        <img src={TEXT_AND_CONTENT.PLANET_INFO.IMG[props.index]} />
        <main>{wikiText}</main>
        <PlanetSection className="data">
          <div className="planet_Title">
            <h3>{planetInfo.englishName} data:</h3>
          </div>
          <div className="data_Container">
            <table className="data_Text">
              <tbody>
                <tr>
                  <td>Discovered:</td>
                  <td>
                    "
                    {planetInfo.discoveryDate
                      ? planetInfo.discoveryDate
                      : "unknown date"}
                    " by "
                    {planetInfo.discoveredBy
                      ? planetInfo.discoveredBy
                      : "unknown"}
                    "
                  </td>
                </tr>
                <tr>
                  <td>Gravity:</td>
                  <td>
                    {planetInfo.gravity
                      ? planetInfo.gravity.toFixed(2)
                      : "Loading"}{" "}
                    m/s
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Mass:</td>
                  <td>
                    {planetInfo.mass
                      ? planetInfo.mass.massValue.toFixed(2)
                      : "Loading"}
                    &#215; 10
                    <sup>
                      {planetInfo.mass
                        ? planetInfo.mass.massExponent
                        : "Loading"}
                      kg
                    </sup>
                  </td>
                </tr>
                <tr>
                  <td>Volume:</td>
                  <td>
                    {planetInfo.vol
                      ? planetInfo.vol.volValue.toFixed(2)
                      : "Loading"}{" "}
                    &#215; 10
                    <sup>
                      {planetInfo.vol ? planetInfo.volExponent : "Loading"}
                    </sup>{" "}
                    km
                    <sup>3</sup>
                  </td>
                </tr>
                <tr>
                  <td>Escape height:</td>
                  <td>
                    {planetInfo.escape
                      ? planetInfo.escape.toExponential(2)
                      : "Loading"}{" "}
                    km
                  </td>
                </tr>
                <tr>
                  <td>Avg. Temperature: </td>
                  <td>
                    {tempDecimal} <sup>o</sup>C
                  </td>
                </tr>
                <tr>
                  <td>Radius: </td>
                  <td>
                    {planetInfo.meanRadius ? planetInfo.meanRadius : "Loading"}{" "}
                    km
                  </td>
                </tr>
                <tr>
                  <td>Polar radius:</td>
                  <td>
                    {planetInfo.polarRadius
                      ? planetInfo.polarRadius.toExponential(2)
                      : "Loading"}
                    km
                  </td>
                </tr>
                <tr>
                  <td>Perihelion:</td>
                  <td>
                    {planetInfo.perihelion
                      ? planetInfo.perihelion.toExponential(2)
                      : "Loading"}{" "}
                    km
                  </td>
                </tr>
                <tr>
                  <td>Aphelion:</td>
                  <td>
                    {planetInfo.aphelion
                      ? planetInfo.aphelion.toExponential(2)
                      : "Loading"}{" "}
                    km
                  </td>
                </tr>
                <tr>
                  <td>Moons:</td>
                  <td>
                    {planetInfo.moons ? planetInfo.moons.length : "No moons"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </PlanetSection>
      </PlanetContainer>
    </>
  );
}
