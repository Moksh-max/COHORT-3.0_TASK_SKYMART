import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import WelcomeSignIn from "../pages/WelcomeSignIn";
import WelcomeSignUp from "../pages/WelcomeSignUp";
import Products from "./Products";
import About from "./About";
import CategoryProducts from "./CategoryProducts";
import ProductInfo from "./ProductInfo";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<WelcomeSignIn />} />
        <Route path="/signUp" element={<WelcomeSignUp />} />
        <Route path="/category/:categoryName" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductInfo />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
