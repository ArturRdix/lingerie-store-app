import React from 'react'
import styles from './ProductItem.module.css'

export default function ProductItem({ item, onAdd }) {
    return (
        <div className={styles.item}>
            <div className={styles.imageBlock}>
                <img className={styles.itemImg} src={"../../product-images/" + item.img} /></div>
            <h2 className={styles.itemTitle}>{item.title}</h2>
            <div className={styles.bottomBlock}>
                <b className={styles.itemPrice}>{item.price}₴</b>
                <div className={styles.addCart}
                    onClick={() => onAdd(item)}
                >+</div>
            </div>
        </div>
    )
}
