import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'; // Use to check if user is logged in

const Navbar = () => {
  const [user] = useAuthState(auth); // user's authentication state
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign out
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto  py-6 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-all">
            Blog App
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          {user ? (
            <div className="flex space-x-4 items-center">
              <Link
                to="/add"
                className="text-white text-lg font-medium hover:text-gray-300 transition-all"
              >
                Add Blog
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                              className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-400"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
