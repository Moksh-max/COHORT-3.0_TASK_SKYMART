import React from "react";
import {
  Laptop,
  Shirt,
  Sofa,
  House,
  Gamepad2,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: <Laptop size={40} className="text-blue-500" />,
    title: "Electronics",
    items: "17 Items",
  },
  {
    icon: <Shirt size={40} className="text-pink-500" />,
    title: "Clothing",
    items: "12 Items",
  },
  {
    icon: <Sofa size={40} className="text-orange-500" />,
    title: "Furniture",
    items: "8 Items",
  },
  {
    icon: <House size={40} className="text-green-500" />,
    title: "Home",
    items: "14 Items",
  },
  {
    icon: <Gamepad2 size={40} className="text-purple-500" />,
    title: "Gaming",
    items: "9 Items",
  },
  {
    icon: <Smartphone size={40} className="text-cyan-500" />,
    title: "Mobiles",
    items: "25 Items",
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto mt-14">
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-white">
          Shop by Category
        </h2>

        <button className="flex items-center gap-2 text-[#C8F400] font-semibold hover:gap-3 transition-all">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-5">
              {category.icon}
            </div>

            <h3 className="text-2xl font-bold text-zinc-900">
              {category.title}
            </h3>

            <p className="text-zinc-500 mt-2">
              {category.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;