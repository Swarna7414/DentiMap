import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import login from "../asserts/login.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  
  const navigate=useNavigate();
  const [email,setemail]=useState<string>("");
  const [password,setpassword]=useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const HandleSubmit =(e:React.FormEvent)=>{
    e.preventDefault();
    console.log("User Loged in ",email);
  }


  return (
    <div className="flex min-h-screen">
      {/* Left Side of the Form ra puka*/}
      <div className="flex-1 flex items-center justify-center bg-white px-6 md:px-12 text-black">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="text-sm text-gray-600">Please enter your details</p>

          <form className="space-y-4">
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                onChange={(e)=>setemail(e.target.value)}
                required
              />
            </div>

            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 pr-10"
                  onChange={(e)=>setpassword(e.target.value)}
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-black"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15}/>}
                </div>
              </div>
            </div>

            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember for 30 days
              </label>
              <a href="#" className="hover:underline hover:text-blue-700 transition-all duration-300">
                Forgot password
              </a>
            </div>

            
            <button
              type="submit"
              className="w-full bg-white border-2 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Sign in
            </button>

            
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>

            
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <FcGoogle size={20} />
              Sign in with Google
            </button>

            
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{"  "}
              <span className="hover:underline hover:cursor-pointer hover:text-blue-700 transition-all duration-300" onClick={()=>{navigate("/signup")}}>
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>

      
      <div className="hidden md:block md:w-[45%] bg-gray-200 blur-sm max-h-screen">
        <img
          src={login}
          alt="Login image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default LoginPage;