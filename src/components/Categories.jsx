import React, { useContext, useState } from "react";
import {
  Laptop,
  Gem,
  Shirt,
  PersonStanding,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { MyStore } from "../Context/MyContext";
import { useNavigate } from "react-router";

const categories = [
  {
    icon: <Laptop size={40} className="text-blue-500" />,
    title: "electronics",
    items: "6 Items",
  },
  {
    icon: <Gem size={40} className="text-yellow-500" />,
    title: "jewelery",
    items: "4 Items",
  },
  {
    icon: <Shirt size={40} className="text-cyan-500" />,
    title: "men's clothing",
    items: "4 Items",
  },
  {
    icon: <PersonStanding size={40} className="text-pink-500" />,
    title: "women's clothing",
    items: "6 Items",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  const { products } = useContext(MyStore);

  return (
    <section className="max-w-7xl mx-auto mt-14">
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-white">Shop by Category</h2>

        <button className="flex items-center gap-2 text-[#C8F400] font-semibold hover:gap-3 transition-all">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {categories.map((category, index) => (
          <div
            onClick={() => navigate(`/category/${category.title}`)}
            key={index}
            className=" cursor-pointer bg-white rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          > 
            <div className="flex justify-center mb-5">{category.icon}</div>

            <h3 className="text-2xl font-bold text-zinc-900">
              {category.title}
            </h3>

            <p className="text-zinc-500 mt-2">{category.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
