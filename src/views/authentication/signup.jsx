import React, { useState } from "react";
import "../authentication/authentication.css";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [marketingAccept, setMarketingAccept] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isValidName = (name) => {
    // Allow only letters and spaces in the name
    return /^[a-zA-Z\s]+$/.test(name);
  };

  const clearErrorMessages = () => {
    setErrorMessage("");
  };

  const validateForm = (e) => {
    e.preventDefault();

    // Clear previous error messages
    clearErrorMessages();

    // Validate First Name
    if (firstName.trim() === "") {
      displayErrorMessage("First Name is required.", "FirstName");
      return;
    }

    // Validate Last Name
    if (lastName.trim() === "") {
      displayErrorMessage("Last Name is required.", "LastName");
      return;
    }

    if (!isValidName(firstName)) {
      displayErrorMessage(
        "First Name should contain only letters and spaces.",
        "FirstName"
      );
      return;
    }

    // Validate Last Name
    if (!isValidName(lastName)) {
      displayErrorMessage(
        "Last Name should contain only letters and spaces.",
        "LastName"
      );
      return;
    }

    // Validate Email using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      displayErrorMessage("Invalid email address.", "Email");
      return;
    }

    // Validate Password length
    if (password.length < 6) {
      displayErrorMessage(
        "Password should be at least 6 characters long.",
        "Password"
      );
      return;
    }

    // Validate Password Confirmation
    if (password !== passwordConfirmation) {
      displayErrorMessage(
        "Password and confirmation do not match.",
        "PasswordConfirmation"
      );
      return;
    }

    // Validate Marketing Acceptance
    if (!marketingAccept) {
      displayErrorMessage(
        "You must accept marketing terms to proceed.",
        "MarketingAccept"
      );
      return;
    }

    // If all validations pass, allow the form submission
    // You can add your logic here to handle form submission
  };

  const displayErrorMessage = (message, fieldId) => {
    setErrorMessage(message);

    // Automatically clear the error message after 5 seconds (adjust as needed)
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };

  return (
    <>
      <section class="bg-white ">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12 sm:grid-cols-12   ">
          <aside class=" relative lg:mt-40 block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 ">
            <img
              alt="Pattern"
              src="src/assets/svg_5.svg"
              class=" relatve  object-fit "
            />
          </aside>

          <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 mainComp lg:px-16 lg:py-12 xl:col-span-6">
            <div class="max-w-xl lg:max-w-3xl">
              <h1 class="mt-6 text-2xl font-bold text-blue-500 sm:text-3xl md:text-4xl">
                Welcome to Expense Tracker
              </h1>

              <form
                action="signupProcess.jsp"
                onsubmit={validateForm}
                class="mt-8 grid grid-cols-6 gap-6"
                method="post"
              >
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="FirstName"
                    class="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    class="text-center focus:outline-none bg-gray-100 text-md h-11 mt-1 w-full rounded-md text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="LastName"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    class="text-center focus:outline-none bg-gray-100 text-md h-11 mt-1 w-full rounded-md border-gray-200 text-md text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    name="email"
                    class="text-center focus:outline-none bg-gray-100 text-md h-11 mt-1 w-full rounded-md border-gray-200 text-md text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="Password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    class="text-center focus:outline-none bg-gray-100 text-md text-md h-11 mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="PasswordConfirmation"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>
                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    class="text-center focus:outline-none bg-gray-100 text-md h-11 mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label for="MarketingAccept" class="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />
                    <span class="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div class="col-span-6">
                  <p class="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" class="text-gray-700 underline">
                      terms and conditions
                    </a>
                    and
                    <a href="#" class="text-gray-700 underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    type="submit"
                  >
                    Create an account
                  </button>
                  <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="login.jsp" class="pl-3 text-blue-500 underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
