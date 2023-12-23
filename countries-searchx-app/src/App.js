import React, { useState, useEffect } from "react";
import "./App.css";

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
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "10px", marginTop: "30px" }}
      >
        <input
          type="text"
          placeholder="Search for countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "80%",
            maxWidth: "500px",
            padding: "8px",
          }}
        />
      </nav>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 2fr))",
          gap: "20px",
          padding: "20px",
          margin: "10px 50px",
        }}
      >
        {filteredCountries.map((country) => (
          <div
            key={country.cca2}
            style={{
              textAlign: "center",
              border: "0.5px solid #EEEE",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              style={{ width: "100px", height: "100px" }}
            />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryFlags;
