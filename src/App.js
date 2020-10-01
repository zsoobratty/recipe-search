import React from 'react';
import './App.css';

function App() {

  const APP_ID = '0992780d'
  const APP_KEY = '5e5d73059b0a4681aa46832ad940e2e7'
  const baseUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <h1>Recipe Search</h1>
    </div>
  );
}

export default App;
