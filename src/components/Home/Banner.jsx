import { Link } from "react-router-dom";
import avg1 from "../../../src/assets/all-images/slider-img/slider-1.jpg";
import avg2 from "../../../src/assets/all-images/slider-img/slider-2.jpg";
import avg3 from "../../../src/assets/all-images/slider-img/slider-3.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[400px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={avg1} className="w-full rounded-xl" />
          <div
            className="absolute flex items-center justify-between   transform -translate-y-1/2 left-0  
              h-full  <button className='btn btn-primary'>Car po</button>
                button-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] right-0 top-1/2"
          >
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white space-y-7   w-1/2">
              <h1 className="text-5xl font-bold  ">
                {" "}
                This is a Best Car MArkatplace{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima tenetur incidunt porro vero accusamus ipsa pariatur
                Tempore!
              </p>
              <div>
                <button className="btn btn-primary mr-5 mt-3">New Modle</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Modle
                </button>
              </div>
            </div>

            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={avg2} className="w-full rounded-xl" />{" "}
          <div
            className="absolute flex items-center justify-between   transform -translate-y-1/2 left-0  
              h-full  <button className='btn btn-primary'>Car po</button>
                button-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] right-0 top-1/2"
          >
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white space-y-7   w-1/2">
              <h1 className="text-5xl font-bold  ">
                {" "}
                This is a Best Car MArkatplace{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima tenetur incidunt porro vero accusamus ipsa pariatur
                Tempore!
              </p>
              <div>
                <button className="btn btn-primary mr-5 mt-3">New Modle</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Modle
                </button>
              </div>
            </div>

            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={avg3} className="w-full rounded-xl" />{" "}
          <div
            className="absolute flex items-center justify-between   transform -translate-y-1/2 left-0  
              h-full  <button className='btn btn-primary'>Car po</button>
                button-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] right-0 top-1/2"
          >
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white space-y-7   w-1/2">
              <h1 className="text-5xl font-bold  ">
                {" "}
                This is a Best Car MArkatplace{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima tenetur incidunt porro vero accusamus ipsa pariatur
                Tempore!
              </p>
              <div>
                <Link to="/alltoy">
                  <button className="btn btn-primary mr-5 mt-3">
                    New Modle
                  </button>
                </Link>
                <Link to="/alltoy">
                  <button className="btn btn-outline btn-secondary">
                    Latest Modle
                  </button>
                </Link>
              </div>
            </div>

            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
