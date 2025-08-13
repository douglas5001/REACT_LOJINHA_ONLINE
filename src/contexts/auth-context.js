import { createContext } from "react";

const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  signIn: async () => {},
  signOut: () => {},
});

export default AuthContext;
