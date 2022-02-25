import ListItem from "./ListItem"

const PokemonList = ({pokemonResults}) => {

    const pokemonListItem = pokemonResults.map((pokemon, index)=>{
            return <ListItem key={index} pokemon={pokemon} />
        })

    return (
        <ul>
            {pokemonListItem}
        </ul>
    )
}

export default PokemonList;