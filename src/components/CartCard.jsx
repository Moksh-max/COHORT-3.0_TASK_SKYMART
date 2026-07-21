import React, { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { MyStore } from "../Context/MyContext";

const CartCard = ({ product }) => {
  const { cartData, setCartData } = useContext(MyStore);

  const increaseQuantity = () => {
    setCartData(
      cartData.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = () => {
    if (product.quantity === 1) {
      setCartData(cartData.filter((item) => item.id !== product.id));
    } else {
      setCartData(
        cartData.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  const deleteProduct = () => {
  const updatedCart = cartData.filter(
    (item) => item.id !== product.id
  );

  setCartData(updatedCart);

  localStorage.setItem(
    "cartData",
    JSON.stringify(updatedCart)
  );
};
  return (
    <div className="flex gap-4 bg-[#111] border border-zinc-800 rounded-2xl p-4 hover:border-[#C8F400] transition-all duration-300">
      {/* Product Image */}
      <div className="w-24 h-24 bg-white rounded-xl overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-white font-semibold line-clamp-1">
            {product.title}
          </h3>

          <p className="text-zinc-400 text-sm capitalize mt-1">
            {product.category}
          </p>

          <p className="text-[#C8F400] text-xl font-bold mt-2">
            ${product.price}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-3">
          {/* Quantity */}
          <div className="flex items-center bg-[#1A1A1A] rounded-lg overflow-hidden">
            <button onClick={decreaseQuantity} className="p-2 hover:bg-zinc-700 transition">
              <Minus size={16} />
            </button>

            <span className="px-4 font-semibold">1</span>

            <button onClick={increaseQuantity} className="p-2 hover:bg-zinc-700 transition">
              <Plus size={16} />
            </button>
          </div>

          {/* Delete */}
          <button onClick={deleteProduct} className="text-red-500 hover:text-red-400 transition">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
