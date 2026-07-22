import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MyStore } from "../Context/MyContext";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";

const CategoryProducts = () => {
  const { isCartOpen, setIsCartOpen } = useContext(MyStore);

  const { categoryName } = useParams();
  const { products } = useContext(MyStore);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log("Category Name:", categoryName);
    console.log("Products:", products);

    const filtered = products.filter(
      (product) => product.category === categoryName,
    );

    console.log("Filtered:", filtered);

    setFilteredProducts(filtered);
  }, [products, categoryName]);
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <Navbar setIsCartOpen={setIsCartOpen} />

      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      <div className="min-h-screen bg-[#0B0B0B] p-8 text-white flex - flex-col gap-5">
        <h1 className="text-4xl text-white mb-8 capitalize">{categoryName}</h1>

        <div className="grid grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoryProducts;
