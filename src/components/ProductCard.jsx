import React, { useContext, useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { MyStore } from "../Context/MyContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { setCartData, cartData, setIsCartOpen, cartItems, setcartItems } =
    useContext(MyStore);

  const added = cartData.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    const existingItem = cartData.find((item) => item.id === product.id);

    let updatedCart;

    if (existingItem) {
      updatedCart = cartData.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      updatedCart = [...cartData, { ...product, quantity: 1 }];
      setcartItems(cartData.length + 1);
      toast.success("Added to Cart ✅");
    }

    setCartData(updatedCart);
    setIsCartOpen(true);
    // console.log(updatedCart);
  };

  return (
    <div className="group bg-[#111] rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#C8F400] transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="h-64 bg-white p-6 flex items-center justify-center overflow-hidden">
        <img
          onClick={() => navigate(`/product/${product.id}`)}
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Details */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs uppercase tracking-wider text-[#C8F400]">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-white mt-2 line-clamp-2 h-14">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />

          <span className="text-sm text-zinc-300">{product.rating.rate}</span>

          <span className="text-xs text-zinc-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm mt-3 line-clamp-3">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-6">
          <h3 className="text-2xl font-bold text-[#C8F400]">
            ${product.price}
          </h3>

          {!added ? (
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-[#C8F400] text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
            >
              <ShoppingCart size={18} />
              Add
            </button>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl cursor-not-allowed"
            >
              <ShoppingCart size={18} />
              Added ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
