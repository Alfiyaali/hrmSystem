import React from 'react';

function Revenue() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">Total Revenue</h3>
      <div id="bar-charts" className="relative">
        <svg
          height={342}
          width={312}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ overflow: "hidden", position: "relative", top: "-0.1875px" }}
        >
          <desc>Created with Raphaël 2.2.0</desc>
          <defs />
          <text
            x="32.84765625"
            y={303}
            textAnchor="end"
            fontFamily="sans-serif"
            fontSize="12px"
            stroke="none"
            fill="#888888"
            fontWeight="normal"
          >
            <tspan dy={4}>0</tspan>
          </text>
          {/* Add more text and rect elements for your axes */}
          {/* Add rectangles for your bar chart */}
          <rect
            x="49.66287667410714"
            y={25}
            width="11.44566127232143"
            height={278}
            fill="#ff9b44"
            fillOpacity={1}
          />
          <rect
            x="64.10853794642857"
            y="52.80000000000001"
            width="11.44566127232143"
            height="250.2"
            fill="#fc6075"
            fillOpacity={1}
          />
          {/* Add more rectangles for your bar chart */}
        </svg>
        <div className="morris-hover morris-default-style" style={{ left: "198.609px", top: 131 }}>
  <div className="morris-hover-row-label">2012</div>
  <div className="morris-hover-point" style={{ color: "#ff9b44" }}>Total Income: 100</div>
  <div className="morris-hover-point" style={{ color: "#fc6075" }}>Total Outcome: 90</div>
</div>

      </div>
    </div>
  );
}

export default Revenue;
