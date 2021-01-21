import React from "react";
import Country from "./Country";

const CountryList = ({ stats }) => {
  return (
    <div className="container">
      {stats.map((singleCountry, index) => {
        return <Country key={index} singleCountry={singleCountry} />;
      })}
    </div>
  );
};

export default CountryList;
