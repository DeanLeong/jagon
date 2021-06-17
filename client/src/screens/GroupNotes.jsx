import React from 'react';
import './GroupNotes.css'

function GroupNotes(props) {
  console.log(props)
  return (
    <div className="group-notes-container">
      <h3>Group Notes</h3>
      {
        props.notes.map(note => (
          <div className="group-note" key={note.id}>
            <p>{note.note}</p>
          </div>
        ))
      }
    </div>
  );
}

export default GroupNotes;