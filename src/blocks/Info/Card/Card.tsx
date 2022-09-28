import React from 'react';
import s from "../Info.module.scss";

interface InfoCard{
    image: string,
    title: string,
    subtitle: string,
}

const Card: React.FC<InfoCard> = ({image, title, subtitle}) => {
    return (
        <div className={s.cardContainer}>
            <img src={image} alt="map logo" />
            <div className={s.cardContainerRight}>
                <p className={s.cardContainerRightTitle}>
                    {title}
                </p>
                <p className={s.cardContainerRightSubtitle}>
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default Card;