import React, {Component} from 'react';
import './Navbar.css';

import logo from './logo.png';
import luz from './luz-menu.png';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            className: 'hidden'
        }
    }
    
    handleScroll() { 
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
    componentDidMount() {
        window.onscroll = () => this.handleScroll()
    }
    getInitialState () {
        return {
          condition: false
        }
    }
    handleClick = () => {
        this.setState({
            condition: !this.state.condition
        });
    }
    render() {
        return (
            <nav id="navbar-nav">
            <div id="logo-container">
                <a href="#"><img src={ logo } id="logo" alt="logo"/></a>
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
                    <a href="#section-contact">CONTATO</a>
                </li>
                <li>
                    <a href="">EXTRA</a>
                </li>
            </ul>
            <div class="container-menuDown" onClick={ this.handleClick }>
                <div>
                    <div class={ this.state.condition ? "changeBars1 bar1" : "bar1" }></div>
                    <div class={ this.state.condition ? "changeBars2 bar2" : "bar2" }></div>
                    <div class={ this.state.condition ? "changeBars3 bar3" : "bar3" }></div>
                </div>
                <div id="menuDown"  class={ this.state.condition ? "menuDown showMenu" : "menuDown" }>
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
                            <a href="#section-contact">CONTATO</a>
                        </li>
                        <li>
                            <a href="">EXTRA</a>
                        </li>
                    </ul>
                    <img src={ luz } id="luz" alt="luz"/>
                </div>
            </div>
        </nav>
        );  
    }

}
export default Navbar;