import "./App.css";
import countriesData from "./countries.json"
import {useState} from 'react'
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";

function App() {
  const [countries, setCountries] = useState(countriesData)


  return <div className="App">
    <Navbar></Navbar>
    <CountriesList countries={countries}></CountriesList>
  </div>;
}
export default App;