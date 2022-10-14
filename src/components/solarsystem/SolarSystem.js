import React from "react";
import { TEXT_AND_CONTENT } from "../../textAndContent/textAndConent";
import "./solarsystem.css";

/* Solar system animation from "https://codepen.io/everdimension/pen/DwREaP" */

function SolarSystem() {
  return (
    <div id="maincontainer">
      <div className="solar-system">
        <div id="sun"></div>

        <div className="orbit mercury-orbit"></div>
        <div className="mercury-spin">
          <img
            id="mercury"
            alt="mercury"
            src={TEXT_AND_CONTENT.PLANET_INFO.IMG[4]}
          />
        </div>

        <div className="orbit venus-orbit"></div>
        <div className="venus-spin">
          <img
            id="venus"
            alt="venus"
            src={TEXT_AND_CONTENT.PLANET_INFO.IMG[7]}
          />
        </div>

        <div className="orbit earth-orbit"></div>
        <div className="earth-spin">
          <div className="orbit moon-orbit"></div>
          <div className="moon-spin">
            <div id="moon"></div>
          </div>

          <img
            id="earth"
            alt="earth"
            src={TEXT_AND_CONTENT.PLANET_INFO.IMG[6]}
          />
        </div>

        <div className="orbit mars-orbit"></div>
        <div className="mars-spin">
          <img id="mars" alt="mars" src={TEXT_AND_CONTENT.PLANET_INFO.IMG[3]} />
        </div>
        <div className="orbit jupiter-orbit"></div>
        <div className="jupiter-spin">
          <img
            id="jupiter"
            alt="jupiter"
            src={TEXT_AND_CONTENT.PLANET_INFO.IMG[2]}
          />
        </div>
        <div className="orbit saturn-orbit"></div>
        <div className="saturn-spin">
          <img
            id="saturn"
            alt="saturn"
            src={TEXT_AND_CONTENT.PLANET_INFO.IMG[5]}
          />
        </div>
        <div className="orbit uranus-orbit"></div>
        <div className="uranus-spin">
          <img
            id="uranus"
            alt="uranus"
            src={TEXT_AND_CONTENT.PLANET_INFO.IMG[0]}
          />
        </div>
        <div className="orbit neptune-orbit"></div>
        <div className="neptune-spin">
          <img
            id="neptune"
            alt="neptune"
            src={TEXT_AND_CONTENT.PLANET_INFO.IMG[1]}
          />
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
