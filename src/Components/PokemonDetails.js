const PokemonDetails = ({pokemonDetails}) => {
    return (
        <>
            <h3>Name: {pokemonDetails.name}</h3>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
        </>
        
    )
}

export default PokemonDetails;