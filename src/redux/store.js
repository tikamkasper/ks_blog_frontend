import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice.js";
import userReducer from "../redux/slices/userSlice.js";
import blogReducer from "../redux/slices/blogSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    blogs: blogReducer,
  },
});
