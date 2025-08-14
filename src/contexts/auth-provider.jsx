import { useMemo, useState, useCallback, useEffect } from "react";
import AuthContext from "./auth-context";
import { login } from "../services/auth";
import { setAuthToken } from "../services/api";

const STORAGE_KEY = "access_token";

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY));
  const isAuthenticated = Boolean(token);

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  const signIn = useCallback(async (email, password) => {
    const res = await login({ email, password });
    localStorage.setItem(STORAGE_KEY, res.access_token);
    setToken(res.access_token);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
  }, []);

  const value = useMemo(() => ({ token, isAuthenticated, signIn, signOut }), [token, isAuthenticated, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
