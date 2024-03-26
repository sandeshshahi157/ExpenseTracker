import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../authentication/authentication.css";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const clearErrorMessages = () => {
    setErrorMessage("");
  };

  const validateForm = async (e) => {
    e.preventDefault();

    clearErrorMessages();

    try {
      // Validation for first name
      if (!firstName.trim()) {
        throw new Error("First name is required");
      }

      // Validation for last name
      if (!lastName.trim()) {
        throw new Error("Last name is required");
      }

      // Validation for email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        throw new Error("Invalid email address");
      }

      // Validation for password
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }

      // Validation for password confirmation
      if (password !== passwordConfirmation) {
        throw new Error("Passwords do not match");
      }

      // Send a request to the server to register the user
      const response = await axios.post("http://192.168.137.38:3000/register", {
        firstName,
        lastName,
        email,
        password,
      });

      

      console.log("User registered successfully:", response);

      // Redirect to the login page after successful registration
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12 sm:grid-cols-12">
          <aside className=" relative lg:mt-40 block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            {/* Your image component or path */}
            <img
              alt="Pattern"
              src="src/assets/svg_5.svg"
              className="relatve object-fit"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 mainComp lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-blue-500 sm:text-3xl md:text-4xl">
                Welcome to Expense Tracker
              </h1>

              <form onSubmit={validateForm} className="mt-8 grid grid-cols-6 gap-6">
                {/* First Name */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="text-center focus:outline-none bg-gray-100 text-md h-11 mt-1 w-full rounded-md border-gray-200 text-md text-gray-700 shadow-sm"
                  />
                </div>

                {/* Last Name */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="text-center focus:outline-none bg-gray-100 text-md h-11 mt-1 w-full rounded-md border-gray-200 text-md text-gray-700 shadow-sm"
                  />
                </div>

                {/* Email */}
                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-center focus:outline-none bg-gray-100 text-md h-11 mt-1 w-full rounded-md border-gray-200 text-md text-gray-700 shadow-sm"
                  />
                </div>

                {/* Password */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-center focus:outline-none bg-gray-100 text-md text-md h-11 mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {/* Password Confirmation */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                    Password Confirmation
                  </label>
                  <input
                    type="password"
                    id="PasswordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className="text-center focus:outline-none bg-gray-100 text-md h-11 mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {/* Error Message */}
                <div className="col-span-6">
                  {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </div>

                {/* Terms and Conditions */}
                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline">
                      terms and conditions
                    </a>
                    and
                    <a href="#" className="text-gray-700 underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                {/* Submit Button and Login Link */}
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an

                    Already have an account?
                    <Link to={"/login"} className="pl-3 text-blue-500 underline">
                      Log in
                    </Link>
</p>
</div>
</form>
</div>
</main>
</div>
</section>
</>
  );
}

  export default SignUpForm