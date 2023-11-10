import React, {useEffect, useState} from 'react';
import OrderItem from '../OrderItem/OrderItem';
import styles from './CartModal.module.css';
import {Link} from 'react-router-dom';
import ordersStore from '../../store/ordersStore';
import {observer} from "mobx-react-lite";

function CartModal({onClose, isOpen}) {
    const totalPrice = ordersStore.totalPrice;

    return (
        <div className={`${styles.cartModal} ${isOpen ? styles.open : ''}`}
             onClick={event => event.stopPropagation()}>
            <div className={styles.cartContent}>
                <div className={styles.cartHeader}>
                    <h2 className={styles.cartTitle}>Корзина</h2>
                </div>
                <div className={styles.cartItems}>
                    {ordersStore.orders.length > 0 ? (
                        ordersStore.orders.map(element => (
                            <OrderItem
                                key={ordersStore.getItemKey(element)}
                                item={element}
                            />
                        ))) : (<h3 className={styles.empty}>Ваша корзина пуста</h3>)}
                </div>

                {ordersStore.orders.length > 0 && (
                    <div className={styles.submitOrderBlock}>
                        <b className={styles.totalPriceText}>Сумма: {totalPrice} грн.</b>
                        <Link to='/checkout'>
                            <button className={styles.submitButton} onClick={() => onClose()}>Оформить заказ</button>
                        </Link>

                    </div>
                )}
            </div>

            {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
        </div>
    );
}

export default observer(CartModal);