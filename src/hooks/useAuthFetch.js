import { useContext, useMemo } from "react";
import AuthContext from "../contexts/auth-context";
import api, { setAuthToken } from "../services/api";

export default function useAuthApi() {
  const { token, signOut } = useContext(AuthContext);

  useMemo(() => {
    setAuthToken(token);
  }, [token]);

  api.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response?.status === 401) {
        signOut();
      }
      return Promise.reject(err);
    }
  );

  return api;
}
