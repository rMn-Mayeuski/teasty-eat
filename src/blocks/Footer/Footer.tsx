import React from 'react';
import s from "./Footer.module.scss";
import HL from "../../img/HeaderLogo.svg";
import inst from "../../img/inst.svg";
import face from "../../img/f.svg";
import twitter from "../../img/twitter.svg";
import pin from "../../img/pinterest.svg";
import BlockLabel from '../../components/BlockLabel/BlockLabel';

const Footer: React.FC = () => {
    return (
        <footer className={s.footer} id="footer">
            <div className={s.wrapper}>
                <div className={s.footerTop}>
                    <p>
                    #TheTastEat
                    </p>
                    <a href="#" className={s.footerTopLogo}>
                        <img src={HL} alt="restaraunt logo" />
                    </a>
                    <div className={s.footerTopSocial}>
                        <a href="#"><img src={inst} alt="logo instagramm" /></a>
                        <a href="#"><img src={face} alt="logo facebook" /></a>
                        <a href="#"><img src={twitter} alt="logo twitter" /></a>
                        <a href="#"><img src={pin} alt="logo pinterest" /></a>
                    </div>
                </div>
                <div className={s.footerBottom}>
                    <div className={s.footerBottomContacts}> 
                        <BlockLabel text='Contact' color='#FFFFFF'/>
                        <p className={s.footerBottomContactsAdress}>
                            5 Rue Dalou, 75015 Paris
                        </p>
                        <a href="tel:+123 456 789">+123 456 789</a>
                        <a href="mailto:josefin@mail.com">josefin@mail.com</a>
                    </div>
                    <div className={s.footerBottomHoursWork}>
                        <BlockLabel text='Working Hours' color='#FFFFFF'/>
                        <p>
                            <span>Mon – Fri:</span> 7.00am – 6.00pm
                        </p>
                        <p>
                            <span>Sat:</span> 7.00am – 6.00pm
                        </p>
                        <p>
                            <span>Sun:</span> 8.00am – 6.00pm
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;