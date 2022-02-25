import { useState , useEffect } from "react";
import PokemonList from "../Components/PokemonList";
import PokemonDetails from "../Components/PokemonDetails";

const PokedexContainer = () => {

    const [pokemonRequest, setPokemonRequest] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState([]);

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


    return (
        <>
            <h2>The container</h2>
            <PokemonList pokemonResults={pokemonRequest.results} getPokemonDetails={getPokemonDetails}/>
            <PokemonDetails pokemonDetails={pokemonDetails}/>
        </>
        
    )
}

export default PokedexContainer;