import React from 'react'

export default function CountryDetails(props) {
 const {foundCountry} = props
  return (
    <div>
          <h1>{foundCountry.name.official}</h1>
    <table>
      <tr>
        <td>Capital</td>
        <td>{foundCountry.capital}</td>
      </tr>
      <tr>
      <td>Area</td>
      <td>{foundCountry.area} km2</td>
      </tr>
      <tr>
      <td>Borders</td>
      <td><ul>{foundCountry.borders.map(neighbor => <li>{neighbor}</li>)}</ul></td>
      </tr>
    </table>

    </div>
  )
}
