import React, {useState} from 'react';
import './App.css';
import Axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import Recipe from './components/Recipe'
import Alert from './components/Alert'

function App() {
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])
  const [alert, setAlert] = useState('')

  const APP_ID = '0992780d'
  const APP_KEY = '5e5d73059b0a4681aa46832ad940e2e7'
  const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const fetchData = async () => {
    if(query !== '') {
      const result = await Axios.get(baseUrl)
      setRecipes(result.data.hits)
      console.log(result)
      setQuery('')
    } else {
      setAlert('Please fill in the field')
    }

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
        {alert !== "" && <Alert alert={alert}/>}
          <input type="text" placeholder="Search for some food" autoComplete="off" onChange={queryChange} value={query}/>
          <input type="submit" value="Search"/>
      </form>
      <div className="recipes">
        {recipes !== [] && recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} /> )}
      </div>
    </div>
  );
}

export default App;
