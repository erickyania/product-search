import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

function FilterableProductTable(products) {
  return (
    <div>
      <SearchBar></SearchBar>
      <ProductTable products = {products}></ProductTable>
    </div>
  );
}



export default FilterableProductTable;
