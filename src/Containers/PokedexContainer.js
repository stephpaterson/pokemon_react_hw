import { useState , useEffect } from "react";
import PokemonList from "../Components/PokemonList";
import PokemonDetails from "../Components/PokemonDetails";
import CaughtPokemon from "../Components/CaughtPokemon";
import './PokemonContainer.css'

const PokedexContainer = () => {

    const [pokemonRequest, setPokemonRequest] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [pokemonSearch, setPokemonSearch] = useState("");
    const [caughtPokemon, setCaughtPokemon] = useState([])

    useEffect(()=>{
        getPokemonRequest();
    }, [])

    const getPokemonRequest = function() {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then(request => request.json())
      .then(data => setPokemonRequest(data))
    }

    const getPokemonDetails = function(pokemonUrl){
        fetch(`${pokemonUrl}`)
        .then(request => request.json())
        .then(data => setPokemonDetails(data))
    }

    const addCaughtPokemon = function(pokemon){
        const copyCaughtPokemon = [...caughtPokemon, pokemon]
        setCaughtPokemon(copyCaughtPokemon)
    }

    return (
        <div >
            <h1>Pokedex</h1>
            <div className="container">
                <PokemonList pokemonResults={pokemonRequest.results} 
                getPokemonDetails={getPokemonDetails} 
                pokemonSearch={pokemonSearch} 
                setPokemonSearch={setPokemonSearch} 
                />

                {pokemonDetails ? <PokemonDetails pokemonDetails={pokemonDetails} addCaughtPokemon={addCaughtPokemon}/> : null }
                < CaughtPokemon caughtPokemon={caughtPokemon}/>           
            </div>

        </div>
        
    )
}

export default PokedexContainer;