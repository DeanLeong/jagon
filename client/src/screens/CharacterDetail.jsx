import React, {useState, useEffect} from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { destroyCharacter, getAllCharacters, getOneCharacter } from '../services/characters';

function CharacterDetail({ characters }, props) {
  
  const [char, setChar] = useState([])
  const { id } = useParams()
  const [isDeleted, setIsDeleted] = useState(false)
  const { handleDelete } = props
  const history = useHistory()

  console.log(characters)

  useEffect(() => {
    if (characters.length) {
      const getChar = characters.find((character) => character.id === Number(id))
      setChar(getChar)
    }
  }, [id, characters])

  console.log(char)
  console.log(char.id)
  console.log(props)

  const deleteCharacter = async (e) => {
    const deleted = await destroyCharacter(char?.id)
    history.push('/home')
    this.forceUpdate()
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