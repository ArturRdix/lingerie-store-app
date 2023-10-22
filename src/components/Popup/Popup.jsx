import React, { useState, useEffect } from 'react';
import './Popup.css';
import popupStore from '../../store/popupStore';

const Popup = ({ message, index }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            popupStore.closePopup(index);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [ index]);

    const popupClassName = `popup ${visible ? '' : 'hidden'}`;

    return (
        <div className={popupClassName}>
            {message}
        </div>
    );
};

export default Popup;