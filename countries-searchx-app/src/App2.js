import React from "react";

const App2 = ({ country }) => {
  return (
    <div
      style={{
        textAlign: "center",
        border:"1px solid #EEE",
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
