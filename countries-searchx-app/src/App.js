import React, { useState, useEffect } from "react";
import "./App.css";


const CountryContainer = ({ country }) => (
  <div
    style={{
      textAlign: "center",
      border: "0.5px solid black",
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
            marginTop: "30px"
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
          <CountryContainer key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryFlags;
