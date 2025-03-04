import { createSlice } from "@reduxjs/toolkit";
import { LOADING } from "../constants.js";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../thunks/userThunk.js";

const initialState = {
  success: null,
  message: "",
  usersCount: 0,
  users: [],
  loading: LOADING.IDLE,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = "";
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create User
      .addCase(createUser.pending, (state) => {
        state.loading = LOADING.LOADING;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.users.push(action.payload.data.createdUser);
        state.usersCount += 1;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })

      // Get All Users
      .addCase(getAllUsers.pending, (state) => {
        state.loading = LOADING.LOADING;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.success = action.payload.success;
        state.users = action.payload.data.users;
        state.usersCount = action.payload.data.usersCount;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })

      // Update User
      .addCase(updateUser.pending, (state) => {
        state.loading = LOADING.LOADING;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.success = action.payload.success;
        state.message = action.payload.message;
        const index = state.users.findIndex(
          (user) => user._id === action.payload.data.updatedUser._id
        );
        if (index !== -1) {
          state.users[index] = action.payload.data.updatedUser;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })

      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.loading = LOADING.LOADING;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.users = state.users.filter(
          (user) => user._id !== action.payload.data.deletedUserId
        );
        state.usersCount -= 1;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearMessage } = userSlice.actions;
export default userSlice.reducer;
