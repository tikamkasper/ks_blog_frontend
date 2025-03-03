import { createSlice } from "@reduxjs/toolkit";
import { LOADING } from "../constants.js";
import { createUser, getAllUsers } from "../thunks/userThunks.js";

const initialState = {
  loading: LOADING.IDLE,
  users: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create new user cases
      .addCase(createUser.pending, (state) => {
        state.loading = LOADING.LOADING;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.users = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })
      // all users cases
      .addCase(getAllUsers.pending, (state) => {
        state.loading = LOADING.LOADING;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      });
  },
});
export default userSlice.reducer;
