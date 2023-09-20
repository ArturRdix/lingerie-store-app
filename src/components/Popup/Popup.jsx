import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = ({ message, onPopupClose, index }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onPopupClose(index);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [onPopupClose, index]);

    const popupClassName = `popup ${visible ? '' : 'hidden'}`;

    return (
        <div className={popupClassName}>
            {message}
        </div>
    );
};

export default Popup;