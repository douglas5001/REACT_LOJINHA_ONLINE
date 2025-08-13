import { useMemo, useState, useCallback } from "react";
import AuthContext from "./auth-context";
import { login } from "../services/auth";
import { setAuthToken } from "../services/api";

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const isAuthenticated = Boolean(token);

  const signIn = useCallback(async (email, password) => {
    const res = await login({ email, password });
    setToken(res.access_token);
    setAuthToken(res.access_token);
  }, []);

  const signOut = useCallback(() => {
    setToken(null);
    setAuthToken(null);
  }, []);

  const value = useMemo(() => ({
    token,
    isAuthenticated,
    signIn,
    signOut
  }), [token, isAuthenticated, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
