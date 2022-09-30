import React, { FC } from 'react';
import s from "./Header.module.scss";
import HL from "../../img/HeaderLogo.svg";
import inst from "../../img/inst.svg";
import face from "../../img/f.svg";
import twitter from "../../img/twitter.svg";
import pin from "../../img/pinterest.svg";

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.headerTop}>
                    <a className={s.headerTopLinkLeft} href="tel:+123 456 789">Call - 123 456 789</a>
                    <a href="#"><img src={HL} alt="logo" /></a>
                    <a className={s.headerTopLinkRight} href="#reserv">Reservation</a>
                </div>
                <div className={s.headerBottom}>
                    <div className={s.headerBottomLeft}>
                        {/* <a href="#">Home</a> */}
                        <a href="#info">About Us</a>
                        <a href="#menu">Our Menu</a>
                        <a href="#blog">Blog</a>
                        <a href="#footer">Contact Us</a>
                    </div>
                    <div className={s.headerBottomRight}>
                        <a href="#"><img src={inst} alt="logo instagramm" /></a>
                        <a href="#"><img src={face} alt="logo facebook" /></a>
                        <a href="#"><img src={twitter} alt="logo twitter" /></a>
                        <a href="#"><img src={pin} alt="logo pinterest" /></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;