import { useEffect } from "react";
import polusIcon from "../../assets/images/polus_icon.png";
// import polusBackground from "../../assets/images/mountain_range.png";
import Navbar from "../../components/Navbar/Navbar";
// import { routes } from "../../utils/routes";

import styles from "./Home.module.css";
import appStyles from '../../App.module.css'
import Footer from "../../components/Footer/Footer";

function Home() {
    useEffect(() => {
        document.title = "Polus";
    }, []);

    // let { path, url } = useRouteMatch();
    return (
        <div id={styles.polus}>
            <Navbar />
            <main className={styles.hero}>
                <img className={styles.hero_icon} src={polusIcon} alt="Polus Icon" />
                <h2 className={appStyles.h2}>Polus</h2>
                <p>A chrome extension to help plan your day</p>
            </main>
            <main className={styles.video_section}>
                {/* VIDEO */}
                <div id={styles.polus_video_wrapper}>
                    <iframe id={styles.polus_video} title='polus_video' src="https://www.youtube.com/embed/25f_hLEdLds" allowFullScreen></iframe>
                </div>
                <section id={styles.link}>
                    <a
                        id={styles.link_tag}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://chrome.google.com/webstore/detail/polus/meajimhgfmioppbkoppphhkbcmapfngh?hl=en&authuser=0"
                    >
                        + Add Polus to Chrome
                    </a>
                </section>
            </main>
            <Footer /> 
        </div>
    );
}

export default Home;
