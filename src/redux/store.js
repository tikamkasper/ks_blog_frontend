import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice.js";
// import blogReducer from "../features/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // blogs: blogReducer,
  },
});
