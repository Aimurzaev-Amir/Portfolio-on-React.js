import React from "react";
import "./Header.css";
import "../Media.css";
import logo from "./img/Logo.svg";
import logoMobile from "./img/Logo-mobile.svg";
import behance from "./img/socialNetworks/behance-footer.svg";
import instagram from "./img/socialNetworks/instagram-footer.svg";
import linkedin from "./img/socialNetworks/linkedin-footer.svg";
import vk from "./img/socialNetworks/vk-footer.svg";

let Navbar = () => {
  return (
    <div class="navOverlay" id="myHeader">
      <nav class="wrapper mainNav">
        <div class="logo">
          <a href="index.html">
            <img class="logoDesktop" src={logo} alt="Aimurzaev Amir logo" />
          </a>
          <a href="index.html">
            <img class="logoMobile" src={logoMobile} alt="Aimurzaev Amir m-logo" />
          </a>
        </div>
        <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <ul class="navLinks">
          <li class="menu-line">
            <hr />
          </li>
          <li class="navItem">
            {/* <NavLink to={"/profile"} activeclass="active}>Aimurzayev Amir</NavLink> */}
            <a href="about-me.html" class="navItemLink">
              About me
            </a>
          </li>
          <li class="menuLine">
            <hr />
          </li>
          <li class="navItem">
            <a href="Portfolio.html" class="navItemLink">
              Portfolio
            </a>
          </li>
          <li class="menuLine">
            <hr />
          </li>
          <li class="navItem">
            <a href="Blog.html" class="navItemLink">
              Blog
            </a>
          </li>
          <li class="menuLine">
            <hr />
          </li>
          <li class="navItem">
            <a href="Contacts.html" class="navItemLink">
              Contacts
            </a>
          </li>
          <li class="menuLine">
            <hr />
          </li>
          <li>
            <div class="navSocial">
              <div class="socialItem">
                <a href="">
                  <img src={linkedin} alt="linkedin Aimurzaev Amir" />
                </a>
              </div>
              <div class="socialItem">
                <a href="https://www.behance.net/Aimurzayev">
                  <img src={behance} alt="behance Aimurzaev Amir" />
                </a>
              </div>
              <div class="socialItem">
                <a href="https://vk.com/id140204225">
                  <img src={vk} alt="vk Aimurzaev Amir" />
                </a>
              </div>
              <div class="socialItem">
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
