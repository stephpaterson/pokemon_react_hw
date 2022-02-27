import './CaughtPokemon.css'

const CaughtPokemon = ({caughtPokemon}) => {

    const caughtPokemonList = caughtPokemon.map((pokemon, index) => {
        return <li key={index}><img src={pokemon.sprites.front_default} alt={pokemon.name} />{pokemon.name}</li>
    })

    return (
        <div className="caught-pokemon">
            <h3>My Pokemon</h3>
            <ul>
                {caughtPokemonList}
            </ul>
        </ div>
    )
}

export default CaughtPokemon;