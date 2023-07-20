const SearchBar = () => {
    return(
        <form>
            <input type="search" placeholder="search..."></input>
            <label>
                <input type="checkbox"></input>
                {''}
                Only show product in stock
            </label>
        </form>
    )
};
export default SearchBar;
