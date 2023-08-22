import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ items, onAdd }) {
    return (
        <main>
            {items.map(element => (
                <ProductItem
                    key={element.id}
                    item={element}
                    onAdd={onAdd} />
            ))}
        </main>
    )
}
