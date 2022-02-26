import { useState , useEffect } from "react";
import PokemonList from "../Components/PokemonList";
import PokemonDetails from "../Components/PokemonDetails";

const PokedexContainer = () => {

    const [pokemonRequest, setPokemonRequest] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [pokemonSearch, setPokemonSearch] = useState("");

    useEffect(()=>{
        getPokemonRequest();
    }, [])

    const getPokemonRequest = function() {
      fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(request => request.json())
      .then(data => setPokemonRequest(data))
    }

    const getPokemonDetails = function(pokemonUrl){
        fetch(`${pokemonUrl}`)
        .then(request => request.json())
        .then(data => setPokemonDetails(data))
    }

    // const getSearchResults = function(pokemonSearch){
    //     const pokemons = pokemonRequest.results
    //     console.log(pokemonSearch)
    //     const results = pokemons.filter(pokemon => {
    //         return pokemon.name.includes(pokemonSearch)
    //     })
    //     setPokemonSearch(results);
    // }

    return (
        <>
            <h2>The container</h2>
            <PokemonList pokemonResults={pokemonRequest.results} 
            getPokemonDetails={getPokemonDetails} 
            pokemonSearch={pokemonSearch} 
            setPokemonSearch={setPokemonSearch} 
            // getSearchResults={getSearchResults}
            />
            {pokemonDetails ? <PokemonDetails pokemonDetails={pokemonDetails}/> : null }
        </>
        
    )
}

export default PokedexContainer;