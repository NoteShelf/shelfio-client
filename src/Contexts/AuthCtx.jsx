import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { AUTH_TOKEN_KEY } from "../Lib/LocalStorageKeys";

const AuthCtxApi = createContext();
const useAuthCtx = () => useContext(AuthCtxApi);

const AuthCtx = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logoutHandler = () => {
    setToken(undefined);
    setUser(undefined);
    localStorage.removeItem(AUTH_TOKEN_KEY);
  };

  const handleToken = (token) => {
    const decodedToken = jwtDecode(token);

    localStorage.setItem(AUTH_TOKEN_KEY, token);

    setToken(token);
    setUser(decodedToken);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY) || "";

    if (token) {
      handleToken(token);
    }
  }, []);

  return (
    <AuthCtxApi.Provider
      value={{ token, user, isAuthenticated, handleToken, logoutHandler }}
    >
      {children}
    </AuthCtxApi.Provider>
  );
};

export default AuthCtx;
export { useAuthCtx };
