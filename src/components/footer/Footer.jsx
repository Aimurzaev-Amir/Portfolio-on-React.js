import React from "react";
import stl from "./Footer.module.css";
import Logo from "./img/Logo.svg"
import behance from "./img/socialNetworks/behance-footer.svg"
import instagram from "./img/socialNetworks/instagram-footer.svg"
import linkedin from "./img/socialNetworks/linkedin-footer.svg"
import vk from "./img/socialNetworks/vk-footer.svg"
 
let Footer = () => {
  return (
    <div className={stl.footer}>
      <div className={stl.logoFooter} data-aos="zoom-in-up">
        <a href="index.html">
          <img src={Logo} alt="Logo Aimurzayev Amir" />
        </a>
      </div>
      <nav
        className={stl.footerNav}
        data-aos="zoom-in-up"
        data-aos-delay="100"
      >
        <ul className={stl.navLinks}>
          <li className={stl.navItem}>
            <a href="about-me.html" className={stl.navItemLink}>
              About me
            </a>
          </li>
          <li className={stl.navItem}>
            <a href="Portfolio.html" className={stl.navItemLink}>
              Portfolio
            </a>
          </li>
          <li className={stl.navItem}>
            <a href="Blog.html" className={stl.navItemLink}>
              Blog
            </a>
          </li>
          <li className={stl.navItem}>
            <a href="Contacts.html" className={stl.navItemLink}>
              Contacts
            </a>
          </li>
        </ul>
      </nav>

      <p data-aos="zoom-in-up" data-aos-delay="200">
        © 2020 Amir Aimurzayev. All rights reserved.
      </p>
      <div
        className={stl.footerSocial}
        data-aos="zoom-in-up"
        data-aos-delay="300"
      >
        <a href="" target="_blank">
          <img
            src={linkedin}
            alt="linkedin Aimurzayev Amir"
          />
        </a>
        <a href="https://www.behance.net/Aimurzayev" target="_blank">
          <img
            src={behance}
            alt="behance Aimurzayev Amir"
          />
        </a>
        <a href="https://vk.com/id140204225" target="_blank">
          <img src={vk} alt="vk Aimurzayev Amir" />
        </a>
        <a href="https://www.instagram.com/amiraimurzayev/" target="_blank">
          <img
            src={instagram}
            alt="instagram Aimurzayev Amir"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
