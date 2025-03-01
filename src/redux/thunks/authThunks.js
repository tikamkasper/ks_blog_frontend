import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        userData,
        { withCredentials: true }
      );
      return response?.data?.data?.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to login."
      );
    }
  }
);

// if user is already logged in
export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/users/me", {
      withCredentials: true,
    });
    return response?.data?.data?.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Failed to get user."
    );
  }
});

// Logout User
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        {
          withCredentials: true,
          credentials: "include",
        }
      );

      return response?.data?.data?.user;
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to logout."
      );
    }
  }
);
