import React, { useEffect } from 'react';
import OrderItem from '../OrderItem/OrderItem';
import styles from './CartModal.module.css';

export default function CartModal({ orders, onRemove, onUpdateQuantity, isOpen, onClose, totalPrice }) {

    function handleModalClick(event) {
        event.stopPropagation();
    }

    return (
        <div className={`${styles.cartModal} ${isOpen ? styles.open : ''}`}
            onClick={handleModalClick}>

            <div className={styles.cartHeader}>
                <h2 className={styles.cartTitle}>Корзина</h2>
            </div>
            <div className={styles.cartItems}>
                {orders.length > 0 ? (
                    orders.map(element => (
                        <OrderItem
                            key={element.id}
                            item={element}
                            onRemove={onRemove}
                            onUpdateQuantity={onUpdateQuantity}
                        />
                    ))) : (<h3 className={styles.empty}>Ваша корзина пуста</h3>)}
            </div>

            {orders.length > 0 && (
                <div className={styles.submitOrderBlock}>
                    <b className={styles.totalPriceText}>Сумма: {totalPrice} грн.</b>
                    <button className={styles.submitButton}>Оформить заказ</button>
                </div>
            )}

        </div>
    );
}
