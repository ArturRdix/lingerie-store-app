import React from 'react'
import { useState } from 'react'
import styles from './Category.module.css'

export default function Category({ colorCategory }) {
    const [category, setCategory] = useState([
        {
            key: 'all',
            name: 'Все'
        },
        {
            key: 'red',
            name: 'Красный'
        },
        {
            key: 'blue',
            name: 'Голубой'
        },
        {
            key: 'black',
            name: 'Чёрный'
        },
        {
            key: 'white',
            name: 'Белый'
        },
        {
            key: 'pink',
            name: 'Розовый'
        }
    ])

    return (
        <div className={styles.categorys}>
            {category.map(el => (
                <div
                    className={styles.categoryItem}
                    key={el.key}
                    onClick={()=>colorCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}
