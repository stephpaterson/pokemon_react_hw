import ListItem from "./ListItem"

const PokemonList = ({pokemonResults, getPokemonDetails, pokemonSearch, setPokemonSearch}) => {

    if(!pokemonResults){
        return null
    }

    const pokemonListItem = 
        pokemonResults.filter(pokemon => {
            if(pokemonSearch === ""){
                return pokemon
            } else if (pokemon.name.includes(pokemonSearch)){
                return pokemon
            }
        
        }).map((pokemon, index)=>{
            return <ListItem key={index} pokemon={pokemon} getPokemonDetails={getPokemonDetails}/>
        })

    // const handlePokemonSearch = (event) => {
    //     setPokemonSearch(event.target.value)
    // }

    return (
        <>
            <form>
                <input type="text" placeholder="Pokemon name" value={pokemonSearch} onChange={event => setPokemonSearch(event.target.value)}/>
            </form>
            <ul>
                {pokemonListItem}
            </ul>
        </>
    )
}

export default PokemonList;