import { useState } from "react";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className={styles.container}>
      <div
        className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}
      >
        <img
          src="./src/assets/control.png"
          className={`${styles.toggle} ${!open ? styles.rotate : ""}`}
          onClick={() => setOpen(!open)}
        />
        <div className={styles.logoSection}>
          <img src="./src/assets/logo.png" className={styles.logo} />
          <h1 className={`${styles.title} ${!open ? styles.hidden : ""}`}>
            Designer
          </h1>
        </div>
        <ul className={styles.menuList}>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`${styles.menuItem} ${
                Menu.gap ? styles.menuGap : ""
              } ${index === 0 ? styles.active : ""}`}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open ? styles.hidden : ""}`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.mainContent}>
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Dashboard;
