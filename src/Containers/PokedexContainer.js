import { useState , useEffect } from "react";
import PokemonList from "../Components/PokemonList";
import PokemonDetails from "../Components/PokemonDetails";
import './PokemonContainer.css'

const PokedexContainer = () => {

    const [pokemonRequest, setPokemonRequest] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [pokemonSearch, setPokemonSearch] = useState("");

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

    return (
        <div className="container">
            <div>
                
                <PokemonList pokemonResults={pokemonRequest.results} 
                getPokemonDetails={getPokemonDetails} 
                pokemonSearch={pokemonSearch} 
                setPokemonSearch={setPokemonSearch} 
                />
            </div>
                {pokemonDetails ? <PokemonDetails pokemonDetails={pokemonDetails}/> : null }
        </div>
        
    )
}

export default PokedexContainer;