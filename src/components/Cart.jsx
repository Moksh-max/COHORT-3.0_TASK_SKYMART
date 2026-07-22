import React, { useContext } from "react";
import { X } from "lucide-react";
import { MyStore } from "../Context/MyContext";
import CartCard from "./CartCard";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const { cartData } = useContext(MyStore);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 z-[100] bg-black/60 transition-opacity duration-300 ${
          isCartOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[101] h-screen
        w-full sm:w-[400px]
        bg-[#111]
        border-l border-zinc-700
        flex flex-col
        transition-transform duration-300 ease-in-out
        ${
          isCartOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-5 border-b border-zinc-700">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Shopping Cart
          </h2>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg hover:bg-zinc-800 transition"
          >
            <X className="text-white" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {cartData.length > 0 ? (
            cartData.map((product) => (
              <CartCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="flex h-full items-center justify-center text-zinc-400 text-lg">
              Your cart is empty 🛒
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-700 p-5 bg-[#111]">
          <button className="w-full bg-[#C8F400] text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition duration-300">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;