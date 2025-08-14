import { useContext, useEffect } from "react";
import AuthContext from "../contexts/auth-context";
import api, { setAuthToken } from "../services/api";

export default function useAuthApi() {
  const { token, signOut } = useContext(AuthContext);

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  useEffect(() => {
    const id = api.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err.response?.status === 401) signOut();
        return Promise.reject(err);
      }
    );
    return () => api.interceptors.response.eject(id);
  }, [signOut]);

  return api;
}
