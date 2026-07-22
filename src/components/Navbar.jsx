import React from "react";
import { NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, Zap } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Navbar = () => {
  const { setIsCartOpen } = useContext(MyStore);

  const { setCurrentUser, currentUser } = useContext(MyStore);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  //   const { currentUser } = useContext(MyStore);
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 w-full  z-50 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C8F400] flex items-center justify-center">
            <Zap className="w-5 h-5 text-black fill-black" />
          </div>

          <h1 className="text-3xl font-extrabold">
            Sky<span className="text-[#C8F400]">Mart</span>
          </h1>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-[#C8F400] font-semibold"
                : "text-zinc-400 hover:text-white duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-[#C8F400] font-semibold"
                : "text-zinc-400 hover:text-white duration-300"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#C8F400] font-semibold"
                : "text-zinc-400 hover:text-white duration-300"
            }
          >
            About
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Profile */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 bg-[#111] hover:border-[#C8F400] duration-300">
            <div className="w-8 h-8 rounded-lg bg-[#C8F400] flex items-center justify-center text-black font-bold">
              {currentUser?.name?.charAt(0).toUpperCase() || "H"}
            </div>
            <span className="hidden sm:block">{currentUser?.name || "Hacker"}</span>
          </button>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-11 h-11 rounded-xl border border-zinc-700 flex items-center justify-center hover:border-[#C8F400] duration-300"
          >
            <ShoppingCart size={20} />
          </button>

          {/* Logout */}
          <button
            onClick={() => handleLogout()}
            className="w-11 h-11 rounded-xl border border-zinc-700 flex items-center justify-center hover:border-red-500 hover:text-red-500 duration-300"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
