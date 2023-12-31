import React, { useState, useEffect } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CartModal from '../CartModule/CartModal';
import styles from './Header.module.css'
import ordersStore from '../../store/ordersStore';

const Header = () => {
    const [cartState, setCartState] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const replacer = (value) => {
        return value.replace('+', '\\+')
    }

    useEffect(() => {
        function handleDocumentClick(event) {
            const cartIconClicked = event.target.closest(replacer(`.${styles.cartIcon}`));
            const cartWindowClicked = event.target.closest(replacer(`.${styles.cartModal}`));
            const cartContentClicked = event.target.closest(replacer(`.${styles.cartItems}`));
            const overlayClicked = event.target.closest(replacer(`.${styles.overlay}`));

            if (!cartWindowClicked && !cartContentClicked && !overlayClicked) {
                if (!cartIconClicked) {
                    setCartState(false);
                }
            }
        }

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [cartState]);

    return (
        <header className={styles.header}>
            <div className={styles.topBlock}>
                <Link to='/'><h1 className={styles.logo}>MONIKA LINGERIE</h1></Link>

                <div className={`${styles.burgerMenuNavigation} ${isMenuOpen ? styles.burgerMenuOpen : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className={`${styles.middleLine} ${isMenuOpen ? styles.middleLineNone : ''}`}></span>
                </div>

                <nav className={`${styles.headerNavigation} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <Link to='/dostavka' className={styles.itemNavigation} >Доставка и оплата</Link>
                    <Link to='/pro-nas' className={styles.itemNavigation} >О нас</Link>
                    <Link to='/contact' className={styles.itemNavigation} >Контакты</Link>

                    <div className={styles.cartBlock}>
                        <BsFillCartFill
                            onClick={() => setCartState(cartState => !cartState)}
                            className={`${styles.cartIcon} ${cartState ? styles.active : ''}`} />
                        {ordersStore.orders.length > 0 && <b className={styles.quantityOrders}>{ordersStore.orders.length}</b>}
                    </div>

                </nav>

            </div>
            <CartModal
                isOpen={cartState}
                onClose={() => setCartState(false)}
            />
            {/* <div className={styles.banner}></div>*/}
        </header>
    );
}
export default Header