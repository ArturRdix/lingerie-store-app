import React from 'react'
import { useState } from 'react'
import styles from './Category.module.css'

export default function Category({ colorCategory, typeCategory }) {
    const [colors, setColors] = useState([
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
    const [types, setTypes] = useState([
        {
            key: 'all',
            name: 'Все'
        },
        {
            key: 'sets',
            name: 'Комплекты'
        },
        {
            key: 'underpants',
            name: 'Трусики'
        },
        {
            key: 'bras',
            name: 'Лифчики'
        }
    ])

    return (
        <div className={styles.categorys}>

            <div className={styles.selectBlock}>
                <label htmlFor="colors">Цвет: </label>
                <select className={styles} onChange={(el) => colorCategory(el.target.value)} name="" id="colors">
                    {colors.map(el => (
                        <option
                            className={styles}
                            value={el.key}
                            key={el.key}
                        >{el.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.selectBlock}>
                <label htmlFor="types">Тип белья: </label>
                <select className={styles} onChange={(el) => typeCategory(el.target.value)} name="" id="types">
                    {types.map(el => (
                        <option
                            value={el.key}
                            key={el.key}
                        >{el.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
