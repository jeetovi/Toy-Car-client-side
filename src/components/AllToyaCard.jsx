import { Link } from "react-router-dom";

const AllToyaCard = ({ toy }) => {
  const {
    id,
    brand,
    rating,
    carName,
    price,
    seatType,
    automatic,
    model,
    speed,
    gps,
    description,
    imgUrl,
    love,
    Rimg,
    eye,
  } = toy;
  return (
    <div>
      <body className="h-screen bg-gray-300 flex items-center justify-center">
        <div
          className=" bg-white text-gray-800
        w-72 min-h[10rem]
        shadow-lg rounded-md overflow-hidden"
        >
          <img className="w-full h-full object-cover" src={imgUrl} alt="car" />

          <div className="p-5 flex-col pag-3">
            {/* badge */}
            <div className="flex items-center gap-2">
              <span className=" px-3 py-1 rounded-full text-xs bg-gray-400">
                <h3>{brand} Brand</h3>
              </span>

              <span className=" px-3 py-1 rounded-full text-xs bg-gray-400">
                <h3>{model}</h3>
              </span>
              <span className=" px-3 py-1 rounded-full text-xs bg-gray-400">
                <h3>Id:{id}</h3>
              </span>
            </div>
            <span>
              {" "}
              <p className="py-2">Gps:{gps}</p>
            </span>
            {/* Product title */}
            <h2 className="font-semibold text-3xl mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
              {carName}
            </h2>
            {/* price 
d */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">
                {" "}
                Rp 400.00 $
              </span>
              <span className=" bg-green-500 px-1 py-0.5 rounded-md text-xs text-white">
                {" "}
                Save 20%
              </span>
            </div>
          </div>

          {/* products ratting  */}
          <span className="flex items-center mt-1">
            <img className="opacity-50 w-20 ml-5" src={Rimg} alt="" />
            <span className="text-xs ml-2 to-gray-500">20k reviews</span>
          </span>
          {/* product  */}
          <div className="mt-5 flex py-3  ml-2 pr-2 gap-2">
            <Link to="/chackout">
              <button className=" hover:bg-red-400/80 px-6 py-2 rounded-md to-white font-medium tracking-wider transition  bg-yellow-500/80">
                Add to chart
              </button>{" "}
            </Link>
            <button className="flex-grow justify-center items-center bg-red-300/60 hover:bg-gray-50 transition rounded-md">
              <img
                className="opacity-50 w-6 ml-4 items-center"
                src={love}
                alt=""
              />
            </button>
            <button className="flex-grow justify-center items-center bg-gray-400/60 hover:bg-gray-50 transition rounded-md">
              <img className="opacity-50 w-6 ml-4" src={eye} alt="" />
            </button>
          </div>
        </div>
      </body>
    </div>
  );
};

export default AllToyaCard;
