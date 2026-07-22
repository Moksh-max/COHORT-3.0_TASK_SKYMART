import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import {
  ShoppingCart,
  LogOut,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { MyStore } from "../Context/MyContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const { setIsCartOpen, currentUser, setCurrentUser } =
    useContext(MyStore);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C8F400] flex items-center justify-center">
            <Zap className="w-5 h-5 text-black fill-black" />
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold">
            Sky<span className="text-[#C8F400]">Mart</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-[#C8F400] font-semibold"
                : "text-zinc-400 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-[#C8F400] font-semibold"
                : "text-zinc-400 hover:text-white"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#C8F400] font-semibold"
                : "text-zinc-400 hover:text-white"
            }
          >
            About
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Profile */}
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-700 bg-[#111]">
            <div className="w-8 h-8 rounded-lg bg-[#C8F400] flex items-center justify-center text-black font-bold">
              {currentUser?.name?.charAt(0).toUpperCase() || "H"}
            </div>

            <span className="hidden lg:block">
              {currentUser?.name || "Hacker"}
            </span>
          </button>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-11 h-11 rounded-xl border border-zinc-700 flex items-center justify-center hover:border-[#C8F400]"
          >
            <ShoppingCart size={20} />
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-11 h-11 rounded-xl border border-zinc-700 flex items-center justify-center hover:border-red-500 hover:text-red-500"
          >
            <LogOut size={20} />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-xl border border-zinc-700 flex items-center justify-center"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#111] border-t border-zinc-800 px-6 py-5 flex flex-col gap-5">
          <NavLink
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#C8F400]"
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#C8F400]"
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#C8F400]"
          >
            About
          </NavLink>

          <div className="flex items-center gap-3 pt-4 border-t border-zinc-700">
            <div className="w-10 h-10 rounded-lg bg-[#C8F400] flex items-center justify-center text-black font-bold">
              {currentUser?.name?.charAt(0).toUpperCase() || "H"}
            </div>

            <span>{currentUser?.name || "Hacker"}</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;