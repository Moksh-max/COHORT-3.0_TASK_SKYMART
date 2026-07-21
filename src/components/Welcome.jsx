import React from "react";
import logo from "../assets/logo.png";

const Welcome = () => {
  return (
    <main className="w-full lg:w-1/2 min-h-screen bg-black text-white flex items-center justify-center px-6 sm:px-10 py-12">
      <div className="max-w-xl text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src={logo}
            alt="SkyMart Logo"
            className="h-20 sm:h-24 object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
          Welcome to{" "}
          <span className="text-[#C8F400]">SkyMart</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg mt-5 sm:mt-6 leading-7 sm:leading-8">
          Shop smarter with SkyMart. Discover trending products,
          exclusive deals, and a seamless shopping experience designed
          just for you.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <div className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm sm:text-base">
            ⚡ Fast Delivery
          </div>

          <div className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm sm:text-base">
            🔒 Secure Payments
          </div>

          <div className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm sm:text-base">
            💎 Premium Quality
          </div>
        </div>

        {/* CTA */}
        <button className="mt-8 sm:mt-10 bg-[#C8F400] text-black px-8 sm:px-10 py-3 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition duration-300">
          Start Shopping →
        </button>

        {/* Footer */}
        <p className="mt-10 sm:mt-12 text-gray-500 text-xs sm:text-sm">
          Trusted by{" "}
          <span className="text-white font-semibold">10,000+</span>{" "}
          happy shoppers across India.
        </p>
      </div>
    </main>
  );
};

export default Welcome;