import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  totalBlogs,
  blogsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={styles.pagination}>
      <ul className={styles.pageNumbers}>
        <li
          className={`${styles.pageItem} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          Prev
        </li>
        {pageNumbers.map((num) => (
          <li
            key={num}
            className={`${styles.pageItem} ${
              currentPage === num ? styles.activePage : ""
            }`}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </li>
        ))}
        <li
          className={`${styles.pageItem} ${
            currentPage === totalPages ? styles.disabled : ""
          }`}
          onClick={() =>
            currentPage < totalPages && setCurrentPage(currentPage + 1)
          }
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
