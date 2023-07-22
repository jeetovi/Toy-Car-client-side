import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../Footer/Footer";
import Banner from "../components/Home/Banner";

 

const Main = () => {
    return (
        <div>
            
            <Header></Header>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;