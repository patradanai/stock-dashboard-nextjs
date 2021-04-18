import React from "react";
import Link from "next/link";
import GoogleIcon from "../src/components/icons/google";
import FacebookIcon from "../src/components/icons/facebook";
import { Formik } from "formik";
import * as Yup from "yup";

const SignInPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
      <div
        className="rounded-md bg-white px-10 sm:px-24 pt-16 pb-8"
        style={{ maxWidth: 680, width: "100%" }}
      >
        {/* Header */}
        <div className="text-center">
          <p className="text-4xl pb-14">Sign In With</p>
          <div className="flex flex-col sm:flex-row items-center justify-center mb-5 ">
            <button className="w-full flex justify-center m-2 items-center h-16 text-white py-2 px-3 rounded shadow-md text-lg bg-gradient-to-r from-blue-500 to-blue-500 hover:from-green-400 hover:to-blue-500">
              <FacebookIcon className="mr-3" />
              Facebook
            </button>
            <button className="w-full flex justify-center m-2 items-center h-16 text-black py-2 px-3 rounded shadow-md text-lg bg-gradient-to-r from-white to-white hover:from-green-400 hover:to-blue-500">
              <GoogleIcon className="mr-3" /> Google
            </button>
          </div>
        </div>
        {/* Form */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 500);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            isSubmitting,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex flex-col">
                <label htmlFor="email" className="pt-4 pb-2 font-mono">
                  Email
                </label>
                <input
                  className="bg-gray-100 h-14 rounded-md border border-gray-300 py-1 px-3 focus:bg-white"
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="@Email"
                />
                <p className="text-red-400">
                  {errors.email ? errors.email : null}
                </p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="pt-4 pb-2 font-mono">
                  Password
                </label>
                <input
                  className="bg-gray-100 h-14 rounded-md border border-gray-300 py-1 px-3 focus:bg-white"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  placeholder="@Password"
                />
                <p className="text-red-400">
                  {errors.password ? errors.password : null}
                </p>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="h-14 rounded-md text-white font-semibold p-2 w-full bg-gradient-to-r from-black to-black hover:from-green-400 hover:to-blue-500"
                  disabled={isSubmitting}
                >
                  Signin
                </button>
              </div>

              <div className=" mt-14 text-center text-gray-400">
                <p>
                  Not a member?
                  <Link href="/signup">
                    <a className="underline ml-1">signup now</a>
                  </Link>
                </p>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInPage;
