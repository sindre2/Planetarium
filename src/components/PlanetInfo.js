import { useContext, useState, useEffect } from "react";
import { PlanetContext } from "./PlanetContext";
import axios from "axios";

export function PlanetInfo(props) {
  const { planets } = useContext(PlanetContext);
  const planetInfo = planets ? planets.data.bodies[props.index] : "Loading";
  const [wiki, setWiki] = useState();
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
      <h1>{planetInfo.englishName}</h1>
      <p>{wikiText}</p>
      <table>
        <tr>
          Discovered: "
          {planetInfo.discoveryDate ? planetInfo.discoveryDate : "unknown date"}
          " by "{planetInfo.discoveredBy ? planetInfo.discoveredBy : "unknown"}"
        </tr>
        <tr>
          Gravity: {planetInfo.gravity} m/s<sup>2</sup>
        </tr>
        <tr>
          Mass: {planetInfo.mass.massValue} * 10
          <sup>{planetInfo.mass.massExponent}</sup> kg
        </tr>
        <tr>
          Volume: {planetInfo.vol.volValue} * 10
          <sup>{planetInfo.vol.volExponent}</sup> km<sup>3</sup>
        </tr>
        <tr>Escape height: {planetInfo.escape} km</tr>
        <tr>
          Avg. Temperature: {tempDecimal} <sup>o</sup>C
        </tr>
        <tr>Radius: {planetInfo.meanRadius} km</tr>
        <tr>Polar radius: {planetInfo.polarRadius} km</tr>
        <tr>Perihelion: {planetInfo.perihelion} km </tr>
        <tr>Aphelion: {planetInfo.aphelion} km</tr>
      </table>
    </>
  );
}
