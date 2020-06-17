import React from "react";
import stl from "./Header.module.css";
import logo from "./img/Logo.svg";
import logoMobile from "./img/Logo-mobile.svg";
import behance from "./img/socialNetworks/behance-footer.svg";
import instagram from "./img/socialNetworks/instagram-footer.svg";
import linkedin from "./img/socialNetworks/linkedin-footer.svg";
import vk from "./img/socialNetworks/vk-footer.svg";

let Navbar = () => {
  return (
    <div className={stl.navOverlay} id="myHeader">
      <nav className={stl.wrapper + " " + stl.mainNav}>
        <div className={stl.logo}>
          <a href="index.html">
            <img
              className={stl.logoDesktop}
              src={logo}
              alt="Aimurzaev Amir logo"
            />
          </a>
          <a href="index.html">
            <img
              className={stl.logoMobile}
              src={logoMobile}
              alt="Aimurzaev Amir m-logo"
            />
          </a>
        </div>
        <div className={stl.hamburger}>
          <div className={stl.line}></div>
          <div className={stl.line}></div>
          <div className={stl.line}></div>
        </div>
        <ul className={stl.navLinks}>
          <li className="menu-line">
            <hr />
          </li>
          <li className={stl.navItem}>
            {/* <NavLink to={"/profile"} activeClassName={stl.active}>Aimurzayev Amir</NavLink> */}
            <a href="about-me.html" className={stl.navItemLink}>
              About me
            </a>
          </li>
          <li className={stl.menuLine}>
            <hr />
          </li>
          <li className={stl.navItem}>
            <a href="Portfolio.html" className={stl.navItemLink}>
              Portfolio
            </a>
          </li>
          <li className={stl.menuLine}>
            <hr />
          </li>
          <li className={stl.navItem}>
            <a href="Blog.html" className={stl.navItemLink}>
              Blog
            </a>
          </li>
          <li className={stl.menuLine}>
            <hr />
          </li>
          <li className={stl.navItem}>
            <a href="Contacts.html" className={stl.navItemLink}>
              Contacts
            </a>
          </li>
          <li className={stl.menuLine}>
            <hr />
          </li>
          <li>
            <div className={stl.navSocial}>
              <div className={stl.socialItem}>
                <a href="">
                  <img src={linkedin} alt="linkedin Aimurzaev Amir" />
                </a>
              </div>
              <div className={stl.socialItem}>
                <a href="https://www.behance.net/Aimurzayev">
                  <img src={behance} alt="behance Aimurzaev Amir" />
                </a>
              </div>
              <div className={stl.socialItem}>
                <a href="https://vk.com/id140204225">
                  <img src={vk} alt="vk Aimurzaev Amir" />
                </a>
              </div>
              <div className={stl.socialItem}>
                <a href="https://www.instagram.com/amiraimurzayev/">
                  <img src={instagram} alt="instagram Aimurzaev Amir" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;