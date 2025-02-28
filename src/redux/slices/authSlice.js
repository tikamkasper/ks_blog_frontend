import { createSlice } from "@reduxjs/toolkit";
import { LOADING } from "../constants.js";
import { loginUser, logoutUser, getUser } from "../thunks/authThunks.js";

const initialState = {
  loading: LOADING.IDLE,
  user: null,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // login cases
      .addCase(loginUser.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      // if user is already logged in
      .addCase(getUser.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      // logout case
      .addCase(logoutUser.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = LOADING.IDLE;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
