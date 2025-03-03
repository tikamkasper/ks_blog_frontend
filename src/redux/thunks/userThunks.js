import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create User
export const createUser = createAsyncThunk(
  "users/create",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        userData,
        { withCredentials: true }
      );
      return response?.data?.data?.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "User creation failed."
      );
    }
  }
);

// get all users
export const getAllUsers = createAsyncThunk(
  "users/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/get"
      );
      console.log("response", response);
      return response?.data?.data?.users;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to get all users."
      );
    }
  }
);
