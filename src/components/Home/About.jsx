 
import { Link } from 'react-router-dom';
import img1 from '../../../src/assets/all-images/ava-1.jpg'
const About = () => {
    return (
        <div>
            <h1 className='py-6 text-3xl text-orange-700 font bold items-center text-center'> About Section</h1>
             

            <div className="hero    bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='lg:w-1/2 relative'>
        <h3 className='text-3xl text-orange-700 font bold'> About Us</h3>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <Link to='/mytoy'> <button className="btn btn-primary">Get More Info</button></Link>






     
    </div>
  </div>
</div>
        </div>
         
    );
};

export default About;