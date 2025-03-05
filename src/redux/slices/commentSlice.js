import { createSlice } from "@reduxjs/toolkit";
import { LOADING } from "../constants.js";
import {
  createComment,
  getAllComments,
  updateComment,
  deleteComment,
} from "../thunks/commentThunk.js";

const initialState = {
  data: {
    comments: [],
    commentsCount: 0,
  },
  loading: LOADING.IDLE,
  error: null,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.comments = [...state.comments, action.payload.data.newComment];
      })
      .addCase(createComment.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })
      .addCase(getAllComments.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
      })
      .addCase(getAllComments.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.comments = action.payload.data.comments;
      })
      .addCase(getAllComments.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })
      .addCase(updateComment.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.comments = state.comments.map((comment) =>
          comment._id === action.payload.data.updatedComment._id
            ? action.payload.data.updatedComment
            : comment
        );
      })
      .addCase(updateComment.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })
      .addCase(deleteComment.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.comments = state.comments.filter(
          (comment) => comment._id !== action.payload
        );
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      });
  },
});

export default commentSlice.reducer;
