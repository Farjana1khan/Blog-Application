import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import BlogForm from './Components/BlogForm';
import BlogDetail from './Components/BlogDetail';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PrivateRoute from './Components/PrivateRoute'; // Import PrivateRoute

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected Route for Adding Blog Posts */}
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <BlogForm />
            </PrivateRoute>
          }
        />
       
      </Routes>
    </Router>
  );
}

export default App;
