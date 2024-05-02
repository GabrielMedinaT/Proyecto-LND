import React from "react";
import "./SolarSystem.scss";

const SolarSystem = () => {
  const newLocal = "earth";
  return (
    <div className="SolarSystem">
      <div className="solar-syst">
        <div className="sun"></div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="tierra"></div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
        <div className="pluto"></div>
        <div className="asteroids-belt"></div>
      </div>
    </div>
  );
};

export default SolarSystem;
