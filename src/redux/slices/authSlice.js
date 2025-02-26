import { createSlice } from "@reduxjs/toolkit";
import { sendOtp, verifyOtp } from "../thunks/authThunk.js";
import { LOADING } from "../constants.js";

const initialState = {
  user: null,
  loading: LOADING.IDLE,
  error: null,
  isAuthenticated: false,
  isOtpSend: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 Send OTP Cases
      .addCase(sendOtp.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
        state.isOtpSend = false;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = LOADING.SUCCEEDED;
        state.isOtpSend = true; // OTP sent successfully
        state.error = null;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.isOtpSend = false;
        state.error = action.payload;
      })

      // 🔹 Verify OTP Cases
      .addCase(verifyOtp.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.otpSent = false; // Reset OTP status
        state.error = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
export const { clearError, logout } = authSlice.actions;
