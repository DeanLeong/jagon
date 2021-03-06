import React, {useState, useEffect, useReducer} from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { destroyCharacter, getAllCharacters, getOneCharacter } from '../services/characters';
import './CharacterDetail.css'

function CharacterDetail({ characters }, props) {
  
  const [char, setChar] = useState([])
  const { id } = useParams()
  const [isLoaded, setLoaded] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const { handleDelete } = props
  const history = useHistory()
  const [value, setValue] = useReducer(x => x + 1, 0)

  console.log(characters)

  useEffect(() => {
    if (characters.length) {
      const getChar = characters.find((character) => character.id === Number(id))
      setChar(getChar)
      setLoaded(true)
    }
  }, [id, characters])

  console.log(char)
  console.log(char.id)
  console.log(props)

  const deleteCharacter = async (e) => {
    await destroyCharacter(char?.id)
    history.push("/home")
    sendRefresh()
  }

  const sendRefresh = () => {
    window.location.href="/home"
  }

  if (!isLoaded) {
   return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>{char?.name}</h1>
      <img src={char?.imgURL} className="char-img" alt="character portrait"></img>
      <p>{char?.biography}</p>
      <div className="character-notes">
        <h4>Character Notes:</h4>
        <p>{char?.note}</p>
      </div>
      <div className="character-detail-buttons">
        <button onClick={deleteCharacter} id="delete-char">Delete {char?.name}</button>
        <Link className="edit-link" to={`/characters/${char?.id}/edit`} id="update-char"><button>Update {char?.name}</button></Link>
      </div>
      

    </div>
  );
}

export default CharacterDetail;

//I may need to make another table - characterNotes and make it belong to character(id) so that people can add their own notes to the character page.