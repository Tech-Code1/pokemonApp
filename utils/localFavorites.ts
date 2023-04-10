const toggleFavorite = (id: number) => {
    console.log("toggleFavorite llamado");
    
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');

    favorites.includes(id) 
    ? favorites = favorites.filter(pokeID => pokeID !== id)
    : favorites.push(id);

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id: number): boolean => {

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');

    return favorites.includes(id);
}

const pokemons = (): number[] => {

    return JSON.parse(localStorage.getItem('favorites') ?? '[]');
}

export default {
    toggleFavorite,
    existInFavorites,
    pokemons
}