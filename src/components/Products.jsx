import React, { useContext, useState } from "react";
import { Search, Star, ShoppingCart } from "lucide-react";
import Navbar from "../Components/Navbar";
import Cart from "../Components/Cart";
import { MyStore } from "../Context/MyContext";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { isCartOpen, setIsCartOpen, products } = useContext(MyStore);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // console.log(categories);
  

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white px-6  ">
      {/* <Navbar /> */}

      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      <div className="max-w-7xl py-10 mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">
          <div>
            <h1 className="text-5xl font-black">
              Our <span className="text-[#C8F400]">Products</span>
            </h1>

            <p className="text-zinc-400 mt-2">
              Explore premium products at the best prices.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-[#111] border border-zinc-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#C8F400]"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 capitalize
        ${
          selectedCategory === category
            ? "bg-[#C8F400] text-black border-[#C8F400]"
            : "border-zinc-700 text-white hover:bg-[#C8F400] hover:text-black"
        }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
