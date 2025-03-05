import { createSlice } from "@reduxjs/toolkit";
import {
  createBlog,
  fetchAllBlogs,
  fetchVerifiedBlogs,
  fetchBlogById,
  updateBlog,
  deleteBlog,
} from "../thunks/blogThunk.js";
import { LOADING } from "../constants.js";

const initialState = {
  success: null,
  message: "",
  blogsCount: 0,
  verifiedBlogsCount: 0,
  data: {
    blogs: [],
    blog: {},
    verifiedBlogs: [],
  },
  loading: LOADING.IDLE,
  error: null,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch All Blogs => user and admin
      .addCase(fetchAllBlogs.pending, (state) => {
        state.loading = LOADING.PENDING;
        state.error = null;
      })
      .addCase(fetchAllBlogs.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.blogsCount = action.payload.blogsCount;
        state.data.blogs = action.payload.blogs;
      })
      .addCase(fetchAllBlogs.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })

      // Fetch Verified Blogs (For guest users)
      .addCase(fetchVerifiedBlogs.pending, (state) => {
        state.loading = LOADING.PENDING;
      })
      .addCase(fetchVerifiedBlogs.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.verifiedBlogsCount = action.payload.data.blogCounts;
        state.data.verifiedBlogs = action.payload.data.blogs;
      })
      .addCase(fetchVerifiedBlogs.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })

      // Fetch Blog by ID => gustUser,user and admin
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = LOADING.PENDING;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.data.blog = action.payload.blog;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })

      // Create Blog => user and admin
      .addCase(createBlog.pending, (state) => {
        state.loading = LOADING.PENDING;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.data.blogs.unshift(action.payload.data.blog);
        state.blogsCount += 1;
        if (action.payload.data.blog.isVerified) {
          state.data.verifiedBlogs.unshift(action.payload.data.blog);
          state.verifiedBlogsCount += 1;
        }
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })

      // Update Blog => user and admin
      .addCase(updateBlog.pending, (state) => {
        state.loading = LOADING.PENDING;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.success = action.payload.success;
        state.message = action.payload.message;
        const updatedBlog = action.payload.data.updatedBlog;
        // Update the blogs list
        state.data.blogs = state.data.blogs.map((blog) =>
          blog._id === updatedBlog._id ? updatedBlog : blog
        );
        if (updatedBlog.isVerified) {
          // Add or update the verifiedBlogs list
          state.data.verifiedBlogs = [
            updatedBlog,
            ...state.data.verifiedBlogs.filter(
              (blog) => blog._id !== updatedBlog._id
            ),
          ];
        } else {
          // Remove the blog if it is no longer verified
          state.data.verifiedBlogs = state.data.verifiedBlogs.filter(
            (blog) => blog._id !== updatedBlog._id
          );
        }
        // Update the verified blogs count
        state.verifiedBlogsCount = state.data.verifiedBlogs.length;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      })

      // Delete Blog => only admin
      .addCase(deleteBlog.pending, (state) => {
        state.loading = LOADING.PENDING;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = LOADING.SUCCEEDED;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.data.blogs = state.data.blogs.filter(
          (blog) => blog._id !== action.payload.blogId
        );
        state.blogsCount -= 1;

        // Remove from verifiedBlogs if it's verified
        state.data.verifiedBlogs = state.data.verifiedBlogs.filter(
          (blog) => blog._id !== action.payload.blogId
        );
        state.verifiedBlogsCount -= 1;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = LOADING.FAILED;
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;
