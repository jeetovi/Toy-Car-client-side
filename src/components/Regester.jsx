import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

 

const Regester = () => {
    const {user,createUser} = useContext(AuthContext)
    console.log(user,createUser)
    const handelerRegastation = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(name, email,password)

        createUser(email, password)
        .then((result) => {
            // Signed in 
            const loguser = result.user;
            console.log(loguser)
            form.reset();
            // ...
          })
          .catch((error) => {
           
           console.log(error)
            // ..
          });

    }
    
    return (


      

<div>
<div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Regester  now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.  </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelerRegastation} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="photo" name="photo" placeholder="photo" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <Link  to='/login' className="label-text-alt link link-hover">Alrady Haven Account !</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Regester</button>
              </div>
            </form>
          </div>
        </div>
        

      </div>




  {/*  Tabs sections */}
<div>   <h1 className='py-6 text-3xl text-gray-700 font bold items-center text-center'>Tab Section</h1>
              
              <div className="sm:hidden ">
                  <label  className="sr-only">Select your country</label>
                  <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Profile</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                  </select>
              </div>
              <ul className="hidden text-sm font-medium py-8 text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                  <li className="w-full">
                      <Link to='/chackout' className="inline-block w-full p-4 text-gray-900 bg-yellow-500 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">All Toy</Link>
                  </li>
                  <li className="w-full ">
                      <Link to='/atoy' className="inline-block w-full p-4 bg-blue-500 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Dashboard</Link>
                  </li>
                  <li className="w-full">
                      <Link to="/blog" className="inline-block w-full p-4 bg-red-500 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Blog</Link>
                  </li>
                  <li className="w-full">
                      <Link  to='/mytoy' className="inline-block w-full p-4  bg-purple-500 rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Mytoy</Link>
                  </li>
              </ul>
              
                      </div>
</div>

      
   
    );
};

export default Regester;