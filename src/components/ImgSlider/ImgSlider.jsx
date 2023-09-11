import React, { useState } from 'react';
import styles from './ImgSlider.module.css';

export default function ImgSlider({ imgItems }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % imgItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + imgItems.length) % imgItems.length);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {imgItems.map((el, index) => (
                    <div key={index} className={styles.slide}>
                        <img className={styles.img} src={el} alt="" />
                    </div>
                ))}
            </div>
            {imgItems.length > 1 ? (
                <>
                    <button
                        className={`${styles.buttonSlide} ${styles.left}`}
                        onClick={nextSlide}
                        id="btnRight"
                    >
                        &gt;
                    </button>
                    <button
                        className={`${styles.buttonSlide} ${styles.right}`}
                        onClick={prevSlide}
                        id="btnLeft"
                    >
                        &lt;
                    </button>
                </>
            ) : null}

        </div>
    );
}
