import './App.css';
import { useState, useEffect } from 'react'
import { Route, useParams, useHistory } from 'react-router-dom'

import { getAllCharacters, getOneCharacter, postCharacter } from "./services/characters"

import Home from './screens/Home'
import AddCharacter from './screens/AddCharacter'

function App() {

  const history = useHistory()
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


  const handleCreate = async (characterData) => {
    const newChar = await postCharacter(characterData)
    setCharacters((prevState) => [...prevState, newChar])
    history.push('/')
  }

  return (
    <div className="App">
      <Route exact path ={'/'}>
        <Home characters={characters}/>
      </Route>
      <Route exact path={'/addcharacter'}>
        <AddCharacter handleCreate={handleCreate}/>
      </Route>
    </div>
  );
}

export default App;
