import React from "react";

const App2 = ({ country }) => {
  return (
    <div
      style={{
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        style={{ width: "100px", height: "auto" }}
      />
      <p>{country.name.common}</p>
    </div>
  );
};

export default App2;
