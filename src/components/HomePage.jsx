import CountriesList from './CountriesList'
import {useState} from 'react'
import { useParams } from 'react-router-dom'
import CountryDetails from './CountryDetails'
import { Container } from 'react-bootstrap';


export default function HomePage(props) {
  
  
    const { id } = useParams();
    const foundCountry = props.countries.find((oneCountry) => {
   return oneCountry.alpha3Code === id;
   
});

   return (
    <Container>
    <div className='mainContainer'>
    <div className='list'>
    <CountriesList countries={props.countries} />

    </div>
    <div className='details'>
    
    {foundCountry && <CountryDetails foundCountry={foundCountry} />}

    </div>
    
    </div>
    </Container>
  )
}
