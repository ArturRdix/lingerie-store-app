import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer>
            <div className={styles.topBlock}>
                <nav className={styles.footerNavigation}>
                    <a className={styles.itemNavigation} href="#">О НАС</a>
                    <a className={styles.itemNavigation} href="#">ОПЛАТА И ДОСТАВКА</a>
                    <a className={styles.itemNavigation} href="#">КОНТАКТЫ</a>
                    <a className=
                    {`${styles.itemNavigation} ${styles.itemInstagram}`} 
                    href="https://www.instagram.com/monika.lingeriee/">INSTAGRAM</a>
                </nav>
                </div>
            <div className={styles.bottomBlock}>
                Все права защищены &copy;
            </div>
        </footer>
    )
}