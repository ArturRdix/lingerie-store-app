import React, { useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styles from './OrderItem.module.css'

export default function OrderItem({ item, onRemove, onUpdateQuantity }) {
    const [inputQuantity, setInputQuantity] = useState(item.quantity);

    const handleQuantityChange = (event) => {
        let newQuantity = parseInt(event.target.value, 10);

        if (newQuantity <= 0) {
            newQuantity = 1;
        } if (newQuantity >= 99) {
            newQuantity = 99;
        }

        setInputQuantity(newQuantity);
        onUpdateQuantity(item.id, newQuantity);
    };

    return (
        <div className={styles.itemOrder}>
            <img className={styles.itemImg} src={"./product-images/" + item.img} />
            <div className={styles.rightBlock}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
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
                                onUpdateQuantity(item.id, newQuantity);
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
                                onUpdateQuantity(item.id, newQuantity);
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
                        onRemove(item);
                    }}
                    className={styles.trashIcon}
                />

            </div>
        </div>
    );
}
