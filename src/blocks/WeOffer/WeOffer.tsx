import React from 'react';
import BlockLabel from '../../components/BlockLabel/BlockLabel';
import s from "./WeOffer.module.scss";
import open from "../../img/WeOffer/open.svg";
import menu from "../../img/WeOffer/menu.svg";
import deliv from "../../img/WeOffer/deliv.svg";

const WeOffer: React.FC = () => {
    return (
        <section className={s.weOffer}>
            <div className={s.wrapper}>
                <div className={s.weOfferContainer}>
                    <div className={s.weOfferContainerRight}>
                        <BlockLabel text='What we offer' color='#FFFFFF'/>
                        <h2 className={s.title}>
                            Our Great Services
                        </h2>
                        <p className={s.subtitle}>
                            The atmosphere set the stage. It’s about more than just a dining room away from your home food takes the spotlight as guests.
                        </p>
                    </div>
                    <div className={s.weOfferContainerLeft}>
                        
                            <div className={s.cardContent}>
                                <>
                                <img src={open} alt="ico" />
                                <p className={s.cardContentTitle}>
                                    Opened 24/7
                                </p>
                                </>
                            </div>

                            <div className={s.cardContent}>
                                <img src={menu} alt="ico" />
                                <p className={s.cardContentTitle}>
                                    Special Menus
                                </p>
                            </div>

                            <div className={s.cardContent}>
                                <img src={deliv} alt="ico" />
                                <p className={s.cardContentTitle}>
                                    Home Delivery
                                </p>
                            </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeOffer;