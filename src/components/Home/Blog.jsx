import { Link } from "react-router-dom";

 

const Blog = () => {
    return (
        <div>
            <h1 className='py-6 text-3xl text-gray-700 font bold items-center text-center'>Blog section</h1>
         <h3 className="text-2xl">Q. What is SQL?</h3>
<p className="  text-gray-900 dark:text-white"> <span className="text-2xl"> Answer: </span>
SQL is a domain-specific language used to query and manage data. It works by allowing users to query, insert, delete, and update records in relational databases. SQL also allows for complex logic to be applied through the use of transactions and embedded procedures such as stored functions or views. </p>
<br />
<h3 className="text-2xl">Q.  Why NoSQL is Used Over SQLL?</h3>
<p className="  text-gray-900 dark:text-white"> <span className="text-2xl"> Answer: </span>

NoSQL is preferred over SQL in many cases because it offers more flexibility and scalability. The primary benefit of using a NoSQL system is that it provides developers with the ability to store and access data quickly and easily, without the overhead of a traditional relational database. As a result, development teams can focus on delivering features and core business logic faster, without worrying about the underlying data storage implementation.  </p>
<br />
<h3 className="text-2xl">Q. What is Express.js?</h3>
<p className="  text-gray-900 dark:text-white"> <span className="text-2xl"> Answer: </span>

Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks. To learn more about Express and what it can do, visit the   </p>
<br />
<h3 className="text-2xl">Q. What is Node.js?</h3>
<p className="  text-gray-900 dark:text-white"> <span className="text-2xl"> Answer: </span>
What is Node.js?
Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the  browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model. </p>
<br />
<h3 className="text-2xl">Q. what is MongoDB aggregate and how does work?</h3>
<p className="  text-gray-900 dark:text-white"> <span className="text-2xl"> Answer: </span>
Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline </p>
<br />
   
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
                      <Link to="/blog" className="inline-block w-full p-4 bg-red-500 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Home</Link>
                  </li>
                  <li className="w-full">
                      <Link  to='/mytoy' className="inline-block w-full p-4  bg-purple-500 rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Mytoy</Link>
                  </li>
              </ul>
              
                      </div>
        </div>
    );
};

export default Blog;