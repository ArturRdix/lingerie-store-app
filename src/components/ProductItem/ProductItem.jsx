import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductItem.module.css'

export default function ProductItem({ item, onAdd }) {
    return (

        <div className={styles.item}>
            <Link to={`/product/${item.id}`}>
                <div className={styles.imageBlock}>
                    <Link to={`/product/${item.id}`}>
                        <button className={styles.addCart}>Купить</button>
                    </Link>
                    <img className={styles.itemImg} src={"../../product-images/" + item.img[0]} alt={item.title} />
                    </div>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <div className={styles.bottomBlock}>
                    <b className={styles.itemPrice}>{item.price}₴</b>
                </div>
            </Link>
        </div>

    )
}
