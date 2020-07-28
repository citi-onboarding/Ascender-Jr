import React, { useEffect, useState } from "react";
import ExtraMenu from "../ExtraMenu/Index";
import ExtraMenuMobile from "../ExtraMenuMobile/ExtraMenuMobile";
import "./Navbar.css";

import logo from "../../assets/logo.png";
import luz from "../../assets/luz-menu.png";

const Navbar = ({ setOpenModal }) => {
  const [condition, setCondition] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 90 ||
      document.documentElement.scrollTop > 90
    ) {
      document.getElementById("navbar-nav").style.height = "75px";
      document.getElementById("logo").style.transform = "scale(0.8)";
      document.getElementById("navbar-nav").style.transition = "300ms";
      document.getElementById("logo").style.transition = "500ms";
      document.getElementById("navbar-nav").style.backgroundColor = "#052A4F";
    } else {
      document.getElementById("navbar-nav").style.height = "100px";
      document.getElementById("logo").style.transform = "scale(1)";
      document.getElementById("navbar-nav").style.transition = "300ms";
      document.getElementById("logo").style.transition = "500ms";
      document.getElementById("navbar-nav").style.backgroundColor =
        "transparent";
    }
  };

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  useEffect(() => {
    const menu = document.querySelector('#menuDown')
    const logo = document.querySelector('#logo')
    const links = document.querySelector('#menuDown ul')

    if (condition) {
      menu.classList.add('showMenu')
      logo.classList.add('transition-logo')
      links.classList.add('transition-links')

      menu.classList.remove('hiddenMenu')
      logo.classList.remove('back-transition-logo')
      links.classList.remove('back-transition-links')

    } else if(menu.classList.contains('showMenu')) {
      menu.classList.add('hiddenMenu')
      
      menu.classList.remove('showMenu')
      logo.classList.replace('transition-logo', 'back-transition-logo')
      links.classList.replace('transition-links', 'back-transition-links')
    } 

  }, [condition])

  const handleClick = () => {
    setCondition(!condition);
    
    if (!condition) {
      const divs = document.querySelector(".sub-menu");
      divs.style.display = 'none';
    }

  };


  return (
    <nav id="navbar-nav" className={condition ? "show-navbar" : ""}>
      <div id="logo-container">
        <a href="#slider-container">
          <img src={logo} id="logo" alt="logo" />
        </a>
      </div>
      <ul id="navbar">
        <li>
          <a href="#section-about-us">SOBRE NÓS</a>
        </li>
        <li>
          <a href="#section-our-services">SERVIÇOS</a>
        </li>
        <li>
          <a href="#section-clients-and-partners">PARCERIAS</a>
        </li>
        <li>
          <a href="#secao-contato">CONTATO</a>
        </li>
        <li>
          <ExtraMenu setOpenModal={setOpenModal} />
        </li>
      </ul>
      <div className="container-menuDown">
        <div className="menu" onClick={handleClick}>
          <div
            className={condition ? "changeBars1 bar1" : "bar1"}
          />
          <div
            className={condition ? "changeBars2 bar2" : "bar2"}

          />
          <div
            className={condition ? "changeBars3 bar3" : "bar3"}
          />
        </div>
        <div
          id="menuDown"
          className={"menuDown"}
        >
          <ul>
            <li>
              <a href="#section-about-us" onClick={handleClick}>
                SOBRE NÓS
              </a>
            </li>
            <li>
              <a href="#section-our-services" onClick={handleClick}>
                SERVIÇOS
              </a>
            </li>
            <li>
              <a href="#section-clients-and-partners" onClick={handleClick}>
                PARCERIAS
              </a>
            </li>
            <li>
              <a href="#secao-contato" onClick={handleClick}>
                CONTATO
              </a>
            </li>
            <li className="extra-menu">
              <ExtraMenuMobile setOpenModal={setOpenModal} />
            </li>
          </ul>
          <img src={luz} id="luz" alt="Lâmpada logo da empresa" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
