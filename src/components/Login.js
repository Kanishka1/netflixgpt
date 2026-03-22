import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src="/netflix-bg.jpg" alt="login-logo"></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
        {!isSignInForm && (
          <input
            type="number"
            placeholder="Mobile Number"
            className="p-2 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={() => toggleSignInForm()}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already registered ? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
