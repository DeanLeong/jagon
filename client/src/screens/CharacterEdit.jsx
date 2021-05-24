import React, { useEffect, useState, } from 'react';
import './CharacterEdit.css';
import { getOneCharacter } from '../services/characters'
import { Route, useParams, useHistory } from 'react-router-dom'

function CharacterEdit(props) {
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: '',
    biography: '',
    note: '',
    imgURL: '',
  })

  console.log(props)

  useEffect(() => {
    const prefillForm = async () => {
      const char = await getOneCharacter(id)
      setFormData({
        name: char?.name,
        biography: char?.biography,
        note: char?.note,
        imgURL: char?.imgURL
      })
    }
    if (props.char.length) {
       prefillForm()
     }
  }, [props.char.length, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const updateChar = (e) => {
    e.preventDefault();
    props.handleUpdate(id, {
      ...formData,
    })
  }

  return (
    <div className='char-edit-container'>
      <h1>Update Character</h1>
    </div>
  );
}

export default CharacterEdit;