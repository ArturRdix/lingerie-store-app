import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className={styles.topBlock}>
                <nav className={styles.footerNavigation}>
                    <Link to='/dostavka' className={styles.itemNavigation} >ДОСТАВКА И ОПЛАТА</Link>
                    <Link to='/pro-nas' className={styles.itemNavigation} >О НАС</Link>
                    <Link to='/contact' className={styles.itemNavigation} >КОНТАКТЫ</Link>
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