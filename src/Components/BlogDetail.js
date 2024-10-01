import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const blogs = useSelector((state) => state.blogs); // Access the Redux state
  const blog = blogs.find((b) => b.id === parseInt(id)); // Find the blog by ID

  if (!blog) {
    return <p className="text-center text-red-500 font-bold">Blog not found.</p>;
  }

  return (
    <div className=" container mx-auto py-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-60 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="font-bold text-4xl mb-4">{blog.title}</h2>
          <p className="text-gray-800 mb-4 text-lg">{blog.description}</p>
       
         
        
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
