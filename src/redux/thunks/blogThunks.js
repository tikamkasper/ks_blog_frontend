import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch verified blogs
export const fetchVerifiedBlogs = createAsyncThunk(
  "blogs/fetchVerifyBlogs",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/blogs/get",
        {},
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch blogs"
      );
    }
  }
);
