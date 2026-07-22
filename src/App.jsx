import React from "react";
import AppRoutes from "./components/AppRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      <>
        <AppRoutes />
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </>
    </div>
  );
};

export default App;
