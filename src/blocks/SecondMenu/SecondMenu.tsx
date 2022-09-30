import React from 'react';
import BlockLabel from '../../components/BlockLabel/BlockLabel';
import s from "./SecondMenu.module.scss";
import pos1 from "../../img/SecondMenu/pos1.png";
import pos2 from "../../img/SecondMenu/pos2.png";
import pos3 from "../../img/SecondMenu/pos3.png";
import pos4 from "../../img/SecondMenu/pos4.png";
import SecondMenuCard from './SecondMenuCard/SecondMenuCard';

const SecondMenu: React.FC = () => {
    return (
        <section className={s.secondMenu}>
            <div className={s.wrapper}>
                <div className={s.secondMenuContainer}>
                    <div className={s.secondMenuContainerText}>
                        <BlockLabel text='menu'/>
                        <h2 className={s.title}>
                            Popular Dishes
                        </h2>
                        <p className={s.subtitle}>
                            There is a game between the waiters in restaurant to see who serves the food to each table fastest.
                            That led to attempting the Guinness Record.
                        </p>
                    </div>
                    <div className={s.secondMenuContainerCards}>
                        <SecondMenuCard 
                        image={pos1}
                        title={'Chicken Manjoori'} 
                        price={'$15'} 
                        description={'Dish relished by all age groups as a starter dish at parties.'} 
                        />
                        <SecondMenuCard 
                        image={pos2}
                        title={'Hotdog'} 
                        price={'$10'} 
                        description={'Grilled sausage served in the slit of a partially sliced bun.'} 
                        />
                        <SecondMenuCard 
                        image={pos3}
                        title={'Fresh Salmon'} 
                        price={'$5'} 
                        description={'Beat the health blues with our Super Immune Blue Juice Recipe.'} 
                        />
                        <SecondMenuCard 
                        image={pos4}
                        title={'Veg Burger'} 
                        price={'$10'} 
                        description={'Burgers may be made from ingredients like beans.'} 
                        />
                    </div>
                    <a className={s.secondMenuLink} href="#">See all dishes</a>
                </div>
            </div>
        </section>
    );
};

export default SecondMenu;