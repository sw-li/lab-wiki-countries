import React from 'react'

export default function CountryDetails(props) {
 const {foundCountry} = props
 console.log(props)

 
  return (
    <div>
    
          <h1>{foundCountry.name.official}</h1>
    <table>
      <tr>
        <td className='heading'>Capital</td>
        <td>{foundCountry.capital}</td>
      </tr>
      <tr>
      <td className='heading'>Area</td>
      <td>{foundCountry.area} km<sup>2</sup></td>
      </tr>
      <tr>
      <td className='heading'>Borders</td>
      <td><ul>{foundCountry.borders.map(neighbor => <li>{neighbor}</li>)}</ul></td>
      </tr>
    </table>

    </div>
  )
}
