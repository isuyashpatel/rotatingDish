import React from "react";

function circle({ fill }) {
  return (
    <svg
      width="562"
      height="281"
      viewBox="0 0 562 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="281"
        cy="281"
        r="280"
        stroke={fill}
        stroke-width="2"
        stroke-dasharray="10 20"
      />
    </svg>
  );
}

export default circle;
