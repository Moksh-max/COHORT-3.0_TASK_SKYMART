import React, { useContext } from "react";
import { ArrowRight } from "lucide-react";
import { MyStore } from "../Context/MyContext";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  const { currentUser} = useContext(MyStore);
  return (
    <section className="max-w-7xl mx-auto mt-10">
      <div
        className="relative overflow-hidden rounded-[32px] border border-zinc-700 bg-[#111111] px-12 py-14"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
          backgroundSize: "42px 42px",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left */}
          <div className="max-w-2xl">
            <p className="uppercase tracking-widest text-[#C8F400] font-semibold mb-6">
              Good Evening 👋
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Welcome back,
              <br />
              <span className="text-[#C8F400]">{currentUser?.name  || "hacker"}!</span>
            </h1>

            <p className="mt-6 text-zinc-400 text-lg max-w-xl leading-8">
              Discover today's picks — hand-crafted products across electronics,
              fashion, furniture and much more.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button
                onClick={() => navigate("/products")}
                className="flex items-center gap-2 bg-[#C8F400] text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 duration-300"
              >
                Shop Now
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => navigate("/products")}
                className="border border-zinc-700 hover:border-[#C8F400] px-8 py-4 rounded-2xl duration-300"
              >
                View All Products
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center gap-6 lg:w-64">
            <div className="rounded-3xl bg-[#C8F400]/15 border border-[#C8F400]/20 p-8 text-center">
              <h2 className="text-5xl font-black text-[#C8F400]">20+</h2>
              <p className="mt-3 text-zinc-300">Products Available</p>
            </div>

            <div className="rounded-3xl border border-zinc-600 bg-[#151515] p-8 text-center">
              <h2 className="text-5xl font-black">Free</h2>
              <p className="mt-3 text-zinc-400">Delivery on ₹999+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
