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
    if (props.characters.length) {
       prefillForm()
     }
  }, [props.characters.length, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const updateChar = (e) => {
    e.preventDefault();
    props.handleUpdateCharacter(id, {
      ...formData,
    })
  }

  return (
    <div className='char-edit-container'>
      <h1>Update Character</h1>
      <form
        className="char-form"
        onSubmit={updateChar}>
        <div>
          <label className="form-label">Name:
          <input
              className="form-input"
              type="html"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="form-label">Biography:
            <input
              className="form-input"
              type="html"
              name="biography"
              value={formData.biography}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="form-label">Note:
            <input
              className="form-input"
              type="html"
              name="note"
              value={formData.notes}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="form-label">Image URL:
            <input
              className="form-input"
              type="html"
              name="imgURL"
              value={formData.imgURL}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="button" id="save-button">Save Character</button>
        </form>
    </div>
  );
}

export default CharacterEdit;