import React, { useState, useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      <div
        className="card-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gridGap: "10px",
          width: "100%",
        }}
      >
        {filteredCountries.map((country) => (
          <div
            className="card"
            key={country.alpha3Code}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              boxShadow: "2px 2px 6px #ccc",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <img
              src={country.flags.svg}
              alt={country.name.common}
              style={{ width: "100px", height: "75px" }}
            />
            <h3>{country.name.common}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
