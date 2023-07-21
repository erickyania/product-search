import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable(products) {
  const [filterText, setFilterText] = useState();
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      ></SearchBar>
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      ></ProductTable>
    </div>
  );
}

export default FilterableProductTable;
