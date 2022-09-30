import React from 'react';
import BlockLabel from '../../components/BlockLabel/BlockLabel';
import s from "./Blog.module.scss";

const Blog = () => {
    return (
        <section id='blog'>
            <div className={s.wrapper}>
                <div className={s.blogContainer}>
                    <div className={s.blogContainerText}>
                        <BlockLabel text='Blog'/>
                        <h2 className={s.title}>
                            Be First Who Read News
                        </h2>
                        <p className={s.subtitle}>
                                Explore the latest stories about our dishes, offers,
                            events and future plans here.
                        </p>
                    </div>
                    <div className={s.blogContainerCards}>
                        
                        <div className={s.blogContainerCard}>
                            <div className={s.blogContainerCardTop}>
                                <a href="#">View More</a>
                            </div>
                            <div className={s.blogContainerCardBottom}>
                                <div className={s.blogContainerCardBottomSubtitle}>
                                    <p>
                                        Delicious
                                    </p>
                                    <p>
                                        March 19, 2022
                                    </p>
                                </div>
                                <p className={s.blogContainerCardBottomTitle}>
                                    The Legend of US Cuisine: The Story of Hungry People
                                </p>
                                <p className={s.blogContainerCardBottomDescription}>
                                    Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.
                                </p>
                            </div>
                        </div>

                        <div className={s.blogContainerCard}>
                            <div className={s.blogContainerCardTopSecond}>
                                <a href="#">View More</a>
                            </div>
                            <div className={s.blogContainerCardBottom}>
                                <div className={s.blogContainerCardBottomSubtitle}>
                                    <p>
                                        Cooking
                                    </p>
                                    <p>
                                        March 19, 2022
                                    </p>
                                </div>
                                <p className={s.blogContainerCardBottomTitle}>
                                    The Most Popular Delicious Food of Mediterranean Cuisine
                                </p>
                                <p className={s.blogContainerCardBottomDescription}>
                                    Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;