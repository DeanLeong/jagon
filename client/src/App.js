import './App.css';
import { useState, useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'

import { getAllCharacters, getOneCharacter } from "./services/characters"

import Home from './screens/Home'

function App() {

  const [characters, setCharacters] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterData = await getAllCharacters()
      setCharacters(characterData)
    }
    fetchCharacters()
  }, [])

  

  console.log(characters)

  return (
    <div className="App">
      <Route exact path ={'/'}>
        <Home characters={characters}/>
      </Route>
    </div>
  );
}

export default App;
