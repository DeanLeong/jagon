import React, {useState, useEffect, useHistory} from 'react';
import { useParams } from 'react-router';
import { getAllCharacters, getOneCharacter } from '../services/characters';

function CharacterDetail({ characters }, props) {
  
  const [char, setChar] = useState([])
  const { id } = useParams()
  const { handleDelete } = props

  console.log(characters)

  useEffect(() => {
    if (characters.length) {
      const getChar = characters.find((character) => character.id === Number(id))
      setChar(getChar)
    }
  }, [id, characters])

  console.log(char)

  const deleteCharacter = (e) => {
    e.preventDefault()
    handleDelete(char?.id)
    props.history.push('/')
  }

  return (
    <div>
      <h1>{char?.name}</h1>
      <img src={char?.imgURL} className="char-img" alt="character portrait"></img>
      <p>{char?.biography}</p>
      <button onClick={deleteCharacter}>Delete {char?.name}</button>
    </div>
  );
}

export default CharacterDetail;

//I may need to make another table - characterNotes and make it belong to character(id) so that people can add their own notes to the character page.