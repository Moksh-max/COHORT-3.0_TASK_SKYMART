import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  //api call
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(Products);

  useEffect(() => {
    getData();
  }, []);

  // -------------------------------------------

  //cartData
  const [cartData, setCartData] = useState(() => {
    return JSON.parse(localStorage.getItem("cartData")) || [];
  });
  console.log(cartData);

  //-------------------------------------------

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser"));
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <MyStore.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        isCartOpen,
        setIsCartOpen,
        products,
        setProducts,
        cartData,
        setCartData,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
