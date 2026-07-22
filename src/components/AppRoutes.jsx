import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import WelcomeSignIn from "../pages/WelcomeSignIn";
import WelcomeSignUp from "../pages/WelcomeSignUp";
import Products from "../Components/Products";
import About from "../Components/About";
import CategoryProducts from "../Components/CategoryProducts";
import ProductInfo from "../Components/ProductInfo";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../Components/ProtectedRoute";
import PublicRoute from "../Components/PublicRoute";
import { MyStore } from "../Context/MyContext";

const AppRoutes = () => {
  const {currentUser} = useContext(MyStore)
  return (
    <div className="text-white pr-20 ">
      {currentUser && <Navbar />}
      <div className={currentUser ? "pt-20" : ""}>
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
