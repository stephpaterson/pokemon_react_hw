import { useState , useEffect } from "react";

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
        </>
        
    )
}

export default PokedexContainer;