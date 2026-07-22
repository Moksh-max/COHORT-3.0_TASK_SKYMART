import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import WelcomeSignIn from "../pages/WelcomeSignIn";
import WelcomeSignUp from "../pages/WelcomeSignUp";
import Products from "../components/Products";
import About from "../components/About";
import CategoryProducts from "../components/CategoryProducts";
import ProductInfo from "../components/ProductInfo";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import { MyStore } from "../Context/MyContext";

const AppRoutes = () => {
  const {currentUser} = useContext(MyStore)
  return (
    <div className="text-white pr-20 ">
      {currentUser && <Navbar />}
      <div className={currentUser ? "pt-20 w-screen" : ""}>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path="/category/:categoryName"
            element={
              <ProtectedRoute>
                <CategoryProducts />
              </ProtectedRoute>
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <ProductInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute>
                <WelcomeSignIn />
              </PublicRoute>
            }
          />

          <Route
            path="/signUp"
            element={
              <PublicRoute>
                <WelcomeSignUp />
              </PublicRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default AppRoutes;
