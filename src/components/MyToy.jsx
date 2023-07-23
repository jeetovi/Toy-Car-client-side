 
 import { Link } from 'react-router-dom';
import images from '../assets/all-images/ava-2.jpg'
 
const MyToy = () => {
    return (
        <div >
        <div className="text-center   bg-emerald-200 py-1 mb-3">
            <h3 className="text-1xl text-orange-500"> info Services</h3>
            <h2 className="text-3xl text-orange-500">My Info section</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum reprehenderit cumque maxime itaque dolorum totam    </p>
        </div>
         

        <div className="hero mb-8   bg-base-200">
<div className="hero-content flex-col lg:flex-row">
<img src={images} className="max-w-sm rounded-lg shadow-2xl" />
<div className='lg:w-1/2 relative'>
    <h3 className='text-3xl text-orange-700 font bold'> My Toy Sections </h3>
  <h1 className="text-5xl font-bold">Box Office News!</h1>
  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
  <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
 {/* <Link to='/alltoy'><button >Get More Info</button></Link>  */}


{/* Open the modal using ID.showModal() method */}
<button className="btn btn-primary" onClick={()=>window.my_modal_2.showModal()}>Get More Info</button>
<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello! About Car.info </h3>
    <p className="py-4">
We have created a car database and our goal is for it to contain all kinds of data regarding cars. The purpose of the database is to make the car market more transparent and less complicated.

Examples of data are car specifications, classifieds, mileages and reviews. By structuring the data, we want to make it easier to find the right car, make correct car valuations, compare statistics, confirm a   history and find the right accessories.

The target group is everyone that has anything to do with cars, such as owners, buyers and sellers – both consumers and those that in any way work in the industry. We realise that it is a large and extensive task to build a car information website and we greatly appreciate suggestions on how we can improve.

</p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

</div>
</div>
</div>



                       
    </div>
    );
};

export default MyToy;