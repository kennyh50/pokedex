import './Home.css';
import React, { useState } from 'react'
import PokeCard from '../../components/card'

const axios = require('axios')

const HomeScreen = () => {

  const [pokeString, setPokeString] = useState("")

  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    front: "",
    front_shiny: "",
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
          name: response.data.name,
          species: response.data.species,
          front_shiny: response.data.sprites.front_shiny,
          front: response.data.sprites.front_default,
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
      <div className='centerize red-bg'>
        <div >
          <h1 className='centerize'>Beta Pokedex</h1>
          <div className='centerize'>
            <input
              type="text"
              onChange={handleChange}
            />
          </div>
          <h2 className='centerize' >{pokeString}</h2>
          <div className='centerize'>
            <button onClick={pokeSearch}>
              Search for mon
            </button>
          </div>
          <PokeCard pokemon={pokemon} />
        </div>
      </div>


    </>
  )
}

export default HomeScreen