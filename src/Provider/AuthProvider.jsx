import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebaseConfig";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [ user, setUser] = useState(null)
    // Regestation
 const createUser = (email, password) =>{
    return createUserWithEmailAndPassword( auth, email, password)
 }
// Login system
const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}
  const authInfo = {
    user,createUser,signIn
  }
  return <AuthContext.Provider value={authInfo}>
     {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
