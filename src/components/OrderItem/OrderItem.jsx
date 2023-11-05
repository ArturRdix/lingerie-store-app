import React, { useEffect, useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styles from './OrderItem.module.css'
import ordersStore from '../../store/ordersStore';
import ordersQuantityStore from "../../store/ordersQuantityStore";

export default function OrderItem({item, setTotalPrice}) {
    const [inputQuantity, setInputQuantity] = useState(item.quantity);

    //useEffect для отслеживания изменений item.quantity
    useEffect(() => {
        setInputQuantity(item.quantity);
    }, [item.quantity]);

    const handleQuantityChange = (event) => {
        let newQuantity = parseInt(event.target.value, 10);

        if (newQuantity <= 0) {
            newQuantity = 1;
        } if (newQuantity >= 99) {
            newQuantity = 99;
        }

        setInputQuantity(newQuantity);
        ordersStore.updateQuantity(item.id, newQuantity);
        setTotalPrice(ordersQuantityStore.totalPrice);
    };
    return (
        <div className={styles.itemOrder}>
            <img className={styles.itemImg} src={item.img[0]} />
            <div className={styles.rightBlock}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <div className={styles.addDetalis}>
                    {item.garter && <span>+Гартер</span>}
                    {item.poyas && <span>+Пояс</span>}
                    {item.box && <span>+Упаковка</span>}
                </div>
                <b className={styles.itemPrice}>
                    {inputQuantity > 1
                        ? `${item.price}₴ x ${inputQuantity} = ${item.price * inputQuantity}₴`
                        : `${item.price}₴`}
                </b>
                <div className={styles.quantityControls}>
                    <button className={styles.btnCart}
                        onClick={() => {
                            if (inputQuantity > 1) {
                                const newQuantity = inputQuantity - 1;
                                setInputQuantity(newQuantity);
                                ordersStore.updateQuantity(item.id, newQuantity);
                                setTotalPrice(ordersQuantityStore.totalPrice);
                            }
                        }}>-</button>
                    <input
                        className={styles.inputCart}
                        type="number"
                        value={inputQuantity}
                        min={1}
                        max={99}
                        onChange={handleQuantityChange}
                    />
                    <button className={styles.btnCart}
                        onClick={() => {
                            if (inputQuantity < 99) {
                                const newQuantity = inputQuantity + 1;
                                setInputQuantity(newQuantity);
                                ordersStore.updateQuantity(item.id, newQuantity);
                                setTotalPrice(ordersQuantityStore.totalPrice);
                            }
                        }}>
                        +
                    </button>
                </div>
            </div>

            <div className={styles.trashIconBlock}>
                <BsTrashFill
                    onClick={(event) => {
                        event.stopPropagation();
                        ordersStore.removeFromOrder(item);
                    }}
                    className={styles.trashIcon}
                />

            </div>
        </div>
    );
}
