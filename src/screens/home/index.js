import './Home.css';

import React, { useState } from 'react'
import PokeCard from '../../components/card'
const axios = require('axios')


const HomeScreen = () => {

  const [pokeString, setPokeString] = useState("")

  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
    moves: [],
  });

  //sets pokeString to input value
  const handleChange = (event) => {
    setPokeString(event.target.value)
  }

  function pokeSearch() {
    //setup axios
    alert('Searching for Pokemon info')
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeString}/`)
      .then((response) => {
        console.log(response)
        setPokemon({
          name: pokeString,
          species: response.data.species,
          image: response.data.sprites.front_shiny,
          //imagae: response.data.sprites.other.dream_world.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
          moves: response.data.moves
        });
      })

    //console.log(pokemon.moves)
  }

  return (
    <>
      <div className='centerize'
        sx={{ maxWidth: "80%" }}
      >
        <div
        >
          <h1>Beta Pokedex</h1>
          <input
            type="text"
            onChange={handleChange}
          />
          <h2>{pokeString}</h2>
          <button onClick={pokeSearch}>
            Search for mon
          </button>
          <PokeCard pokemon={pokemon} />
        </div>
      </div>


    </>
  )
}

export default HomeScreen