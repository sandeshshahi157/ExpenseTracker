import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateLoginForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://192.168.75.92:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // If login is successful, redirect the user to the dashboard or another page
      window.location.href = '/dashboard'; // Assuming '/dashboard' is the route after successful login
    } catch (error) {
      setErrorMessage('Invalid email or password');
    }
    // Validate Email using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      displayErrorMessage("Invalid email address.");
      return;
    }

    // Validate Password presence
    if (password === '') {
      displayErrorMessage("Password is required.");
      return;
    }

   
    showLoadingOverlay();
  };

  const showLoadingOverlay = () => {
  
    setTimeout(() => {
      history.push('/dashboard');
    }, 2000);
  };

  const displayErrorMessage = (message) => {
    setErrorMessage(message);

    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
  };

  return (
    <div className="w-screen h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-28 grid lg:grid-cols-2 lg:gap-28">
        <div className="flex flex-col justify-center">
          <img src="src/assets/svg_1.svg" alt="alt" />
        </div>
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign in
            </h2>
            <div className="pt-3 pb-3">
              {errorMessage && (
                <div style={{ color: 'red' }}>{errorMessage}</div>
              )}
            </div>
            <form
              className="mt-8 space-y-6"
              onSubmit={validateLoginForm}
              method="post"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    name="remember"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="ms-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-500 dark:text-gray-400"
                  >
                    Remember this device
                  </label>
                </div>
                <a
                  href="#"
                  className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Not registered yet?{' '}
                <Link
                  to={'/signup'}
                  className="pl-3 text-blue-600 hover:underline dark:text-blue-500"
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;



