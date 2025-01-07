// Components
import Header from '../../components/header/Header';

// Styles
import GlobalStyles from '../../utilities/GlobalStyles/GlobalStyles.module.css';
import styles from './Home.module.css';

function Home() {
  return (
    <div style={{ color: 'white', height: '100vh', width: '100%' }}>
      <Header />
      
      {/* Banner Area */}
      <section className={`${styles.banner_area} ${styles.relative}`}>
        <div className={`${styles.overlay} ${styles.overlay_bg}`}></div>
        <div className={`${styles.block2} ${GlobalStyles.fdc} ${GlobalStyles.df} ${GlobalStyles.fww} ${GlobalStyles.jcc} ${GlobalStyles.aic}`}>
          <h1>
            Adopt Us<br />
            We Need Your Help.
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
          <a className={`${styles.banner_button_area}`}>
            Find a Pet to Adopt
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home;
