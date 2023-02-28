import React from 'react'
import {NavLink} from "react-router-dom"


export default function CountriesList(props) {


  return (
    <div>
    <div>CountriesList</div>
    <ul>
    { props.countries.map(country=>{
      return (
        <div>
          <NavLink to={`/country/${country.alpha3Code}`}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" /> 
            {country.name.official}
          </NavLink>
        </div>
      );
    }) }
    </ul>
    </div>
  )
}
