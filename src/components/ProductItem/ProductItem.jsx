import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductItem.module.css'

export default function ProductItem({ item}) {
    return (
        <div className={styles.item}>
            <Link to={`/product/${item.id}`}>
                <div className={styles.imageBlock}>
                    <button className={styles.addCart}>Купить</button>
                    <img className={styles.itemImg} src={item.img[0]} alt={item.title} />
                </div>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <div className={styles.bottomBlock}>
                    <b className={styles.itemPrice}>{item.price},00 грн.</b>
                </div>
            </Link>
        </div>
    )
}
