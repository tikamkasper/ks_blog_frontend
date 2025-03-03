import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice.js";
import { verifiedBlogReducer } from "../redux/slices/blogSlice.js";
import userReducer from "../redux/slices/userSlice.js";
// import blogReducer from "../features/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    verifiedBlogs: verifiedBlogReducer,

    // blogs: blogReducer,
  },
});
