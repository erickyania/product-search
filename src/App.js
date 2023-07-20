import "./App.css";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

function FilterableProductTable() {
  return (
    <div>
      <SearchBar></SearchBar>
      <ProductTable></ProductTable>
    </div>
  );
}

export default FilterableProductTable;
