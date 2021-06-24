import React, {useState}from 'react';
import './GroupNotes.css';
import { Link, Route, useParams } from 'react-router-dom'

function GroupNotes(props) {
  console.log(props)
  return (
    <div className="group-notes-container">
      <h3>Group Notes</h3>
      <Link to='addnotes'>
        <p>Add a Note</p>
      </Link>
      <div className="notes-container">
      {
          props.notes.map(note => (
          <Link to={`notes/${note.id}`} className='notes-link'>
          <div className="group-note" key={note.id}>
              <p>{note.note}</p>
          </div>
          </Link>
        ))
        }
      </div>
    </div>
  );
}

export default GroupNotes;