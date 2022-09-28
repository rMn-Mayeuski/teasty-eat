import React from 'react';
import s from "./Banner.module.scss";
import banner from "../../img/Banner.png";

const Banner: React.FC = () => {
    return (
        <section className={s.banner}>
            <div className={s.wrapper}>
                <div className={s.bannerContainer}>
                    <div className={s.bannerContainerLeft}>
                        <h1 className={s.bannerTitle}>
                            Welcome to Restaurant
                        </h1>
                        <p className={s.bannerSubtitle}>
                            The people, food and the prime locations make the perfect place good friends & family to come together and have great time.
                        </p>
                        <a className={s.bannerLink} href="#">View Menu</a>
                    </div>
                    <div className={s.bannerContainerRight}>
                        <img src={banner} alt="restaraunt banner" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;