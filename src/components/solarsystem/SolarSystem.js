import React from "react";
import "./solarsystem.css";
function SolarSystem() {
  return (
    <div id="maincontainer">
      <div className="solar-system">
        <div id="sun"></div>

        <div className="orbit mercury-orbit"></div>
        <div className="mercury-spin">
          <div id="mercury"></div>
        </div>

        <div className="orbit venus-orbit"></div>
        <div className="venus-spin">
          <div id="venus"></div>
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
            src="https://raw.githubusercontent.com/everdimension-personal/codepen-assets/master/earth_small_150.jpg"
          />
        </div>

        <div className="orbit mars-orbit"></div>
        <div className="mars-spin">
          <div id="mars"></div>
        </div>
        <div className="orbit jupiter-orbit"></div>
        <div className="jupiter-spin">
          <div id="jupiter"></div>
        </div>
        <div className="orbit saturn-orbit"></div>
        <div className="saturn-spin">
          <div id="saturn"></div>
        </div>
        <div className="orbit uranus-orbit"></div>
        <div className="uranus-spin">
          <div id="uranus"></div>
        </div>
        <div className="orbit neptune-orbit"></div>
        <div className="neptune-spin">
          <div id="neptune"></div>
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
