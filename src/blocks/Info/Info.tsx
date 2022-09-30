import React from 'react';
import s from "./Info.module.scss";
import map from "../../img/InfoMap.svg";
import clock from "../../img/InfoMap.svg";
import reservation from "../../img/InfoMap.svg";
import infobanner from "../../img/InfoBanner.png";
import signature from "../../img/InfoSignature.png";
import Card from './Card/Card';

const Info: React.FC = () => {
    return (
        <section className={s.info} id="info" >
            <div className={s.wrapper}>
                <div className={s.infoContainer}>
                    <div className={s.infoContainerTop}>
                        <Card 
                            image={map} 
                            title='Locate Us' 
                            subtitle='Riverside 25, San Diego, California'
                        />
                        <Card 
                            image={clock} 
                            title='Open Hours' 
                            subtitle='Mon To Fri 9:00 AM - 9:00 PM'
                        />
                        <Card 
                            image={reservation} 
                            title='Reservation' 
                            subtitle='restaurantate@gmail.com'
                        />
                    </div>
                    <div className={s.infoContainerBottom}>
                        <img className={s.infoContainerBottomBanner} src={infobanner} alt="info banner" />
                        <div className={s.infoContainerBottomLeft}>
                            <h2 className={s.title}>
                                The Delicious Story
                            </h2>
                            <p className={s.subtitle}>
                                The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.
                            </p>
                            <div className={s.infoContainerBottomLeftYears}>
                                <div className={s.yearsConteiner}>
                                    <p className={s.title}>2018</p>
                                    <p className={s.subtitle}>Plan for this restaurant to deliver healthy food.</p>
                                </div>
                                <div className={s.yearsConteiner}>
                                    <p className={s.title}>2022</p>
                                    <p className={s.subtitle}>Happily in the fourth year by fulfill the motto.</p>
                                </div>
                            </div>
                            <p className={s.infoContainerBottomLeftName}>
                                JOSEFINE
                            </p>
                            <img className={s.signature} src={signature} alt="signature" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;