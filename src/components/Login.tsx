import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Login to Reichman Insider</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <div className="flex items-center border rounded-md">
            <User className="h-5 w-5 text-gray-400 ml-3" />
            <input
              type="email"
              id="email"
              className="w-full p-2 pl-3 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <div className="flex items-center border rounded-md">
            <Lock className="h-5 w-5 text-gray-400 ml-3" />
            <input
              type="password"
              id="password"
              className="w-full p-2 pl-3 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Log In
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
      </p>
    </div>
  );
};

export default Login;