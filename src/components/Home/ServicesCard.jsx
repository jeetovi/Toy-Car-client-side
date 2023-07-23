import { Link } from "react-router-dom";
 
 

const ServicesCard = ({service}) => {
    const {_id,title,icon,desc,img,price} =service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img}  className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <h2>Price : {price}</h2>
    <p>{desc}</p>
    <div className="card-actions">
      <Link to='/chackout'>
      <button className="btn h-1 btn-outline bg-orange-100">Buy Now</button>

      </Link>
    </div>
  </div>
</div>
 
        </div>
    );
};

export default ServicesCard;