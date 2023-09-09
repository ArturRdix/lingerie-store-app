import React, { useState, useEffect } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CartModal from '../CartModule/CartModal';
import styles from './Header.module.css'

export default function Header({ orders, onRemove, updateQuantity, fixed }) {
    const [cartState, setCartState] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        let calculatedTotalPrice = 0;

        for (const element of orders) {
            const price = parseFloat(element.price);
            const quantity = element.quantity || 1;
            if (!isNaN(price)) {
                calculatedTotalPrice += price * quantity;
            }
        }

        setTotalPrice(calculatedTotalPrice);
    }, [orders]);

    useEffect(() => {
        function handleDocumentClick(event) {
            const cartIconClicked = event.target.closest(`.${styles.cartIcon}`);
            const cartWindowClicked = event.target.closest(`.${styles.cartModal}`);
            const cartContentClicked = event.target.closest(`.${styles.cartItems}`);
            const overlayClicked = event.target.closest(`.${styles.overlay}`);

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
            <div className={`${styles.topBlock} ${fixed ? styles.fixedTopBlock : ''}`}>
                <Link to='/'><h1 className={styles.logo}>MONIKA LENGERIE</h1></Link>

                <div className={`${styles.burgerMenuNavigation} ${isMenuOpen ? styles.burgerMenuOpen : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className={`${styles.middleLine} ${isMenuOpen?styles.middleLineNone:''}`}></span>
                </div>

                <nav className={`${styles.headerNavigation} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <Link to='/dostavka' className={styles.itemNavigation} >Доставка и оплата</Link>
                    <Link to='/pro-nas' className={styles.itemNavigation} >Про нас</Link>
                    <Link to='/contact' className={styles.itemNavigation} >Контакты</Link>

                    <div className={styles.cartBlock}>
                        <BsFillCartFill
                            onClick={() => setCartState(cartState => !cartState)}
                            className={`${styles.cartIcon} ${cartState ? styles.active : ''}`} />
                        {orders.length > 0 && <b className={styles.quantityOrders}>{orders.length}</b>}
                    </div>

                </nav>

            </div>
            <CartModal
                orders={orders}
                onRemove={onRemove}
                onUpdateQuantity={updateQuantity}
                isOpen={cartState}
                onClose={() => setCartState(false)}
                totalPrice={totalPrice}
            />
            {/* <div className={styles.banner}></div>*/}
        </header>
    );
}
