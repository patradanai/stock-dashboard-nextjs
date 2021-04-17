import React from "react";
import GoogleIcon from "../src/components/icons/google";
import FacebookIcon from "../src/components/icons/facebook";
const SignInPage = () => {
  return (
    <div className="w-full h-full bg-gray-200">
      <div className="flex items-center justify-center">
        <div
          className="flex flex-col rounded-md bg-white px-24 pt-16 pb-8"
          style={{ maxWidth: 680, width: "100%" }}
        >
          <div className="text-center">
            <p className="text-4xl pb-14">Sign In With</p>
            <div className="flex space-x-5 justify-center mb-5">
              <button className="w-full flex justify-center items-center h-16 bg-blue-400 text-white py-2 px-3 rounded shadow-md text-lg">
                <FacebookIcon className="mr-3" />
                Facebook
              </button>
              <button className="w-full flex justify-center items-center h-16 text-black py-2 px-3 rounded shadow-md text-lg">
                <GoogleIcon className="mr-3" /> Google
              </button>
            </div>
          </div>
          <label className="pt-4 pb-3">Email</label>
          <input
            className="bg-gray-100 h-14 rounded-md border border-gray-300 p-1"
            type="email"
            id="email"
            name="email"
          />
          <label className="pt-4 pb-3">Password</label>
          <input
            className="bg-gray-100 h-14 rounded-md border border-gray-300 p-1"
            type="password"
            id="password"
            name="password"
          />
          <div className="mt-4">
            <button
              className="h-14 rounded-md text-white font-semibold p-2 w-full"
              style={{ background: "#333" }}
            >
              Signin
            </button>
          </div>

          <div className=" mt-14 text-center text-gray-400">
            <p>
              Not a member? <span className="underline ">signup now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
