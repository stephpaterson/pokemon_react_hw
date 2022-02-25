import { useState , useEffect } from "react";
import PokemonList from "../Components/PokemonList";

const PokedexContainer = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(()=>{
        getPokemon()
    }, [])

    const getPokemon = function() {
      fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(request => request.json())
      .then(data => setPokemon(data))
    }

    return (
        <>
            <h2>The container</h2>
            <PokemonList pokemonResults={pokemon.results}/>
        </>
        
    )
}

export default PokedexContainer;