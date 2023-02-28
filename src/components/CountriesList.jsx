import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CountriesList(props) {
  return (
    <div className="contianer">
      <h1>Countries List</h1>

      <ul className='unordered' >
        {props.countries.map((country) => {
          return (
            <div className="list">
              <NavLink className="listItem" to={`/${country.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt=""
                />
                {country.name.official}
              </NavLink>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
