import React from 'react';

import './footer.scss';

import { NavLink } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <NavLink to="/">FATFLIX</NavLink>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">Contact us</NavLink>
                        <NavLink to="/">Term of services</NavLink>
                        <NavLink to="/">About us</NavLink>
                    </div>
                    <div className="footer__content__menu">
                        <NavLink to="/">Live</NavLink>
                        <NavLink to="/">FAQ</NavLink>
                        <NavLink to="/">Premium</NavLink>
                        <NavLink to="/">Pravacy policy</NavLink>
                    </div>
                    <div className="footer__content__menu">
                        <NavLink to="/">You must watch</NavLink>
                        <NavLink to="/">Recent release</NavLink>
                        <NavLink to="/">Top IMDB</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;