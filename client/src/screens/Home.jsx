import React, { useState, useEffect } from 'react'
import { Link, Route, useParams } from 'react-router-dom'

import './Home.css'

function Home(props) {

console.log(props)

  return (
    <div className="home-container">
      <h1 className="site-h1">Jagon</h1>
      <h3>The Squad</h3>
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
      <h3>Important NPCS</h3>
      <div className="npcs">
        {
          props.npcs.map(npc => (
            <div className="npc" key={npc.id}>
              <Link to={`npcs/${npc.id}`} className='npc-link'>
                <img src={npc.imgURL} className="npc-img" alt="npc portrait"></img>
                <p className="npc-name">{npc.name}</p>
              </Link>
              </div>
          ))
        }
      </div>
    </div>
  );
}

export default Home;