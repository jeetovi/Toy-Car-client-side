import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebaseConfig";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [ user, setUser] = useState(null)
    // Loding section
    const [lodding, setLodding] = useState(true)
    // Regestation
 const createUser = (email, password) =>{
    return createUserWithEmailAndPassword( auth, email, password)
 }
// Login system
const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}
// Sign Out
const  logOut = () =>{
  return  signOut(auth)
}
// obserb auth state change 
useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
        console.log('auth state change', currentUser)
        setUser(currentUser)
        setLodding(false)
    })
    return () => {
        unsubscribe();
    }
})
  const authInfo = {
    user,createUser,signIn,logOut,lodding
  }
  return <AuthContext.Provider value={authInfo}>
     {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
