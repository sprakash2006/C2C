import { createContext, useContext, useEffect, useMemo, useState } from "react";


const AuthContext = createContext(null);




export const AuthProvider = ({ children }) => {
  // initialize from localStorage so a NEW WINDOW can read the same flag
  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      return localStorage.getItem("isAdmin") === "1";
    } catch {
      return false;
    }
  });

  // keep localStorage in sync whenever the flag changes
  useEffect(() => {
    try {
      localStorage.setItem("isAdmin", isAdmin ? "1" : "0");
    } catch {}
  }, [isAdmin]);

  // react to changes from other tabs/windows
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "isAdmin") {
        setIsAdmin(e.newValue === "1");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const signOut = () => setIsAdmin(false);

  const value = useMemo(() => ({ isAdmin, setIsAdmin, signOut }), [isAdmin]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};




export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
