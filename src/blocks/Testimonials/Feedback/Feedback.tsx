import React from 'react';
import s from "./Feedback.module.scss";
import ico from "../../../img/Testimonials/TestimonialsComment.svg";

interface Feedback{
    photo: string,
    name: string,
    city: string,
    comment: string,
}

const Feedback: React.FC<Feedback> = ({
    photo,
    name,
    city,
    comment,
}) => {
    return (
        <div className={s.feedbackCard}>
            <div className={s.feedbackCardTop}>
                <img className={s.feedbackCardTopPhoto} src={photo} alt="photo" />
                <img className={s.feedbackCardTopIco} src={ico} alt="ico" />
                <div className={s.feedbackCardTopText}>
                    <p className={s.feedbackCardTopTextName}>{name}</p>
                    <p className={s.feedbackCardTopTextPos}>{city}</p>
                </div>
            </div>
            <p className={s.feedbackCardBottomText}>
                {comment}
            </p>
        </div>
    );
};

export default Feedback;