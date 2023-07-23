import { useEffect, useState } from "react";
import AllToyaCard from "./AllToyaCard";
import { Link } from "react-router-dom";
 

 

const AllToy = () => {
    const [toys, toysServices] = useState([])
    useEffect(() => {
        fetch('CarData.json')
        .then(res => res.json())
        .then(data => toysServices(data))
    },[])
    return (
        <div className="mt-4 mb-4">
        <div className="text-center">
            <h3 className="text-1xl text-orange-500"> Our Services</h3>
            <h2 className="text-3xl text-orange-500">Our Service Area </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum reprehenderit cumque maxime itaque dolorum totam {toys.length}  </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                toys.map(toy => <AllToyaCard
                 key={toy. id}
                 toy= {toy}
                
                ></AllToyaCard>)
            }
        </div>
        
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
                      <Link to='/' className="inline-block w-full p-4 text-gray-900 bg-yellow-500 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Home</Link>
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

export default AllToy;