import React, { FC } from 'react';
import s from "./Header.module.scss";
import HL from "../../img/HeaderLogo.svg";


const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.headerTop}>
                    <a className={s.headerTopLinkLeft} href="tel:+123 456 789">Call - 123 456 789</a>
                    <a className={s.headerTopLogo} href="#"><img src={HL} alt="logo" /></a>
                    <a className={s.headerTopLinkRight} href="#reserv">Reservation</a>
                </div>
            </div>
        </header>
    );
};

export default Header;