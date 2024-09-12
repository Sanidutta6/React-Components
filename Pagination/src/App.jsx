import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import ProductList from "./components/ProductList"

function App() {
  const noOfProductsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${noOfProductsPerPage}&skip=${(currentPage - 1) * noOfProductsPerPage}&select=title,price,thumbnail`)
      .then(res => res.json())
      .then((data) => { setProducts(data.products); setTotalProducts(Number(data.total)) });
  }, [currentPage])

  return (
    <main className="min-h-dvh w-full bg-slate-900 text-slate-300 flex flex-col">
      <div className="flex-1">
        <ProductList products={products} />
      </div>
      {products.length > 0 && <Pagination itemsPerPage={noOfProductsPerPage} totalItems={totalProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </main>
  )
}

export default App
