import React, { useState } from 'react';
import css from '../../Style/Fridge.module.css';

function Fridge() {
    const [isDoorOpen,setIsDoorOpen] = useState(false);

    const onClick = () => {
        setIsDoorOpen(!isDoorOpen);
    }

    return (
    <div className={css.fridge}>
        <div className={css.fridge_door}>
            <div className={css.top_door}>
                <img
                src="https://i.ibb.co/9T2H1tz/handle-removebg-preview.png"
                className={css.fridge_handle}
                />
            </div>
            <hr className={css.hr} />
            <div
                className={`${css.bottom_door} ${isDoorOpen ? css.open : ''}`}
                onClick={onClick}>
            </div>
            <div className={css.door_back} ></div>
        </div>
    </div>
    );
}

export default Fridge;
