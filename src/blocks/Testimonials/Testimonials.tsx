import React from 'react';
import s from "./Testimonials.module.scss";
import banner from "../../img/Testimonials/TestimonialBanner.png";
import BlockLabel from '../../components/BlockLabel/BlockLabel';
import Feedback from './Feedback/Feedback';
import photo1 from "../../img/Testimonials/TestimonialsIMAGE.png";
import photo2 from "../../img/Testimonials/TestimonialsIMAGE-2.png";

const Testimonials: React.FC = () => {
    return (
        <section className={s.testimonials}>
            <div className={s.wrapper}>
                <div className={s.testimonialsConteiner}>
                    <BlockLabel text='Testimonial' color='#FFFFFF'/>
                    <h2 className={s.title}>
                        our clients say
                    </h2>
                    <p className={s.subtitle}>
                        We love to hear from customers, so please leave a comment or say hello in an email.
                    </p>
                    <div className={s.testimonialsSlider}>
                        <Feedback 
                        photo={photo1} 
                        name={'Natasha D'} 
                        city={'Newyork'} 
                        comment={'They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'}
                        />
                        <Feedback 
                        photo={photo2} 
                        name={'Jack Sparrow'} 
                        city={'Salt Lake City'} 
                        comment={'I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.'}
                        />
                    </div>
                </div>
            </div>
            <img className={s.testimonialsBanner} src={banner} alt="testimonials banner" />           
        </section>
    );
};

export default Testimonials;