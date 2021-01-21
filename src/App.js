import React, { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import SearchBox from "./components/SearchBox";

import "./index.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState([]);
  const [filteredStats, setFilteredStats] = useState([]);

  const fetchStats = async () => {
    try {
      const resp = await fetch("https://covid-193.p.rapidapi.com/statistics", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e14b48ca7cmsh061cfbc092cf4f0p1931c3jsnd3b42dd85c05",
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
        },
      });
      const data = await resp.json();
      setStats(data.response);
      setFilteredStats(data.response);
      setIsLoading(false);
      console.log(data.response);
    } catch (error) {
      console.log(error);
    }
  };
  const searchCountry = (searchQuery) => {
    const filteredCountries = stats.filter((singleCountry) =>
      singleCountry.country.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStats(filteredCountries);
  };

  useEffect(() => {
    fetchStats();
  }, []);
  if (isLoading) {
    return (
      <section className="section">
        <header className="header">
          <div className="title">
            <h2>Covid19 Stats Web App</h2>
          </div>
          <div className="search-wrap">
            <SearchBox
              className="search-box"
              placeholder="Enter Country Name..."
              handleChange={(e) => searchCountry(e.target.value)}
            />
          </div>
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        </header>
      </section>
    );
  }
  if (filteredStats.length === 0) {
    return (
      <section className="section">
        <header className="header">
          <div className="title">
            <h2>Covid19 Stats Web App</h2>
          </div>
          <div className="search-wrap">
            <SearchBox
              className="search-box"
              placeholder="Enter Country Name..."
              handleChange={(e) => searchCountry(e.target.value)}
            />
          </div>
          <div className="loading">
            <h2>Sorry No Result Found...!!!</h2>
          </div>
        </header>
      </section>
    );
  }

  return (
    <main>
      <section className="section">
        <header className="sticky-wrapper sticky">
          <div className="sticky">
            <div className="all">
              <div className="title">
                <h2>Covid19 Stats Web App</h2>
              </div>
              <div className="search-wrap">
                <SearchBox
                  className="search-box"
                  placeholder="Enter Country Name..."
                  handleChange={(e) => searchCountry(e.target.value)}
                />
              </div>
            </div>
          </div>
        </header>

        <CountryList stats={filteredStats} />
      </section>
    </main>
  );
};

export default App;
