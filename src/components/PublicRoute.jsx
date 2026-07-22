import { Navigate } from "react-router";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const PublicRoute = ({ children }) => {
  const { currentUser } = useContext(MyStore);

  return currentUser ? <Navigate to="/home" replace /> : children;
};

export default PublicRoute;