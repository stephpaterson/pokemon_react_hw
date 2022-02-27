import './PokemonDetails.css'

const PokemonDetails = ({pokemonDetails, addCaughtPokemon}) => {
    
    if(!pokemonDetails){
        return null
    }

    const pokemonType = pokemonDetails.types.map((type, index)=>{
        return <li key={index}>{type.type.name}</li>
    })

    const pokemonAbility = pokemonDetails.abilities.map((ability, index)=>{
        return <li key={index}>{ability.ability.name}</li>
    })

    const handleClick = ()=>{
        const foundPokemon = pokemonDetails
        addCaughtPokemon(foundPokemon)
    }
    
    return (
        <div className="pokemon-details">
            <h3>{pokemonDetails.name}</h3>
            <img src={pokemonDetails.sprites.other["official-artwork"]["front_default"]} alt={pokemonDetails.name} />
            <p>Types:</p>
            <ul>
                {pokemonType}
            </ul>
            <p>Abilities:</p>
            <ul>
                {pokemonAbility}
            </ul>
            <button value={pokemonDetails.name} onClick={handleClick}>Catch That Pokemon!</button>
        </div>
        
    )
}

export default PokemonDetails;