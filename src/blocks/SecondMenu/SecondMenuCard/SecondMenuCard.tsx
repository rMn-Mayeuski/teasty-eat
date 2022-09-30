import React from 'react';
import s from "./SecondMenuCard.module.scss";

interface SecondMenuCard{
    image: string,
    title: string,
    price: string,
    description: string,
}

const SecondMenuCard: React.FC<SecondMenuCard> = ({
    image,
    title,
    price,
    description,
}) => {
    return (
        <div className={s.card}>
            <img src={image} alt="dish photo" />
            <div className={s.cardText}>
                <p className={s.cardTitle}>
                    {title}
                </p>
                <p className={s.cardPrice}>
                    {price}
                </p>
            </div>
                <p className={s.cardDescription}>
                    {description}
                </p>
        </div>
    );
};

export default SecondMenuCard;