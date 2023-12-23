import React, { useState, useEffect } from "react";
import App2 from "./App2";
import './App.css'

const CountryFlags = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries data");
        }

        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <nav
      className="nav"
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "10px" }}
      >
        <input
          type="text"
          placeholder="Search for a country"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "80%",
            maxWidth: "500px",
            padding: "8px",
            borderRadius: "5px",
          }}
        />
      </nav>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filteredCountries.map((country) => (
          <App2 key={country.cca2} country={country} />
        ))}
      </div>

      {filteredCountries.length === 0}
    </div>
  );
};

export default CountryFlags;
