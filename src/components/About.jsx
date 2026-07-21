import React, { useContext } from "react";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
  Users,
  Award,
} from "lucide-react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";
import Cart from "./Cart";

const features = [
  {
    icon: <ShoppingBag size={32} />,
    title: "Premium Products",
    desc: "We provide high-quality products from trusted brands worldwide.",
  },
  {
    icon: <Truck size={32} />,
    title: "Fast Delivery",
    desc: "Lightning-fast delivery with safe and secure packaging.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure Payments",
    desc: "Your transactions are protected with advanced security.",
  },
  {
    icon: <Headphones size={32} />,
    title: "24/7 Support",
    desc: "Friendly customer support whenever you need assistance.",
  },
];

const About = () => {
  const navigate = useNavigate();
  const {isCartOpen,setIsCartOpen} = useContext(MyStore);

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <Navbar />

      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-10 text-center">
        <span className="text-[#C8F400] font-semibold uppercase tracking-widest">
          About SkyMart
        </span>

        <h1 className="text-5xl md:text-7xl font-black mt-5">
          Shopping Made
          <span className="text-[#C8F400]"> Simple</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg leading-8">
          SkyMart is your one-stop online shopping destination. We combine
          premium quality products, affordable pricing, and fast delivery to
          create an exceptional shopping experience.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-zinc-700 rounded-3xl p-8 hover:border-[#C8F400] transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#C8F400]/10 text-[#C8F400] flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

              <p className="text-zinc-400 leading-7">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "10K+",
              title: "Happy Customers",
              icon: <Users size={28} />,
            },
            {
              number: "500+",
              title: "Products",
              icon: <ShoppingBag size={28} />,
            },
            {
              number: "99%",
              title: "Positive Reviews",
              icon: <Award size={28} />,
            },
            {
              number: "24/7",
              title: "Support",
              icon: <Headphones size={28} />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-3xl border border-zinc-700 p-8 text-center hover:border-[#C8F400] transition"
            >
              <div className="text-[#C8F400] flex justify-center mb-4">
                {item.icon}
              </div>

              <h2 className="text-4xl font-black">{item.number}</h2>

              <p className="text-zinc-400 mt-3">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-[#111111] border border-zinc-700 rounded-[32px] p-12 text-center">
          <h2 className="text-4xl font-black">Ready to Start Shopping?</h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Explore hundreds of premium products and enjoy secure payments, fast
            delivery, and exclusive deals every day.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-8 bg-[#C8F400] text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Explore Products
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;
