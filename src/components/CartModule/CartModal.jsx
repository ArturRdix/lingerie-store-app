import React, { useEffect, useState } from 'react';
import OrderItem from '../OrderItem/OrderItem';
import styles from './CartModal.module.css';
import { Link } from 'react-router-dom';
import ordersStore from '../../store/ordersStore';
import ordersQuantityStore from '../../store/ordersQuantityStore';

export default function CartModal({ onClose, isOpen }) {
    const [totalPrice, setTotalPrice] = useState(ordersQuantityStore.totalPrice)
    function handleModalClick(event) {
        event.stopPropagation();
    }
    return (
        <div className={`${styles.cartModal} ${isOpen ? styles.open : ''}`}
            onClick={handleModalClick}>
            <div className={styles.cartContent}>
                <div className={styles.cartHeader}>
                    <h2 className={styles.cartTitle}>Корзина</h2>
                </div>
                <div className={styles.cartItems}>
                    {ordersStore.orders.length > 0 ? (
                        ordersStore.orders.map(element => (
                            <OrderItem
                                key={element.id}
                                item={element}
                                setTotalPrice={setTotalPrice}
                            />
                        ))) : (<h3 className={styles.empty}>Ваша корзина пуста</h3>)}
                </div>

                {ordersStore.orders.length > 0 && (
                    <div className={styles.submitOrderBlock}>
                        <b className={styles.totalPriceText}>Сумма: {totalPrice} грн.</b>
                        <Link to='/checkout'><button className={styles.submitButton} onClick={() => onClose()}>Оформить заказ</button></Link>

                    </div>
                )}
            </div>

            {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
        </div>
    );
}
