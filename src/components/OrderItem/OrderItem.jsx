import React, {useEffect, useState} from 'react';
import {BsTrashFill} from 'react-icons/bs';
import styles from './OrderItem.module.css'
import ordersStore from '../../store/ordersStore';

export default function OrderItem({item, setTotalPrice}) {
    const [inputQuantity, setInputQuantity] = useState(item.quantity);
    const priceItem = item.price + (Object.values(item.options)
        .reduce((sum, item) => sum + item.price, 0) ?? 0);

    //useEffect для отслеживания изменений item.quantity
    useEffect(() => {
        setInputQuantity(item.quantity);
    }, [item.quantity]);

    const handleQuantityChange = (event) => {
        let newQuantity = parseInt(event.target.value, 10);

        if (newQuantity <= 0) {
            newQuantity = 1;
        }
        if (newQuantity >= 99) {
            newQuantity = 99;
        }

        setInputQuantity(newQuantity);
        ordersStore.updateQuantity(item, newQuantity);
    };
    return (
        <div className={styles.itemOrder}>
            <img className={styles.itemImg} src={item.img[0]}/>
            <div className={styles.rightBlock}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <div className={styles.addDetalis}>
                    {
                        Object.values(item.options).map(option =>
                            <span key={option.name}>+{option.title}</span>
                        )
                    }
                </div>
                <b className={styles.itemPrice}>
                    {inputQuantity > 1
                        ? `${priceItem}₴ x ${inputQuantity} = ${priceItem * inputQuantity}₴`
                        : `${priceItem}₴`}
                </b>
                <div className={styles.quantityControls}>
                    <button className={styles.btnCart}
                            onClick={() => {
                                if (inputQuantity > 1) {
                                    const newQuantity = inputQuantity - 1;
                                    setInputQuantity(newQuantity);
                                    ordersStore.updateQuantity(item, newQuantity);
                                }
                            }}>-
                    </button>
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
                                    ordersStore.updateQuantity(item, newQuantity);
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
