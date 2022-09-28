import React from 'react';
import s from "./MenuPosition.module.scss";

interface MenuPosition{
    image: string,
    title: string,
    subitle: string,
    price: string,
}

const MenuPosition: React.FC<MenuPosition> = ({
    image,
    title,
    subitle,
    price,
}) => {
    return (
        <div className={s.menuPosContainer}>
            <img src={image} alt="position menu" />
            <div className={s.menuPosContainerText}>
                <p className={s.menuPosContainerTitle}>{title}</p>
                <p className={s.menuPosContainerSubtitle}>{subitle}</p>
            </div>
            <span></span>
            <p className={s.menuPosContainerTitle}>{price}</p>
        </div>
    );
};

export default MenuPosition;