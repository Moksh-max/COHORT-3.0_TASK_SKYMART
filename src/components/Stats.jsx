import React, { useContext } from "react";
import {
  Package,
  IndianRupee,
  Star,
  Tags,
} from "lucide-react";
import { MyStore } from "../Context/MyContext";





const Stats = () => {
const {cartItems} = useContext(MyStore);

const stats = [
  {
    title: cartItems,
    subtitle: "Cart Items",
    desc: "In your bag",
    icon: <Package size={24} />,
    color: "bg-lime-500/10 text-[#C8F400]",
  },
  {
    title: "₹0.00",
    subtitle: "Cart Value",
    desc: "Ready to checkout",
    icon: <IndianRupee size={24} />,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "5",
    subtitle: "Top Products",
    desc: "Highly rated",
    icon: <Star size={24} />,
    color: "bg-yellow-500/10 text-yellow-400",
  },
  {
    title: "4",
    subtitle: "Categories",
    desc: "To explore",
    icon: <Tags size={24} />,
    color: "bg-purple-500/10 text-purple-400",
  },
];


  return (
    <section className="max-w-7xl mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-zinc-700 rounded-3xl p-6 hover:border-[#C8F400] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

              <div>
                <h2 className="text-4xl font-bold">{item.title}</h2>

                <p className="text-lg font-medium mt-1">
                  {item.subtitle}
                </p>

                <p className="text-zinc-500 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;