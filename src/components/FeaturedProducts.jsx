import React, { useContext } from "react";
import { Star, ShoppingCart } from "lucide-react";
import ProductCard from "../Components/ProductCard";
import { MyStore } from "../Context/MyContext";

const FeaturedProducts = () => {
  const { products } = useContext(MyStore);

  // console.log(products);
  

  return (
    <section className="max-w-7xl mx-auto mt-16">
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-white">Featured Products</h2>
          <p className="text-zinc-400 mt-2">
            Trending products chosen for you.
          </p>
        </div>

        <button className="px-5 py-3 rounded-xl border border-zinc-700 hover:border-[#C8F400] transition">
          View All
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
