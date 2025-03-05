import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVerifiedBlogs } from "../../redux/thunks/blogThunk.js";
import BlogCard from "../BlogCard.jsx";
import Pagination from "../../components/Pagination.jsx";
import styles from "./Home.module.css";
import Footer from "../layout/Footer.jsx";
import Header from "../layout/Header.jsx";

const Home = () => {
  const dispatch = useDispatch();

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  const { success, message, verifiedBlogsCount, loading, error, data } =
    useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchVerifiedBlogs());
  }, [dispatch]);

  // Get Current Blogs for the Page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs =
    data?.verifiedBlogs?.slice(indexOfFirstBlog, indexOfLastBlog) || [];

  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <h1 style={{ textAlign: "center" }}>All Blogs</h1>
        <div className={styles.homeBlogList}>
          {currentBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        {/* Pagination Component */}
        <Pagination
          totalBlogs={data?.verifiedBlogs?.length || 0}
          blogsPerPage={blogsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchVerifiedBlogs } from "../../redux/thunks/blogThunks";
// import styles from "../styles/Home.module.css";
// import BlogCard from "../BlogCard";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { blogs, loading, error } = useSelector((state) => state.verifiedBlogs);
//   const verifiedBlogs = blogs?.data?.blogs || [];

//   // Pagination State
//   const [currentPage, setCurrentPage] = useState(1);
//   const blogsPerPage = 10;
//   const totalPages = Math.ceil(verifiedBlogs.length / blogsPerPage);

//   useEffect(() => {
//     dispatch(fetchVerifiedBlogs());
//   }, [dispatch]);

//   // Handle Page Change
//   const handlePageChange = (page) => setCurrentPage(page);

//   // Get Blogs for Current Page
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = verifiedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>All Blogs</h1>

//       {/* Show Blogs */}
//       {loading && <h3>Loading blogs...</h3>}
//       {error && <h3 className={styles.error}>Error: {error}</h3>}
//       <div className={styles.blogList}>
//         {currentBlogs.map((blog) => (
//           <BlogCard key={blog._id} blog={blog} />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className={styles.pagination}>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={currentPage === index + 1 ? styles.activePage : ""}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect } from "react";
// import { Link } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchVerifiedBlogs } from "../../redux/thunks/blogThunks.js";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { loading, blogs, error } = useSelector((state) => state.verifiedBlogs);
//   console.log({ loading, blogs, error });
//   const verifiedBlogs = blogs?.data?.blogs;

//   useEffect(() => {
//     dispatch(fetchVerifiedBlogs());
//   }, [dispatch]);

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "20px",
//           width: "80%",
//           margin: "auto",
//         }}
//       >
//         <h1>All Blogs</h1>
//       </div>
//       <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//         {verifiedBlogs &&
//           verifiedBlogs.map((blog, index) => (
//             <div
//               key={blog._id}
//               style={{
//                 display: "flex",
//                 gap: "50px",
//                 width: "80%",
//                 padding: "20px",
//                 border: "2px solid gray",
//                 borderRadius: "10px",
//                 margin: "auto",
//                 gap: "20px",
//               }}
//             >
//               <div>
//                 <img
//                   src={blog.image.url}
//                   alt="img"
//                   width="100px"
//                   height="100px"
//                 />
//               </div>
//               <div>
//                 <div>
//                   <h2>{blog.title}</h2>
//                   <p>{blog.blogContent}</p>
//                 </div>
//                 <div style={{ marginTop: "40px" }}>
//                   <Link to={`/blog/${blog._id}`}>Reade More</Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };
// export default Home;
