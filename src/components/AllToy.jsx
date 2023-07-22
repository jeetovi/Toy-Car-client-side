import { useEffect, useState } from "react";
import AllToyaCard from "./AllToyaCard";
 

 

const AllToy = () => {
    const [toys, toysServices] = useState([])
    useEffect(() => {
        fetch('CarData.json')
        .then(res => res.json())
        .then(data => toysServices(data))
    },[])
    return (
        <div className="mt-4 mb-4">
        <div className="text-center">
            <h3 className="text-1xl text-orange-500"> Our Services</h3>
            <h2 className="text-3xl text-orange-500">Our Service Area </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum reprehenderit cumque maxime itaque dolorum totam {toys.length}  </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                toys.map(toy => <AllToyaCard
                 key={toy. id}
                 toy= {toy}
                
                ></AllToyaCard>)
            }
        </div>
        
    </div>
    );
};

export default AllToy;