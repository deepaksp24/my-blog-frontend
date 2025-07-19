import { createContext, useContext, useEffect, useState } from "react";
import { verifyUser } from "../api/blog";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null initially

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    verifyUser(token).then((data) => {
      if (data) setUser(data);
      else localStorage.removeItem("token");
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
