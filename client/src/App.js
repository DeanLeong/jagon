import './App.css';
import { useState, useEffect } from 'react'
import { Route, useParams, useHistory } from 'react-router-dom'

import { destroyCharacter, getAllCharacters, getOneCharacter, postCharacter, putCharacter } from "./services/characters"
import { destroyNpc, getAllNpcs, getOneNpc, postNpc, putNpc } from "./services/npcs"
import { destroyNote, getAllNotes, getOneNote, postNote, putNote } from './services/notes';

import Home from './screens/Home'
import AddCharacter from './screens/AddCharacter'
import CharacterDetail from './screens/CharacterDetail'
import CharacterEdit from './screens/CharacterEdit'
import Landing from './screens/Landing'
import GroupNotes from './screens/GroupNotes'
import AddNotes from './screens/AddNotes';

import Layout from './shared/Layout'

// function forcedUpdate() {
  
//   return () => setValue(value => value + 1)
// }

function App() {

  const history = useHistory()
  const [characters, setCharacters] = useState([])
  const [notes, setNotes] = useState([])
  const [npcs, setNpcs] = useState([])
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

  useEffect(() => {
    const fetchNpcs = async () => {
      const npcData = await getAllNpcs()
      setNpcs(npcData)
    }
    fetchNpcs()
  }, [])
  console.log(npcs)

  useEffect(() => {
    const fetchNotes = async () => {
      const noteData = await getAllNotes()
      setNotes(noteData)
    }
    fetchNotes()
  }, [])
  console.log(notes)

//character CRUD
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

//notes CRUD
  const handleCreateNote = async (noteData) => {
    const newNote = await postNote(noteData)
    setNotes((prevState) => [...prevState, newNote])
    history.push('/groupnotes')
  }

  const handleDeleteNote = async (id) => {
    await destroyNote(id)
  }

  const handleUpdateNote = async (id, noteData) => {
    const updatedNote = await putNote(id, noteData);
    setNotes((prevState) =>
      prevState.map((note) => {
        return note.id === Number(id) ? updatedNote : note
      })
    )
  }

  return (
    <div className="App">
      <Route exact path={'/'}>
        <Landing />
      </Route>
      <Layout>
      <Route exact path ={'/home'}>
        <Home characters={characters} npcs={npcs}/>
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
      <Route exact path={'/groupnotes'}>
          <GroupNotes notes={notes} handleCreateNote={handleCreateNote} handleDeleteNote={handleDeleteNote} handleUpdateNote={handleUpdateNote}/>
      </Route>
      <Route>
        <AddNotes notes={notes} handleCreateNote={handleCreateNote}/>    
      </Route>
    </Layout>
    </div>
  );
}

export default App;
