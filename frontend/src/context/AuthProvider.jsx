import React, { createContext, useContext, useState, useEffect } from "react";
import { login, getUser } from "../logic/auth.js";

const AuthContext = createContext(undefined);

export default function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUser();

        const { authToken, user } = response[1];

        setAuthToken(authToken);
        setCurrentUser(user);
      } catch {
        setAuthToken(null);
        setCurrentUser(null);
      }
    }

    fetchUser();
  }, []);

  async function handleLogin() {
    try {
      const response = await login();

      const { authToken, user } = response[1];

      setAuthToken(authToken);
      setCurrentUser(user);
    } catch {
      setAuthToken(null);
      setCurrentUser(null);
    }
  }

  async function handleLogout() {
    setAuthToken(null);
    setCurrentUser(null);
  }
  return (
    <AuthContext.Provider
      value={{
        authToken,
        currentUser,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth можно использовать только внутри AuthProvider");
  }

  return context;
}
