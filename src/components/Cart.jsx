import React, { useContext } from "react";
import { X } from "lucide-react";
import { MyStore } from "../Context/MyContext";
import CartCard from "../components/CartCard";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const { cartData } = useContext(MyStore);
  return (
    <>
      {/* Background */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 z-[100] bg-black/60 transition-opacity duration-300
  ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[101] h-screen w-[380px] bg-[#111]
             border-l border-zinc-700
             transition-transform duration-300 ease-in-out
             ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-zinc-700">
          <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>

          <button onClick={() => setIsCartOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        {/* Items */}

        {cartData.length > 0 ? (
          cartData.map((product) => (
            <CartCard key={product.id} product={product} />
          ))
        ) : (
          <div className="p-6 text-zinc-400 text-center">
            Your cart is empty.
          </div>
        )}

        {/* Footer */}

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-zinc-700">
          <button className="w-full bg-[#C8F400] text-black py-4 rounded-xl font-bold">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
