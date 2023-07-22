 
 
 const AToyCard = ({card}) => {
    const {Price,Image} = card;
    return (
        <div className="carousel rounded-box">
        <div className="carousel-item">
          <img src={Image} alt="Burger" />
        </div> 
        <div className="carousel-item">
        <img src={Image} alt="Burger" />
        </div> 
        <div className="carousel-item">
        <img src={Image} alt="Burger" />
        </div> 
        <div className="carousel-item">
        <img src={Image} alt="Burger" />
        </div> 
        <div className="carousel-item">
        <img src={Image} alt="Burger" />
        </div> 
        <div className="carousel-item">
        <img src={Image} alt="Burger" />
        </div> 
        <div className="carousel-item">
        <img src={Image} alt="Burger" />
        </div>
      </div>
    );
 };
 
 export default AToyCard;