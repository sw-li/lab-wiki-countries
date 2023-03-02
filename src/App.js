import "./App.css";
import countriesData from "./countries.json"
import {useState} from 'react'
import Nav from "./components/Navigation";
import CountriesList from "./components/CountriesList";
import { Route, Routes } from "react-router-dom";
import CountryDetails from './components/CountryDetails'
import HomePage from "./components/HomePage";

function App() {
  const [countries, setCountries] = useState(countriesData)


  return <div>
    <Nav></Nav>
    <Routes>
        <Route path="/" element={<HomePage countries={countries}></HomePage>}></Route>
       <Route path="/:id" element={<HomePage countries={countries}></HomePage>}></Route>
    </Routes>

  </div>;
}
export default App;