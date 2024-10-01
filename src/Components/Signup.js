import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '', firebase: '' });
  const navigate = useNavigate(); // Use navigate for redirect

  const validateEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    let valid = true;

    // Reset error state
    setError({ email: '', password: '', firebase: '' });

    // Basic form validation
    if (!validateEmail(email)) {
      setError((prev) => ({ ...prev, email: 'Please enter a valid email.' }));
      valid = false;
    }

    if (password.length < 6) {
      setError((prev) => ({ ...prev, password: 'Password should be at least 6 characters.' }));
      valid = false;
    }

    if (!valid) return;

    try {
      // Create a new user
      await createUserWithEmailAndPassword(auth, email, password);

      // After signup, redirect to the login page
      navigate('/login');
    } catch (error) {
      setError((prev) => ({ ...prev, firebase: error.message })); // Display any signup error from Firebase
    }
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
        
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={`mt-1 block w-full px-4 py-2 border ${error.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
        
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`mt-1 block w-full px-4 py-2 border ${error.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
           
            />
            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
          </div>
          
          {/* General Firebase error message */}
          {error.firebase && <p className="text-red-500 text-center">{error.firebase}</p>}
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
