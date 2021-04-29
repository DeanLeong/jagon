import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { getOneCharacter } from '../services/characters';

function Character(props) {
  const [char, setChar] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchChar = async () => {
      const charData = await getOneCharacter(id)
      setChar(charData)
    }
    fetchChar()
  }, [id])


  return (
    <div>
      <h1>{char?.name}</h1>
      <img src={char.imgURL} className="char-img" alt="character portrait"></img>
      <p>{char?.biography}</p>
    </div>
  );
}

export default Character;