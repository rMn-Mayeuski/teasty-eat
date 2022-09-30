import React from 'react';
import BlockLabel from '../../components/BlockLabel/BlockLabel';
import s from "./Offers.module.scss";
import price from "../../img/Offers/Price1.png";
import price2 from "../../img/Offers/Price2.png";
import burger from "../../img/Offers/Burger.png";
import pizza from "../../img/Offers/Pizza.png";

const Offers: React.FC = () => {
    return (
        <section>
            <div className={s.wrapper}>
                <div className={s.offersContainer}>
                    <div className={s.offersContainerText}>
                        <BlockLabel text='offers'/>
                        <h2 className={s.title}>
                            Our Offer dishes
                        </h2>
                        <p className={s.subtitle}>
                            Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now the dishes are in offers use it based on hunger.
                        </p>
                    </div>
                    <div className={s.offersContainerCards}>

                        <div className={s.offerCardLeft}>
                            <div className={s.offerCardContent}>
                                <img src={price} alt="price" />
                                <p className={s.offerCardContentPrice}>
                                    50% Offer Going
                                </p>
                                <p className={s.offerCardContentTitle}>
                                    Chicken Burger
                                </p>
                                <p className={s.offerCardContentDescription}>
                                    Chicken burger with the tasty toppings and leaves.
                                </p>
                            </div>
                            <img 
                                src={burger} alt="burger image"
                                className={s.offerCardMainImg} 
                            />
                        </div>

                        <div className={s.offerCardRight}>
                            <div className={s.offerCardContent}>
                                <img src={price2} alt="price" />
                                <p className={s.offerCardContentPrice}>
                                    50% Offer Going
                                </p>
                                <p className={s.offerCardContentTitle}>
                                    Chicken Pizza
                                </p>
                                <p className={s.offerCardContentDescription}>
                                    Pizza with multiple flavor and the toping are mixed.
                                </p>
                            </div>
                            <img 
                                src={pizza} alt="pizza image"
                                className={s.offerCardMainImg} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;