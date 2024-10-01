import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"; // Import Link for navigation
import { updateBlog, deleteBlog } from "../features/blogSlice";

const Home = () => {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  // state to blog edited
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedImage, setUpdatedImage] = useState(null);

  // Error state for validation
  const [errors, setErrors] = useState({});

  const handleUpdate = (blog) => {
    setEditingBlogId(blog.id);
    setUpdatedTitle(blog.title);
    setUpdatedDescription(blog.description);
    setUpdatedImage(blog.image); // Load the current image
    setErrors({}); // Clear previous errors when updating starts
  };

  const validateForm = () => {
    const newErrors = {};
    if (!updatedTitle) newErrors.title = "Title is required.";
    if (!updatedDescription) newErrors.description = "Description is required.";
    return newErrors;
  };

  const handleSave = (e, id) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedBlog = {
      id,
      title: updatedTitle,
      description: updatedDescription,
      image: updatedImage,
    };

    dispatch(updateBlog(updatedBlog));
    setEditingBlogId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setUpdatedImage(objectUrl);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">All Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-center text-xl text-gray-500">
          No blogs available. Please add some blogs!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-gray-300 rounded-lg p-6 shadow-lg"
            >
              {editingBlogId === blog.id ? (
                <form onSubmit={(e) => handleSave(e, blog.id)}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
                    <input
                      type="text"
                      value={updatedTitle}
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                      className={`block w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200`}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm">{errors.title}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Blog Description</label>
                    <textarea
                      value={updatedDescription}
                      onChange={(e) => setUpdatedDescription(e.target.value)}
                      className={`block w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200`}
                      rows="4"
                      wrap="soft"
                      style={{ resize: 'vertical', overflow: 'auto' }}
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm">{errors.description}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                    <input
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      className="block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {updatedImage && (
                    <img
                      src={updatedImage}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                  )}
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500 transition duration-200 px-4"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <>
                  <Link to={`/blog/${blog.id}`}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                    <h3 className="font-bold text-2xl mb-4">{blog.title}</h3>
                    <p className="text-gray-700 mb-6 text-xl">
                      {blog.description.length > 30
                        ? blog.description.slice(0, 30) + "..."
                        : blog.description}
                    </p>
                  </Link>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleUpdate(blog)}
                      className="bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-600 transition duration-200 px-4"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-red-700 text-white font-semibold py-2 rounded hover:bg-red-600 transition duration-200 px-4"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
