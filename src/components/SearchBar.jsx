import onFilterTextChange from "./FilterableProductTable";
const SearchBar = (filterText, inStockOnly) => {
  return (
    <form>
      <input
        type="search"
        placeholder="search..."
        onChange={(e) => {
          onFilterTextChange(e.target.value);
        }}
      ></input>
      <label>
        <input type="checkbox"></input>
        {}
        Only show product in stock
      </label>
    </form>
  );
};
export default SearchBar;
