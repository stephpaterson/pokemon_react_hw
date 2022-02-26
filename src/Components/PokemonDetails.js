import './PokemonDetails.css'

const PokemonDetails = ({pokemonDetails}) => {
    
    if(!pokemonDetails){
        return null
    }

    const pokemonType = pokemonDetails.types.map((type, index)=>{
        return <li key={index}>{type.type.name}</li>
    })

    const pokemonAbility = pokemonDetails.abilities.map((ability, index)=>{
        return <li key={index}>{ability.ability.name}</li>
    })
    
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
        </div>
        
    )
}

export default PokemonDetails;