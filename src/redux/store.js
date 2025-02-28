import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice.js";
import { verifiedBlogReducer } from "../redux/slices/blogSlice.js";
// import blogReducer from "../features/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    verifiedBlogs: verifiedBlogReducer,
    // blogs: blogReducer,
  },
});
