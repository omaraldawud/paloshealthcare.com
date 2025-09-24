// src/components/UI/Divider.jsx
import React from "react";

export default function Divider({
  width = "50%",
  color = "#007bff",
  thickness = "4px",
  className = "",
  style = {},
}) {
  return (
    <hr
      className={`mx-auto my-4 ${className}`}
      style={{
        width,
        borderTop: `${thickness} solid ${color}`,
        borderRadius: "2px",
        ...style,
      }}
    />
  );
}
