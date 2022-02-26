import { useState , useEffect } from "react";
import PokemonList from "../Components/PokemonList";
import PokemonDetails from "../Components/PokemonDetails";

const PokedexContainer = () => {

    const [pokemonRequest, setPokemonRequest] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [pokemonName, setPokemonName] = useState("");
    const [searchResults, setSearchResults] = useState(null)

    useEffect(()=>{
        getPokemonRequest();
    }, [])

    // useEffect(()=>{
    //      setSearchResults();   
    // }, [pokemonName])


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

    const getSearchResults = function(pokemonName){
        const pokemonNames = pokemonRequest.results
        const results = pokemonNames.filter(pokemon => {
            return pokemon.name.includes(pokemonName)
        })
        setSearchResults(results);
    }

    return (
        <>
            <h2>The container</h2>
            <PokemonList pokemonResults={pokemonRequest.results} 
            getPokemonDetails={getPokemonDetails} 
            pokemonName={pokemonName} 
            setPokemonName={setPokemonName} 
            getSearchResults={getSearchResults}/>
            {pokemonDetails ? <PokemonDetails pokemonDetails={pokemonDetails}/> : null }
        </>
        
    )
}

export default PokedexContainer;