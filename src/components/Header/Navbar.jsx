import React from "react";
import "./Header.css";
import "../Media.css";
import logo from "./img/Logo.svg";
import logoMobile from "./img/Logo-mobile.svg";
import behance from "./img/socialNetworks/behance-footer.svg";
import instagram from "./img/socialNetworks/instagram-footer.svg";
import linkedin from "./img/socialNetworks/linkedin-footer.svg";
import vk from "./img/socialNetworks/vk-footer.svg";
import { NavLink } from "react-router-dom";

let Navbar = () => {
  return (
    <div class="navOverlay" id="myHeader">
      <nav class="wrapper mainNav">
        <div class="logo">
          <NavLink to={"/"} class="navItemLink">
            <img class="logoDesktop" src={logo} alt="Aimurzaev Amir logo" />
          </NavLink>
          <NavLink to={"/"} class="navItemLink">
            <img class="logoMobile" src={logoMobile} alt="Aimurzaev Amir m-logo" />
          </NavLink>
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
            <NavLink to={"/about-me"} class="navItemLink">
              About me
            </NavLink>
          </li>
          <li class="menuLine">
            <hr />
          </li>
          <li class="navItem">
            <NavLink to={"/portfolio"} class="navItemLink">
              Portfolio
            </NavLink>
          </li>
          <li class="menuLine">
            <hr />
          </li>
          <li class="navItem">
            <NavLink to={"/blog"} class="navItemLink">
              Blog
            </NavLink>
          </li>
          <li class="menuLine">
            <hr />
          </li>
          <li class="navItem">
            <NavLink to={"/contacts"} class="navItemLink">
              Contacts
            </NavLink>
          </li>
          <li class="menuLine">
            <hr />
          </li>
          <li>
            <div class="navSocial">
              <div class="socialItem">
                <a href="#a">
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
