import { useEffect, useState } from "react";
import AllToyaCard from "./AllToyaCard";
import AToyCard from "./AToyCard";
 
 

const AToy = () => {
    const [cards, AtoysServices] = useState([])
    useEffect(() => {
        fetch('Atoy.json')
        .then(res => res.json())
        .then(data => AtoysServices(data))
    },[])
    return (
        <div className="mt-4 mb-4">
        <div className="text-center">
            <h3 className="text-1xl text-orange-500"> Our Services</h3>
            <h2 className="text-3xl text-orange-500">Our Service Area </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum reprehenderit cumque maxime itaque dolorum totam {cards.length}  </p>
        </div>
        <div className="grid grid-cols-1    gap-6">
          {
            cards.map(card => <AToyCard
            key={card._id}
            card={card}
            ></AToyCard>)
          }
        </div>
        
    </div>
    );
};

export default AToy;