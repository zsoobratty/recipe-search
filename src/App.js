import React from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const APP_ID = '0992780d'
  const APP_KEY = '5e5d73059b0a4681aa46832ad940e2e7'
  const baseUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const fetchData = async () => {
    const result = await Axios.get(baseUrl)
    console.log(result)
  }
  return (
    <div className="App">
      <h1 onClick={fetchData}>Recipe Search</h1>
    </div>
  );
}

export default App;
