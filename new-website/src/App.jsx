import  Navbar  from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import NewsCard from "./components/NewsCard";
import { useState } from "react";
import CountrySelect from "./components/CountrySelect";

function App() {
  const [category, setCategory] = useState('business');
  const [country, setCountry] = useState('in');
  console.log(country)
  return (
    <>
    <div className="header">
      <Navbar setCategory={setCategory}/>
      <CountrySelect setCountry={setCountry}/>
      </div>
      <NewsCard category={category} country={country}/>
    </>    
  )
}

export default App
