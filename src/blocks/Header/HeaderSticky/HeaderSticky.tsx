import React from 'react';
import s from "../Header.module.scss";
import inst from "../../../img/inst.svg";
import face from "../../../img/f.svg";
import twitter from "../../../img/twitter.svg";
import pin from "../../../img/pinterest.svg";

const HeaderSticky: React.FC = () => {
    return (
        <div className={s.headerSticky}>
            <div className={s.wrapper}>
                <div className={s.headerBottom}>
                    <div className={s.headerBottomLeft}>
                        <a href="#">Home</a>
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
        </div>
    );
};

export default HeaderSticky;