import React from 'react';
import BlockLabel from '../../components/BlockLabel/BlockLabel';
import s from "./Reservation.module.scss";

const Reservation: React.FC = () => {
    return (
        <section className={s.reservation} id="reserv">
            <div className={s.wrapper}>
                <div className={s.reservationContainer}>
                    <form className={s.reservationForm} action="#">
                        <BlockLabel text='reservation' color='#FFFFFF'/>
                        <h2 className={s.reservationFormTitle}>Book Your Table</h2>
                        <div className={s.reservationFormTop}>
                            <input type="text"  placeholder='Name'/>
                            <input type="email" placeholder='Email'/>
                        </div>
                        <div className={s.reservationFormBottom}>
                            <input placeholder='Persons' type="number" />
                            <input placeholder='Timing' type="time" />
                            <input placeholder='Date' type="date" />
                        </div>
                        <button type='submit' className={s.reservationFormBtn}>
                            Book A Table
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Reservation;