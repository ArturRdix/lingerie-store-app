import styles from './Header.module.css'
import React, { useState, useEffect } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import OrderItem from '../OrderItem/OrderItem';

export default function Header({ orders, onRemove, updateQuantity }) {
    const [cartState, setCartState] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

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
            if (
                (cartState && event.target.closest(`.${styles.windowCart}`)) ||
            event.target.closest(`.${styles.cartIcon}`) ||
            event.target.closest('.trash-icon')
            ) {
                return;
            }
            setCartState(false);
        }
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [cartState]);

    return (
        <header>
            <div className={styles.topBlock}>
                <h1 className={styles.logo}>Monika Lingerie</h1>
                <nav className={styles.headerNavigation}>
                    <a className={styles.itemNavigation} href="#">Каталог</a>
                    <a className={styles.itemNavigation} href="#">Про нас</a>
                    <a className={styles.itemNavigation} href="#">Контакты</a>
                    <BsFillCartFill
                        onClick={() => setCartState(cartState => !cartState)}
                        className={`${styles.cartIcon} ${cartState ? styles.active : ''}`} />
                </nav>
                {cartState && (
                    <div className={styles.windowCart}>
                        {orders.length > 0 ? (
                            orders.map(element => (
                                <OrderItem
                                    key={element.id}
                                    item={element}
                                    onRemove={onRemove}
                                    onUpdateQuantity={updateQuantity}
                                />
                            ))
                        ) : (
                            <h3 className={styles.empty}>Ваша корзина пуста</h3>
                        )}
                        {orders.length > 0 && (
                            <b className={styles.totalPriceText}>Итоговая сумма к оплате: {totalPrice} грн.</b>
                        )}
                    </div>
                )}
            </div>
            <div className={styles.banner}></div>
        </header>
    );
}
