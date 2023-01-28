import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import polusIcon from "../../assets/images/polus_icon.png";
import { routes } from "../../utils/routes";

function Footer() {
  return (
    <footer id={styles.polus_footer}>
      <nav className={styles.footer_nav}>
        <div className={styles.footer_nav_col}>
          <h4>Company</h4>
          <Link to={`../${routes.ABOUT}`}>About</Link>
        </div>
        <div className={styles.footer_nav_col}>
          <h4>Support</h4>
          <Link to={`../${routes.PRIVACY}`}>Privacy</Link>
          <Link to={`../${routes.TERMS}`}>Terms</Link>
          <a href="mailto:danielchicchon@gmail.com">Contact</a>
        </div>
      </nav>
      <img className={styles.footer_logo} src={polusIcon} alt="Polus Icon" />
    </footer>
  );
}

export default Footer;
