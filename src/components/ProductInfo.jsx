import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { MyStore } from "../Context/MyContext";
import Navbar from "../components/Navbar";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Cart from "../components/Cart";
import { toast } from "react-toastify";

const ProductInfo = () => {
  const navigate = useNavigate();
  const { setIsCartOpen, isCartOpen, cartData, setCartData } =
    useContext(MyStore);
  const { id } = useParams();
  const { products } = useContext(MyStore);

  const product = products.find((item) => item.id === Number(id));

  const suggestedProducts = products.filter(
    (item) => item.category === product?.category && item.id !== product?.id,
  );

  const handleAddToCart = () => {
  const existingItem = cartData.find((item) => item.id === product.id);

  let updatedCart;

  if (existingItem) {
    updatedCart = cartData.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    updatedCart = [...cartData, { ...product, quantity: 1 }];
  }

  setCartData(updatedCart);
  setIsCartOpen(true);
  toast.success("Added to Cart ✅");
};

  if (!product) {
    return (
      <div className="text-white">
        {/* <Navbar setIsCartOpen={setIsCartOpen} /> */}
        <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center text-white text-2xl">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col gap-5">
      {/* Navbar */}
      <Navbar setIsCartOpen={setIsCartOpen} />

      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-8 py-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="bg-white rounded-3xl p-10 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-[450px] object-contain"
          />
        </div>

        {/* Right */}
        <div>
          <span className="bg-[#C8F400] text-black px-4 py-2 rounded-full capitalize font-semibold">
            {product.category}
          </span>

          <h1 className="text-5xl font-bold mt-6 leading-tight">
            {product.title}
          </h1>

          <div className="flex items-center gap-2 mt-5">
            <Star size={20} className="fill-yellow-400 text-yellow-400" />
            <span>{product.rating.rate}</span>
            <span className="text-gray-400">
              ({product.rating.count} Reviews)
            </span>
          </div>

          <h2 className="text-5xl font-bold text-[#C8F400] mt-6">
            ${product.price}
          </h2>

          <p className="text-gray-300 leading-8 mt-8">{product.description}</p>

          <div className="flex gap-5 mt-10">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-3 bg-[#C8F400] text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              <ShoppingCart size={22} />
              Add To Cart
            </button>

            <button className="border border-gray-700 p-4 rounded-xl hover:bg-gray-900 transition">
              <Heart />
            </button>
          </div>
        </div>
      </section>

      {/* Suggested Products */}
<section className="max-w-7xl mx-auto px-8 pb-16">
  <h2 className="text-4xl font-bold mb-8">
    You May Also Like
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {suggestedProducts.map((item) => (
      <div
        key={item.id}
        onClick={() => navigate(`/product/${item.id}`)}
        className="bg-[#181818] rounded-2xl p-5 cursor-pointer hover:scale-105 transition duration-300"
      >
        <div className="bg-white rounded-xl p-4 h-56 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="h-40 object-contain"
          />
        </div>

        <h3 className="mt-4 font-semibold line-clamp-2">
          {item.title}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-[#C8F400] font-bold text-xl">
            ${item.price}
          </span>

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            <span>{item.rating.rate}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default ProductInfo;
