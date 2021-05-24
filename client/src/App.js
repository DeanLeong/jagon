import './App.css';
import { useState, useEffect } from 'react'
import { Route, useParams, useHistory } from 'react-router-dom'

import { destroyCharacter, getAllCharacters, getOneCharacter, postCharacter, putCharacter } from "./services/characters"

import Home from './screens/Home'
import AddCharacter from './screens/AddCharacter'
import CharacterDetail from './screens/CharacterDetail'
import CharacterEdit from './screens/CharacterEdit'

// function forcedUpdate() {
  
//   return () => setValue(value => value + 1)
// }

function App() {

  const history = useHistory()
  const [characters, setCharacters] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
  const { id } = useParams()
  const [value, setValue] = useState(0)

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
    history.push('/home')
  }

  const handleDeleteCharacter = async (id) => {
    await destroyCharacter(id)
  }

  const handleUpdateCharacter = async (id, characterData) => {
    const updatedCharacter = await putCharacter(id, characterData);
    setCharacters((prevState) =>
      prevState.map((character) => {
        return character.id === Number(id) ? updatedCharacter : character
      })
    )
    history.push("/home")
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
      <Route exact path={'/characters/:id/edit'}>
        <CharacterEdit characters={characters} handleUpdateCharacter={handleUpdateCharacter}/>
      </Route>
    </div>
  );
}

export default App;
