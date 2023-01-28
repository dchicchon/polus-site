import React from "react";
import {
  Link,
} from "react-router-dom";
import { routes } from "../../utils/routes";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.nav}>
      <Link className={styles.nav_link} to={`..`}>Home</Link>
      <Link className={styles.nav_link} to={`../${routes.ABOUT}`}>About</Link>
      <Link className={styles.nav_link} to={`../${routes.PRIVACY}`}>Privacy</Link>
      <Link className={styles.nav_link} to={`../${routes.TERMS}`}>Terms</Link>
      {/* make a navbar */}
    </header>
  );
}

export default Navbar;
