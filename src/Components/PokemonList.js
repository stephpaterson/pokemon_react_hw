import ListItem from "./ListItem"

const PokemonList = ({pokemonResults, getPokemonDetails}) => {

    if(!pokemonResults){
        return null
    }

    const pokemonListItem = pokemonResults.map((pokemon, index)=>{
            return <ListItem key={index} pokemon={pokemon} getPokemonDetails={getPokemonDetails}/>
        })

    return (
        <ul>
            {pokemonListItem}
        </ul>
    )
}

export default PokemonList;