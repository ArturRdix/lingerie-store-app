import React, {useEffect, useMemo, useState} from 'react'
import {useParams} from 'react-router-dom'
import styles from './Product.module.css'
import ImgSlider from '../components/ImgSlider/ImgSlider';
import originsItemsStore from '../store/originsItemsStore';
import ordersStore from '../store/ordersStore';
import {observer} from "mobx-react-lite";

function Product() {
    const {id} = useParams();
    const selectedItem = {...originsItemsStore.items.find(item => item.id === Number(id))};
    const [optionsItem, setOptionsItem] = useState({});
    const [optionsSum, setOptionsSum] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({
        typeTop: 'false',
        sizeTop: 'false',
        typeBottom: 'false',
        sizeBottom: 'false',
    });
    const [disable, setDisable] = useState(true);
    let options = [
        {
            name: 'garter',
            title: 'Гартер',
            price: 199,
        },
        {
            name: 'poyas',
            title: 'Пояс',
            price: 399,
        },
        {
            name: 'box',
            title: 'Подарочная упаковка',
            price: 50,
        },
    ];

    useEffect(() => {
        if (selectedOptions.typeTop !== 'false' &&
            selectedOptions.sizeTop !== 'false' &&
            selectedOptions.typeBottom !== 'false' &&
            selectedOptions.sizeBottom !== 'false') {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [selectedOptions]);

    if (selectedItem?.id == null) {
        return <div>Товар не найден</div>;
    }

    selectedItem.options = optionsItem;

    const handleChange = (event, option) => {
        let checked = event.target.checked;
        option.checked = checked;
        if (checked) {
            optionsItem[option.name] = {
                name: option.name,
                title: option.title,
                price: option.price,
            };
        } else {
            delete optionsItem[option.name];
        }
        updateOptionsSum();
        //setOptionsItem({...optionsItem});
        //setOptions(options);
    };

    function updateOptionsSum() {
        let optionsSum = 0;
        for (const option of Object.values(optionsItem)) {
            optionsSum += option.price;
        }
        setOptionsSum(optionsSum);
    }

    return (
        <div className={styles.contentWrap}>
            <div className={styles.leftImgBlock}>
                <ImgSlider imgItems={selectedItem.img}/>
            </div>
            <div className={styles.rightInfoBlock}>
                <h1 className={styles.title}>{selectedItem.title}</h1>
                <h3 className={styles.price}>
                    {selectedItem.price},00 грн {optionsSum > 0 && <span className={styles}>+{optionsSum} грн</span>}
                </h3>

                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <td className={styles.label}>
                            <label htmlFor="forColor">Тип лифчика</label>
                        </td>
                        <td className={styles.value}>
                            <select onChange={(e) => {
                                setSelectedOptions({
                                    ...selectedOptions,
                                    typeTop: e.target.value
                                })
                            }} className={styles.select} name="attributeColor" id="forColor">
                                <option value='false'>Выберите опцию</option>
                                {selectedItem.option && selectedItem.option.typeTop.map((el) => (
                                    <option key={el.value} value={el.value}>
                                        {el.label}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>
                            <label htmlFor="forSizeTop">Размер верха</label>
                        </td>
                        <td className={styles.value}>
                            <select onChange={(e) => {
                                setSelectedOptions({
                                    ...selectedOptions,
                                    sizeTop: e.target.value
                                })
                            }} className={styles.select} name="attributeSizeTop" id="forSizeTop">
                                <option value='false'>Выберите опцию</option>
                                {selectedItem.option && selectedItem.option.sizeTop.map((el) => (
                                    <option key={el.value} value={el.value}>
                                        {el.label}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>
                            <label htmlFor="forUnderpants">Тип трусов</label>
                        </td>
                        <td className={styles.value}>
                            <select onChange={(e) => {
                                setSelectedOptions({
                                    ...selectedOptions,
                                    typeBottom: e.target.value
                                })
                            }} className={styles.select} name="attributeUnderpants" id="forUnderpants">
                                <option value='false'>Выберите опцию</option>
                                {selectedItem.option && selectedItem.option.typeBottom.map((el) => (
                                    <option key={el.value} value={el.value}>
                                        {el.label}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.label}>
                            <label htmlFor="forSizeBottom">Размер низа</label>
                        </td>
                        <td className={styles.value}>
                            <select onChange={(e) => {
                                setSelectedOptions({
                                    ...selectedOptions,
                                    sizeBottom: e.target.value
                                })
                            }} className={styles.select} name="attributeSizeBottom" id="forSizeBottom">
                                <option value='false'>Выберите опцию</option>
                                {selectedItem.option && selectedItem.option.sizeBottom.map((el) => (
                                    <option key={el.value} value={el.value}>
                                        {el.label}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Дополнителная опция:</strong>
                        </td>
                    </tr>
                    <tr className={styles.additionOption}>
                        {
                            options.map(option => <td key={option.name} className={styles.additionItem}>
                                <input
                                    onChange={e => handleChange(e, option)}
                                    type="checkbox"
                                    name={option.name}
                                    id={`optional${option.name}`}
                                />
                                <label htmlFor={`optional${option.name}`}>{option.title} <span
                                    className={styles}>(+{option.price} грн)</span>
                                </label>
                            </td>)
                        }
                    </tr>
                    </tbody>
                </table>
                <button
                    onClick={() => {
                        ordersStore.addToOrder(selectedItem)
                    }} className={styles.addCartButton}
                    disabled={disable}
                > Добавить в корзину
                </button>
                {disable &&
                    <h3 className={styles.warningText}>Выберите пожалуйста опции к заказу</h3>
                }
            </div>
        </div>
    )
}

export default observer(Product)