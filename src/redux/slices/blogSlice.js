import { createSlice } from "@reduxjs/toolkit";
import { LOADING } from "../constants.js";
import { fetchVerifiedBlogs } from "../thunks/blogThunks.js";

const initialState = {
  loading: LOADING.IDLE,
  blogs: null,
  error: null,
};
const verifiedBlogsSlice = createSlice({
  name: "verifiedBlogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVerifiedBlogs.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
      })
      .addCase(fetchVerifiedBlogs.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.blogs = action.payload;
      })
      .addCase(fetchVerifiedBlogs.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      });
  },
});

export const verifiedBlogReducer = verifiedBlogsSlice.reducer;
