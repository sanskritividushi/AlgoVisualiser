import React from 'react';
import { Link } from "react-scroll";
 // SCSS
import './navbar.css';
// Assets
import LogoImg from '/Users/sukritipunj/Downloads/comp/AlgoVisualiser/frontend/src/assets/navbar/logo.svg';


const desktopNav = (props) => {
  return(
    <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
        <div className="wrapper flex-s-between">
        <div>
            <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <img src={LogoImg} alt="logo" className="pointer" />
            </Link>
        </div>
        
        <div className="desktop__menu">
            <ul className="flex-s-between">
            <li>
                <Link activeClass="active-link" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
                WORK
                </Link>
            </li>
            <li>
                <Link activeClass="active-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                ABOUT
                </Link>
            </li>
            <li>
                <Link activeClass="active-link" to="blog" spy={true} smooth={true} offset={-70} duration={500}>
                BLOG
                </Link>
            </li>
            <li>
                <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                CONTACT
                </Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
  );
}

export default desktopNav;