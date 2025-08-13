import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../contexts/auth-context";

export default function Protected({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  if (!isAuthenticated) return <Navigate to="/login" replace state={{ from: location }} />;
  return children;
}
