import React from "react";
import HexagonGrid from "./hexagongrid.js";
import times from "lodash/times";

const HexGrid = () => {
  const getHexProps = (hexagon) => {
    return {
      style: {
        fill: "#007aff",
        stroke: "white"
      },
      onClick: () => alert(`Hexagon n.${hexagon} has been clicked`)
    };
  };

  const renderHexagonContent = (hexagon) => {
    return (
      <text
        x="50%"
        y="50%"
        fontSize={100}
        fontWeight="lighter"
        style={{ fill: "white" }}
        textAnchor="middle"
      >
        {hexagon}
      </text>
    );
  };

  let hexagons = times(10, (id) => id);

  return (
    <HexagonGrid
      gridWidth={400}
      gridHeight={400}
      hexagons={hexagons}
      hexProps={getHexProps}
      renderHexagonContent={renderHexagonContent}
    />
  );
};

export default HexGrid;
