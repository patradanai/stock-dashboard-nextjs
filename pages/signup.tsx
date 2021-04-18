import React from "react";
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
import Divider from "../src/components/DividerLine";
import FacebookIcon from "../src/components/icons/facebook";
import GoogleIcon from "../src/components/icons/google";

const SignUpPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
      <div
        className="rounded-md bg-white px-24 pt-16 pb-8"
        style={{ maxWidth: 680, width: "100%" }}
      >
        <div className="text-center text-4xl">SingUp</div>
        <Formik
          initialValues={{ email: "", name: "", password: "", repassword: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            name: Yup.string().required(),
            password: Yup.string().min(8).required("Password is required"),
            repassword: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "Passwords must match"
            ),
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
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col my-3">
                <label htmlFor="email" className="my-2">
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
                  {errors.email && touched.email ? errors.email : null}
                </p>
              </div>
              <div className="flex flex-col my-3">
                <label htmlFor="name" className="my-2">
                  Full name
                </label>
                <input
                  className="bg-gray-100 h-14 rounded-md border border-gray-300 py-1 px-3 focus:bg-white"
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="@FullName"
                />
                <p className="text-red-400">
                  {errors.name && touched.name ? errors.name : null}
                </p>
              </div>
              <div className="flex flex-col my-3">
                <label htmlFor="password" className="my-2">
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
                  {errors.password && touched.password ? errors.password : null}
                </p>
              </div>
              <div className="flex flex-col my-3">
                <label htmlFor="repassword" className="my-2">
                  Retype Password
                </label>
                <input
                  className="bg-gray-100 h-14 rounded-md border border-gray-300 py-1 px-3 focus:bg-white"
                  type="password"
                  id="repassword"
                  name="repassword"
                  onChange={handleChange}
                  value={values.repassword}
                  placeholder="@Retype Password"
                />
                <p className="text-red-400">
                  {errors.repassword && touched.repassword
                    ? errors.repassword
                    : null}
                </p>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="h-14 rounded-md text-white font-semibold p-2 w-full bg-gradient-to-r from-black to-black hover:from-green-400 hover:to-blue-500"
                  disabled={isSubmitting}
                >
                  Signup
                </button>
              </div>
            </form>
          )}
        </Formik>
        <Divider name="Or" />
        <div className="flex items-center justify-center space-x-3">
          <div className="w-14 h-14 flex items-center justify-center rounded-full cursor-pointer bg-blue-500 shadow-md bg-gradient-to-r from-blue-400 to-blue-400 hover:from-green-400 hover:to-blue-500">
            <FacebookIcon />
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full cursor-pointer bg-white shadow-md bg-gradient-to-r from-white to-white hover:from-green-400 hover:to-blue-500">
            <GoogleIcon />
          </div>
        </div>
        <div className="mt-5 text-left text-gray-400">
          <p>
            I already have
            <Link href="/signin">
              <a className="underline ml-1">a membership</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
