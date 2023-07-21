import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const user = { displayName: "Avijit" };
  return <AuthContext.Provider value={user}>
     {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
