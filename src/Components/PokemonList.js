import ListItem from "./ListItem"
import './PokemonList.css'

const PokemonList = ({pokemonResults, getPokemonDetails, pokemonSearch, setPokemonSearch}) => {

    if(!pokemonResults){
        return null
    }

    const pokemonListItem = 
        pokemonResults.filter(pokemon => {
            if (pokemon.name.includes(pokemonSearch)){
                return pokemon}
        }).map((pokemon, index)=>{
            return <ListItem key={index} pokemon={pokemon} getPokemonDetails={getPokemonDetails}/>
        })

    return (
        <div className="pokemon-list-box">
            <h2>Gotta Catch 'em All!</h2>
            <form>
                <input type="text" placeholder="Search for pokemon" value={pokemonSearch} onChange={event => setPokemonSearch(event.target.value)}/>
            </form>
            <ul className="pokemon-list">
                {pokemonListItem}
            </ul>
        </div>
    )
}

export default PokemonList;