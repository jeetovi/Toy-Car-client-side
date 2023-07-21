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
    );
};

export default Regester;