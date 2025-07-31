import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmpassword, setConfirmPassword] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password, confirmPassword: confirmpassword })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('isLoggedIn', 'true');  // just setting login flag
      setIsLoggedIn(true);
      navigate("/rooms");
    } else {
      alert(data.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f8fd] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Create an account
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your email
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              required
              className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
              className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              required
              className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-500">
              I accept the{' '}
              <a href="#" className="text-indigo-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Create an account
          </button>
          <p className="text-sm text-center text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
