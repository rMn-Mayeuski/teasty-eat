import React from 'react';
import s from "./Menu.module.scss";
import banner from "../../img/MenuIMG/MenuIMAGE.png";
import pos1 from "../../img/MenuIMG/IMAGE.png";
import pos2 from "../../img/MenuIMG/IMAGE-1.png";
import pos3 from "../../img/MenuIMG/IMAGE-4.png";
import pos4 from "../../img/MenuIMG/IMAGE-5.png";
import pos5 from "../../img/MenuIMG/IMAGE-8.png";
import pos6 from "../../img/MenuIMG/IMAGE-9.png";
import MenuPosition from './MenuPosition/MenuPosition';
import BlockLabel from '../../components/BlockLabel/BlockLabel';

const Menu: React.FC = () => {
    return (
        <section>
            <div className={s.wrapper}>
                <BlockLabel text='Menu'/>
                <div className={s.menuContainer}>
                    <div className={s.menuContainerLeft}>
                        <h2 className={s.title}>
                            Try Our Special dishes
                        </h2>
                        <p className={s.subtitle}>
                            Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.
                        </p>
                        <img src={banner} alt="info banner" />
                        <a className={s.menuContainerLeftLink} href="#">
                            See all dishes
                        </a>
                    </div>
                    <div className={s.menuContainerRight}>
                        <div className={s.menuContainerRightPosWrap}>
                            <p className={s.menuContainerRightTitle}>
                                Starters
                            </p>
                            <MenuPosition image={pos1} 
                            title={'Raw Scallops from Erquy'} 
                            subitle={'Shuck the scallop to that used for oysters'} 
                            price={'$40'}/>
                            <MenuPosition image={pos2} 
                            title={'Spring Roll'} 
                            subitle={'Add oil to a hot pan spring onion whites'} 
                            price={'$20'}/>
                        </div>
                        <div className={s.menuContainerRightPosWrap}>
                            <p className={s.menuContainerRightTitle}>
                                Main Dish
                            </p>
                            <MenuPosition image={pos3} 
                            title={'Grilled Salmon with Dill Sauce'} 
                            subitle={'Brown sugar, salmon fillet, Dijon mustard'} 
                            price={'$40'}/>
                            <MenuPosition image={pos4} 
                            title={'Roast Beef with Vegetable'} 
                            subitle={'Green beans, rib eye, olive oil, beef'} 
                            price={'$20'}/>
                        </div>
                        <div className={s.menuContainerRightPosWrap}>
                            <p className={s.menuContainerRightTitle}>
                                Dessert
                            </p>
                            <MenuPosition image={pos5} 
                            title={'Apple Pie with Cream'} 
                            subitle={'Whipping cream, egg white, cinnamon'} 
                            price={'$15'}/>
                            <MenuPosition image={pos6} 
                            title={'Lemon Meringue Pie'} 
                            subitle={'Frozen pie crust, meringue, lemon'} 
                            price={'$15'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;