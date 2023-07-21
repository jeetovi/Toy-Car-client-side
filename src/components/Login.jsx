import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

 

const Login = () => {
    const {signIn,signInWithGoogle} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email, password)
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
    // Google Login
    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(result => {
        const loggeUser = result.user;
        console.log(loggeUser)
      })
      .catch(error => {
        console.log(error)
      })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.  </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
            <button onClick={handleGoogleSignIn} className="btn no-animation">Sign In With Google</button>
            </div>
            <Link to='/regestation'>
                <button className="btn bg-orange-400 btn-active btn-link">New to this wesite</button>
            </Link>
           
          </div>
        </div>
      </div>
    );
};

export default Login;