import { createContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }: any) {
  const persistedAuth = JSON.parse(localStorage.getItem("token") as string);
  const [token, setToken] = useState(persistedAuth);

  const login = (authData: string) => {
    setToken(authData);
    localStorage.setItem("token", JSON.stringify(authData));
  };

  const logoff = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logoff } as any}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
