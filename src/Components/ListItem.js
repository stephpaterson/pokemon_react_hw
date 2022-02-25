const ListItem = ({pokemon}) => {
    return (
        <li><a href={pokemon.url}>{pokemon.name}</a></li>
    )
}

export default ListItem;