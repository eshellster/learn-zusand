import React, { useState } from "react";
import "./planet.css";

interface Props {
  planet: any;
}

export const Planet: React.FC<Props> = ({ planet }) => {
  const diameter = parseInt(planet.diameter) / 300;
  const [surfaceWater, setSurfaceWater] = useState(
    parseInt(planet.surface_water) || 0
  );

  return (
    <div className="wrap">
      <div
        style={{
          borderRadius: "100%",
          backgroundColor: "chocolate",
          border: `solid ${(diameter * surfaceWater) / 200}px skyblue`,
          width: `${diameter - (diameter * surfaceWater) / 100}px`,
          height: `${diameter - (diameter * surfaceWater) / 100}px`,
        }}
      ></div>
      <div>
        <span>{planet.name}</span>
        <label htmlFor="바다">
          <input
            type="text"
            value={surfaceWater}
            style={{ marginLeft: "1rem" }}
            onChange={(e) => setSurfaceWater(parseInt(e.target.value) || 0)}
          />
        </label>
      </div>
    </div>
  );
};
