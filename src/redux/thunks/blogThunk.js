import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/v1/blogs";

// Fetch all blogs by admin or user
export const fetchAllBlogs = createAsyncThunk(
  "blogs/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch blogs."
      );
    }
  }
);

// Fetch verified blogs by gust user
export const fetchVerifiedBlogs = createAsyncThunk(
  "blogs/fetchVerified",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/verified`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch verified blogs."
      );
    }
  }
);

// Fetch blog by ID => gustUser, user, admin
export const fetchBlogById = createAsyncThunk(
  "blogs/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch single blog."
      );
    }
  }
);

// Create a new blog => user, admin
export const createBlog = createAsyncThunk(
  "blogs/create",
  async (blogData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/`, blogData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to create new blog."
      );
    }
  }
);

// Update a blog => user, admin
export const updateBlog = createAsyncThunk(
  "blogs/update",
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to update blog"
      );
    }
  }
);

// Delete a blog => only admin
export const deleteBlog = createAsyncThunk(
  "blogs/delete",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return {
        success: response.data.success,
        message: response.data.message,
        blogId: id,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to delete blog"
      );
    }
  }
);
