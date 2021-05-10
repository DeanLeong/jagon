import './App.css';
import { useState, useEffect } from 'react'
import { Route, useParams, useHistory } from 'react-router-dom'

import { destroyCharacter, getAllCharacters, getOneCharacter, postCharacter } from "./services/characters"

import Home from './screens/Home'
import AddCharacter from './screens/AddCharacter'
import CharacterDetail from './screens/CharacterDetail'

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

  const handleDeleteCharacter = async (id) => {
    await destroyCharacter(id)
     setCharacters((prevState) => prevState.filter((characters) => characters.id !== id))
    // history.push('/home')
  }

  return (
    <div className="App">
      <Route exact path ={'/home'}>
        <Home characters={characters}/>
      </Route>
      <Route exact path={'/addcharacter'}>
        <AddCharacter handleCreate={handleCreate}/>
      </Route>
      <Route exact path={'/characters/:id'}>
        <CharacterDetail handleDeleteCharacter={handleDeleteCharacter} characters={characters}/>
      </Route>
    </div>
  );
}

export default App;
