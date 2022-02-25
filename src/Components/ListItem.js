const ListItem = ({pokemon, getPokemonDetails}) => {

    const handleClick = (pokemon) =>{
        const pokemonUrl = pokemon.url
        getPokemonDetails(pokemonUrl)
    }

    return (
        <li onClick={() => handleClick(pokemon)}>{pokemon.name}</li>
    )
}

export default ListItem;