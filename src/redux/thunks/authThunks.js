import { createAsyncThunk } from "@reduxjs/toolkit";

// Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    console.log(" thunk:", userData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        userData,
        // { headers: { "Content-Type": "application/json" } },
        { withCredentials: true }
      );
      return response?.data?.data?.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to login."
      );
    }
  }
);

// if user is already logged in
export const getUser = createAsyncThunk("auth/getUser", async (thunkAPI) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/users/me",
      { headers: { "Content-Type": "application/json" } },
      { withCredentials: true }
    );
    return response?.data?.data?.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Failed to get user."
    );
  }
});

// logout user
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        { headers: { "Content-Type": "application/json" } },
        { withCredentials: true }
      );
      return response?.data?.data?.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to logout."
      );
    }
  }
);
