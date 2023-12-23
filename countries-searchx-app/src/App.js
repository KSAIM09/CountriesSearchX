import React, { useState, useEffect } from "react";
import './App.css';
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
      <nav
        className="nav"
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "10px", width: "100%", marginBottom: "20px" }}
      >
        <input
          type="text"
          placeholder="Search Country"
          value={search}
          onChange={handleSearchChange}
          style={{
            width: "60%",
            maxWidth: "100%",
            padding: "8px",
            marginTop: "30px",
          }}
        />
      </nav>
      <div
        className="card-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gridGap: "10px",
          width: "80%",
          margin: "0px 40px"
        }}
      >
        {filteredCountries.map((country) => (
          <div
            className="card"
            key={country.cca2}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              
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
