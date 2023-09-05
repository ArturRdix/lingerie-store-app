import React from 'react'
import ProductItem from './ProductItem/ProductItem'
import styles from './ProductList.module.css'

export default function ProductList({ items, onAdd }) {
    return (
        <main className={styles.productWrapper}>
            {items.map(element => (
                <ProductItem
                    key={element.id}
                    item={element}
                    onAdd={onAdd} />
            ))}
        </main>
    )
}
