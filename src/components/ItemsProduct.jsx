import React from 'react'
import Item from './Item'

export default function ItemsProduct({ items, onAdd }) {
    return (
        <main>
            {items.map(element => (
                <Item
                    key={element.id}
                    item={element}
                    onAdd={onAdd} />
            ))}
        </main>
    )
}
