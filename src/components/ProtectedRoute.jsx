import { Navigate } from "react-router";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(MyStore);

  return currentUser ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;