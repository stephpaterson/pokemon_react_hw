import ListItem from "./ListItem"

const PokemonList = ({pokemonResults, getPokemonDetails, pokemonName, setPokemonName, getSearchResults}) => {

    if(!pokemonResults){
        return null
    }

    const pokemonListItem = pokemonResults.map((pokemon, index)=>{
            return <ListItem key={index} pokemon={pokemon} getPokemonDetails={getPokemonDetails}/>
        })

    const handlePokemonNameChange = (event) => {
        setPokemonName(event.target.value)
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        getSearchResults(pokemonName)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pokemon name" value={pokemonName} onChange={handlePokemonNameChange}/>
                <input type="submit" value="Search" />
            </form>
            <ul>
                {pokemonListItem}
            </ul>
        </>
    )
}

export default PokemonList;