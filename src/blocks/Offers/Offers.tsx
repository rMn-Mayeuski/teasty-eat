import React from 'react';
import BlockLabel from '../../components/BlockLabel/BlockLabel';
import s from "./Offers.module.scss";

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
                        <div className={s.offerCard}>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offers;