import React, { useState, useEffect } from 'react';
import { Route, useParams, useHistory } from 'react-router-dom';
import './AddCharacter.css';

function AddCharacter({open, handleCreate}) {
  const [formData, setFormData] = useState({
    name: '',
    biography: '',
    //playerCharacter: '',
    note: '',
    imgURL: '',
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const saveChar = (e) => {
    e.preventDefault()
    handleCreate({
      ...formData
    })
    setSaved(saved)
  }

  return (
    <div>
      <h1>Add Character Screen</h1>
      <form
        className="char-form"
        onSubmit={saveChar}>
        <div>
          <label className="form-label" id="name-input">Name:
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
        {/* <p>Is this a player character?</p>
        <div>
          <label className="form-label">
            <input
              className="form-input"
              type="radio"
              name="player-character-yes"
              value="true"
              />Yes
          </label>
        </div>
        <div>
          <label className="form-label">
            <input
              className="form-input"
              type="radio"
              name="player-character-no"
              value="false"
              />No
          </label>
        </div> */}
        <button className="button" id="save-button">Save Character</button>
        </form>
    </div>
  );
}

export default AddCharacter;