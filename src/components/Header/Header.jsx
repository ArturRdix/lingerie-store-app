import styles from './Header.module.css'
import React, { useState, useEffect } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import CartModal from '../CartModule/CartModal';

export default function Header({ orders, onRemove, updateQuantity }) {
    const [cartState, setCartState] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        let calculatedTotalPrice = 0;

        for (const element of orders) {
            const price = parseFloat(element.price);
            const quantity = element.quantity || 1;
            if (!isNaN(price)) {
                calculatedTotalPrice += price * quantity;
            }
        }

        function handleScroll() {
            setIsFixed(window.scrollY > 100);
        }

        window.addEventListener('scroll', handleScroll);
        setTotalPrice(calculatedTotalPrice);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [orders]);

    useEffect(() => {
        function handleDocumentClick(event) {
            const cartIconClicked = event.target.closest(`.${styles.cartIcon}`);
            const cartWindowClicked = event.target.closest(`.${styles.cartModal}`);
            const cartContentClicked = event.target.closest(`.${styles.cartItems}`);
            const overlayClicked = event.target.closest(`.${styles.overlay}`);  // Добавляем эту строку

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
            <div className={`${styles.topBlock} ${isFixed ? styles.fixedTopBlock : ''}`}>
                <h1 className={styles.logo}>MONIKA LENGIRIE</h1>
                <nav className={styles.headerNavigation}>
                    <a className={styles.itemNavigation} href="#">Каталог</a>
                    <a className={styles.itemNavigation} href="#">Про нас</a>
                    <a className={styles.itemNavigation} href="#">Контакты</a>
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
