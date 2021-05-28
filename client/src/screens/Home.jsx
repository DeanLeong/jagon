import React, { useState, useEffect } from 'react'
import { Link, Route, useParams } from 'react-router-dom'

import './Home.css'

function Home(props) {

console.log(props)

  return (
    <div className="home-container">
      <h1 className="site-h1">Jagon</h1>
      <div className="char-container">
      {
        props.characters.map(character => (
          <div className="char" key={character.id}>
            <Link to={`characters/${character.id}`} className='char-link'>
            <img src={character.imgURL} className="char-img" alt="character portrait"></img>
            <p className="char-name">{character.name}</p>
            </Link>
          </div>
        ))
        }
      </div>
      <Link to={'/addcharacter'}><button>Add a Character</button></Link>
      <hr></hr>
      <div className="npcs">
        {

        }
      </div>
    </div>
  );
}

export default Home;