import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        setIsLoggedIn(true); // 👈 update login state
        navigate("/rooms");
      } else {
        setErrorMsg(data.error || "Invalid username or password");
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Try again later.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-transparent border border-gray-300 rounded-full py-3 px-5 mb-4 outline-none focus:border-gray-500"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-gray-300 rounded-full py-3 px-5 mb-2 outline-none focus:border-gray-500"
            type="password"
            placeholder="Enter your password"
            required
          />

          {errorMsg && (
            <p className="text-red-600 text-sm mb-4 text-center">{errorMsg}</p>
          )}

          <div className="text-right text-sm mb-4">
            <a className="text-blue-600 underline" href="#">
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-full transition duration-300"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-sm pt-1 pr-2 mt-4">
          Don’t have an account?{' '}
          <Link to={'/signup'} className="text-blue-500 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
