import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>
        © {new Date().getFullYear()} Kasper. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
