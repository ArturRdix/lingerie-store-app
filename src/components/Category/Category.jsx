import React from 'react'
import { useState } from 'react'
import styles from './Category.module.css'
import filterItemsStore from '../../store/filterItemsStore'

export default function Category() {
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
        },
        {
            key: 'lavanda',
            name: 'Лавандовый'
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
    const [price, setPrice] = useState([
        {
            key: 'default',
            name: 'По-умолчанию'
        },
        {
            key: 'priceUp',
            name: 'По-возрастанию'
        },
        {
            key: 'priceDown',
            name: 'По-убыванию'
        }
    ])

    const handleColorChange = (event) => {
        filterItemsStore.selectedColor = event.target.value;
    };

    const handleTypeChange = (event) => {
        filterItemsStore.selectedType = event.target.value;
    };

    const handlePriceChange = (event) => {
        filterItemsStore.selectedPrice = event.target.value;
    };

    return (
        <div className={styles.categorys}>
            <div className={styles.selectBlock}>
                <label htmlFor="price">Цена: </label>
                <select className={styles.select} onChange={handlePriceChange} id="price">
                    {price.map((el) => (
                        <option value={el.key} key={el.key}>
                            {el.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.selectBlock}>
                <label htmlFor="colors">Цвет: </label>
                <select className={styles.select} onChange={handleColorChange} id="colors">
                    {colors.map((el) => (
                        <option value={el.key} key={el.key}>
                            {el.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.selectBlock}>
                <label htmlFor="types">Тип белья: </label>
                <select className={styles.select} onChange={handleTypeChange} id="types">
                    {types.map((el) => (
                        <option value={el.key} key={el.key}>
                            {el.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
