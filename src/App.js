import React, {useState} from 'react';
import './App.css';
import Axios from 'axios'

function App() {
  const [query, setQuery] = useState('')

  const APP_ID = '0992780d'
  const APP_KEY = '5e5d73059b0a4681aa46832ad940e2e7'
  const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const fetchData = async () => {
    const result = await Axios.get(baseUrl)
    console.log(result)
  }

  const handleCall = (e) => {
    e.preventDefault()
    fetchData()
  }

  const queryChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <h1>Recipe Search</h1>
      <form className="search-form" onSubmit={handleCall}>
          <input type="text" placeholder="Search for some food" autoComplete="off" onChange={queryChange}/>
          <input type="submit" value="Search"/>
      </form>
    </div>
  );
}

export default App;
