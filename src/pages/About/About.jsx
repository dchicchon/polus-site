import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import { classList } from "../../utils";
import styles from "./About.module.css";
import appStyles from '../../App.module.css';

import screenshot from '../../assets/images/screenshot.png';

function About() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h2 style={{ fontSize: '3em', marginBottom: '5rem' }} className={classList(appStyles.h2)}>About</h2>
        <p className={styles.subheading}>
          Polus is a personal planner designed to help you keep track of your
          time throughout the day, week, and month across multiple devices. With
          each new tab you can see your plans and not have to worry about using a physical planner
        </p>
        <img className={styles.screenshot} src={screenshot} alt="Polus screenshot" />

        {/* Add socials */}

        {/* <p className='col subheading'>
          Coming soon to iOS and Android devices
        </p> */}

        {/* <span className='col d-flex justify-content-center' style={{ fontSize: '5rem' }}>
          <i className="fab fa-apple"></i>
        </span>
        <span className='col d-flex justify-content-center' style={{ fontSize: '5rem' }}>
          <i className="fab fa-android"></i>
        </span> */}

      </div>



      <Footer />
    </ >
  );
}

export default About;
