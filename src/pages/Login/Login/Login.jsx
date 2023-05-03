import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
  useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedIn = result.user;
        console.log(loggedIn);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  const handleGoogleSignIn = () =>{
    signInWithGoogle().then(result=>{
      const loggedIn = result.user;
      console.log(loggedIn);
      navigate(from, { replace: true });
      form.reset();
    }).catch(error=>console.log(error))
  }

  const handleGithubSignIn = () =>{
    signInWithGithub().then(result=>{
      const loggedIn = result.user;
        console.log(loggedIn);
        navigate(from, { replace: true });
        form.reset();
    }).catch(error=>console.log(error))
  }



  return (
    <div className="hero-content my-container flex-col">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="input input-bordered"
            />
            <label className="label">
              <div className="label-text-alt">
                Dont’t Have An Account ?
                <Link className="link" to="/register">
                  Register
                </Link>
              </div>
            </label>
          </div>

          <div className="form-control mt-6 gap-2">
            <button className="btn btn-primary">Login</button>

            <p className="text-center font-bold">OR</p>

            <button onClick={handleGoogleSignIn} className="btn btn-outline">
              <FaGoogle className="mx-2 text-blue-500" /> Login with Google{" "}
            </button>
            <button onClick={handleGithubSignIn} className="btn btn-outline">
              <FaGithub className="mx-2 text-gray-500" /> Login with Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
