import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/v1/users";

// Create User
export const createUser = createAsyncThunk(
  "users/create",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, userData, {
        withCredentials: true,
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "User creation failed."
      );
    }
  }
);

// Get All Users
export const getAllUsers = createAsyncThunk(
  "users/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/get`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to get all users."
      );
    }
  }
);

// Update User
export const updateUser = createAsyncThunk(
  "users/update",
  async ({ userId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/update/${userId}`,
        updatedData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "User update failed."
      );
    }
  }
);

// Delete User
export const deleteUser = createAsyncThunk(
  "users/delete",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/delete/${userId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "User deletion failed."
      );
    }
  }
);
