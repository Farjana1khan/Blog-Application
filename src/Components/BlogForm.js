import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../features/blogSlice';
import { useNavigate } from 'react-router-dom';

const BlogForm = ({ currentBlog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id] = useState(currentBlog ? currentBlog.id : Date.now());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({}); // For handling form errors

  useEffect(() => {
    if (currentBlog) {
      setTitle(currentBlog.title);
      setDescription(currentBlog.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [currentBlog]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Blog title is required.';
    }

    if (!description.trim()) {
      newErrors.description = 'Blog description is required.';
    }

    if (!image) {
      newErrors.image = 'Image is required.';
    } else if (!['image/jpeg', 'image/png', 'image/jpg'].includes(image.type)) {
      newErrors.image = 'Please select a valid image file (jpg, jpeg, or png).';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // If there are no errors, the form is valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop the submission if validation fails
    }

    const newBlog = {
      id,
      title,
      description,
      image: image ? URL.createObjectURL(image) : null,
    };

    dispatch(addBlog(newBlog));
    setTitle('');
    setDescription('');
    setImage(null);
    navigate('/');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded border-gray-50 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">
      Add New Blog
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">
          Blog Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`block w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200`}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">
          Blog Description
        </label>
        <textarea
          id="description"
          placeholder="Write your blog description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`block w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200`}
          rows="5"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="image">
          Blog Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className={`block w-full border ${errors.image ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200`}
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
