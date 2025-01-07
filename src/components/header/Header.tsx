// styles
import '../../utilities/GlobalStyles/GlobalStyle.css';
import GlobalStyles from "../../utilities/GlobalStyles/GlobalStyles.module.css";
import modulestyles from "./style.module.css";
import './style.css'

function Header() {
  return (
    <header
      id='header'
      className={`${modulestyles.header_scrolled} ${GlobalStyles.jcc} ${GlobalStyles.aic}`}
    >
      <div className={`${modulestyles.container}`}>
        {/* Logo Section */}
        <div
          className={`${modulestyles.logo} ${GlobalStyles.df} ${GlobalStyles.fww} ${GlobalStyles.aic} ${GlobalStyles.jcc}`}
        >
          <a>
            <img src="https://preview.colorlib.com/theme/animalshelter/img/logo.png.webp" />
          </a>
        </div>

        {/* Navigation Section */}
        <nav className={`${modulestyles["nav-main-container"]}`}>
          <ul className={`${modulestyles['ul_nav']}`}>
            <li><a className={`${modulestyles['nav_li']}`} href="#">HOME</a></li>
            <li><a className={`${modulestyles['nav_li']}`} href="#">ABOUT US</a></li>
            <li><a className={`${modulestyles['nav_li']}`} href='#'>CATS</a></li>
            <li><a className={`${modulestyles['nav_li']}`} href="#">DOGS</a></li>
            <li><a className={`${modulestyles['nav_li']}`} href='#'>VOLUNTEER</a></li>
            <li><a className={`${modulestyles['nav_li']}`} href='#'>Blog</a></li>
            <li><a className={`${modulestyles['nav_li']}`} href='#'>CONTACT</a></li>
            <li><a className={`${modulestyles['nav_li']}`} href='#'>DROPDOWN</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
