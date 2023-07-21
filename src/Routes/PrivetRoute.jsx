import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import AllToy from "../components/AllToy";

 

const PrivetRoute = ({children}) => {
    const {user,lodding} = useContext(AuthContext)

    // lodding
    if (lodding){
        return <progress className="progress w-56"></progress>
    }
    if(user){
       
        return children
    }
         return <Navigate to='/login' replace={true}></Navigate>
     
};

export default PrivetRoute;