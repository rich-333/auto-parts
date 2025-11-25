import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

   /* const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      if (!saved) return null;
      return JSON.parse(saved);
    } catch (error) {
      console.error("Error al parsear usuario guardado:", error);
      localStorage.removeItem("user"); 
      return null;
    }
  });*/

  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}