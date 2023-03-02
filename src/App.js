import "./App.css";
import countriesData from "./countries.json"
import {useState, useEffect} from 'react'
import Nav from "./components/Navigation";
import CountriesList from "./components/CountriesList";
import { Route, Routes } from "react-router-dom";
import CountryDetails from './components/CountryDetails'
import HomePage from "./components/HomePage";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState(null)

  useEffect(()=>{
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then(result=>{
      setCountries(result.data)
    })
  },[])


  return <div className="App">
    <Nav></Nav>
    <Routes>
        <Route path="/" element={<HomePage countries={countries}></HomePage>}></Route>
       <Route path="/:id" element={<HomePage countries={countries}></HomePage>}></Route>
    </Routes>

  </div>;
}
export default App;