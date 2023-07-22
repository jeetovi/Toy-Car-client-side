 
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

 

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setservices(data))
    }, [])
    return (
        <div className="mt-4 mb-4">
            <div className="text-center">
                <h3 className="text-1xl text-orange-500"> Our Services</h3>
                <h2 className="text-3xl text-orange-500">Our Service Area </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum reprehenderit cumque maxime itaque dolorum totam  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                services.map(service => <ServicesCard 
                 key={service._id}   
                 service={service}
                    ></ServicesCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;