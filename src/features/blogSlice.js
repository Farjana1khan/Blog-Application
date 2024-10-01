import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    updateBlog: (state, action) => {
      const index = state.findIndex((blog) => blog.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload }; // Ensuring immutability
      }
    },
    addBlog: (state, action) => {
      state.push(action.payload);
    },
  
    deleteBlog: (state, action) => {
      return state.filter((blog) => blog.id !== action.payload); // Remove blog by ID
    },
  },
});

// Export actions
export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;

// Export reducer
export default blogSlice.reducer;
