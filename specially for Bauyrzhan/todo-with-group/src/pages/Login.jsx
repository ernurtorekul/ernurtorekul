import React, { useState, useEffect } from "react";
import "../App.css";
import Favicon from "../assets/images/favicon.ico";

function toggleShowPassword(passwordInputId, showPasswordId) {
  const passwordInput = document.getElementById("passwordInputId");
  const showPassword = document.getElementById("showPasswordId");

  showPassword.addEventListener("change", function () {
    if (this.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
}

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (event) => {
    setShowPassword(event.target.checked);
  };

  return (
    <div className="alltogether flex">
      <div className="left-side w-5/12 h-screen bg-black">
        <h1>photo</h1>
      </div>

      <div className="right-side flex-grow">
        <div className="login-input flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-9">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src={Favicon}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 p-2"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 p-2"
                  />
                </div>
                <div class="flex mt-4 items-center justify-between">
                  <div class="">
                    <input
                      id="showPassword"
                      type="checkbox"
                      onChange={handleShowPassword}
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                    <label
                      for="showPassword"
                      className="text-md font-semibold text-gray-600 ms-3 dark:text-neutral-500"
                    >
                      Show password
                    </label>
                  </div>
                  {/* forgot password                 */}
                  <div className="text-sm ">
                    <a
                      href="#"
                      className=" text-gray-600  text-gray-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              <div>
                <p>
                  By creating an account, you agree to our{" "}
                  <a href="#" className="underline text-indigo-600">
                    Terms of Service{" "}
                  </a>
                  and{" "}
                  <a href="#" className="underline text-indigo-600">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-semibold leading-6 text-indigo-500 hover:text-indigo-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
