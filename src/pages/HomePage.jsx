import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import Cart from "../components/Cart";
import { MyStore } from "../Context/MyContext";

const HomePage = () => {

  const {isCartOpen , setIsCartOpen} = useContext(MyStore);
  
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <Navbar setIsCartOpen={setIsCartOpen} />

      <Cart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-10">
        <Hero />
        <Stats />
        <Categories />
        <FeaturedProducts />
      </div>

      <Footer />
    </main>
  );
};

export default HomePage;