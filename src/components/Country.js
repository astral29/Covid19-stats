import React from "react";

const Country = ({ singleCountry }) => {
  var slug = singleCountry.country;
  var res = slug.toLowerCase();
  return (
    <div className="card">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="flag">
        <img
          src={`https://assets.thebasetrip.com/api/v2/countries/flags/${res}.png`}
          alt=""
        />
      </div>
      <div className="content">
        <h2>{singleCountry.cases.new}</h2>
        <h3>{singleCountry.country}</h3>
        <p>{`Active : ${singleCountry.cases.active}`}</p>
        <p>{`Confirmed : ${singleCountry.cases.total}`}</p>
        <p>{`Deaths : ${singleCountry.deaths.total}`}</p>
        <p>{`Recovered : ${singleCountry.cases.recovered}`}</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default Country;
