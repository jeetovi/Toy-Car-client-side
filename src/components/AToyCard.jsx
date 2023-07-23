import { Link } from "react-router-dom";

 
 
 const AToyCard = ({card}) => {
    const {Price,Image} = card;
    return (
      <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={Image}  className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
     <h2>Price : {Price}</h2>
    
    <div className="card-actions">
      <Link to='/alltoy'>
      <button className="btn h-1 btn-outline bg-orange-100">Buy Now</button>

      </Link>
    </div>
    
  </div>
</div>
 
        </div>
    );
 };
 
 export default AToyCard;