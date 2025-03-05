import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/v1/comments";

// Create a new comment
export const createComment = createAsyncThunk(
  "comments/create",
  async (commentData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/`, commentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create comment."
      );
    }
  }
);

// Get all comments
export const getAllComments = createAsyncThunk(
  "comments/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch comments."
      );
    }
  }
);

// Update a comment
export const updateComment = createAsyncThunk(
  "comments/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update comment."
      );
    }
  }
);

// Delete a comment
export const deleteComment = createAsyncThunk(
  "comments/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete comment."
      );
    }
  }
);
