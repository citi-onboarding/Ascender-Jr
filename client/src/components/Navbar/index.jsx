import React, { useEffect, useState } from 'react';
import './Navbar.css';

import logo from './logo.png';
import luz from './luz-menu.png';

const Navbar = () => {
    const [condition, setCondition] = useState(false);
    const handleScroll = () => {
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
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
            document.getElementById("navbar-nav").style.backgroundColor = "transparent";
        }
    }

    useEffect(() => {
        window.onscroll = () => handleScroll();
    }, []);

    const handleClick = () => {
        setCondition(!condition);
    }

    return (
        <nav id="navbar-nav">
            <div id="logo-container">
                <a href="#slider-container"><img src={ logo } id="logo" alt="logo"/></a>
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
                    <a href="#extra" id="extra-web">EXTRA</a>
                </li>
            </ul>
            <div className="container-menuDown" onClick={ handleClick }>
                <div>
                    <div className={ condition ? "changeBars1 bar1" : "bar1" }></div>
                    <div className={ condition ? "changeBars2 bar2" : "bar2" }></div>
                    <div className={ condition ? "changeBars3 bar3" : "bar3" }></div>
                </div>
                <div id="menuDown"  className={ condition ? "menuDown showMenu" : "menuDown" }>
                    <ul>
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
                            <a href="#extra">EXTRA</a>
                        </li>
                    </ul>
                    <img src={ luz } id="luz" alt="luz"/>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
