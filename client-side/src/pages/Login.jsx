import React, { useContext, useEffect, useState } from "react";
import {FaEnvelope,FaLock,FaGoogle,FaEyeSlash,FaRegEye} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/FirebaseContext";
import axios from "axios";

const Login = () => {
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { loginWithEmailPass, googleLogin, setUser, setLoading } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    //Login User
    loginWithEmailPass(email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;

        if (newUser) {
          setUser(newUser);
          Swal.fire({
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect email or password. Please try again",
          footer: err.message,
        });
        setLoading(false);
        e.target.reset();
      });
  };

  useEffect(() => {
    document.title = "LitShelf || Login";
  }, []);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
         const userData = {
          name: result?.user?.displayName,
          photoURL: result?.user?.photoURL,
          email: result?.user?.email,
        };
        axios
          .get(`${import.meta.env.VITE_baseURL}/users/all?email=${userData.email}`)
          .then((response) => {
            if (response.data?.exists) {
              // User already exists, just login
              setUser(result.user);
              Swal.fire({
                icon: "success",
                title: "Login successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(location.state || "/");
            } else {
              // If new user, save to DB
              axios
                .post(`${import.meta.env.VITE_baseURL}/users`, userData)
                .then((res) => {
                  if (res.data.insertedId) {
                    setUser(result.user);
                    Swal.fire({
                      icon: "success",
                      title: "Login successful",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate(location.state || "/");
                  }
                });
            }
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something Wrong ! Try again",
          footer: err.message,
        });
      });
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center'>
      <div
        className='p-8 rounded-lg shadow-lg w-full mt-10 bg-base-secondary dark:bg-darkBase-secondary max-w-md'>
        <h2 className="text-2xl font-bold text-center mb-6">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-IconText" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className='w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-InputRing'
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-IconText" />
            {!showPass ? (
              <button type="button" onClick={() => setShowPass(!showPass)}>
                <FaEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-IconText cursor-pointer" />
              </button>
            ) : (
              <button type="button" onClick={() => setShowPass(!showPass)}>
                <FaRegEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-IconText cursor-pointer" />
              </button>
            )}
            <input
              type={`${!showPass ? "password" : "text"}`}
              name="password"
              placeholder="Password"
              className='w-full pl-10 pr-4 py-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-InputRing'
              required
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-bgBtn hover:bg-hoverBtn text-white py-2 rounded-lg transition duration-200">
            Sign In
          </button>
        </form>
        <div className="flex items-center justify-center mt-4">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="w-full cursor-pointer bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200 flex items-center justify-center gap-2 mt-4">
          <FaGoogle />
          Sign in with Google
        </button>
        <p
          className='text-center text-sm mt-4'>
          Don't have an account?
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
