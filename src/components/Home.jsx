import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

 

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h1>This is a home section
                 { user && <span>{user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;