import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Product.module.css'
import ImgSlider from '../components/ImgSlider/ImgSlider';

export default function Product({ item, onAdd }) {
  const { id } = useParams()
  const selectedItem = item.find(item => item.id === Number(id));
  const [garter, setGarter] = useState(false)
  const [poyas, setPoyas] = useState(false)
  const [box, setBox] = useState(false)
  const [addTotalSum, setAddTotalSum] = useState(0);



  if (!selectedItem) {
    return <div>Товар не найден</div>;
  }

  const handleGarterChange = () => {
    setGarter(!garter);
    if (!garter) {
      setAddTotalSum(addTotalSum + 199);
      selectedItem.garter = 'Гартер к заказу';
    } else {
      setAddTotalSum(addTotalSum - 199);
      delete selectedItem.garter;
    }
  };

  const handlePoyasChange = () => {
    setPoyas(!poyas);
    if (!poyas) {
      setAddTotalSum(addTotalSum + 399);
      selectedItem.poyas = 'Пояс к заказу';
    } else {
      setAddTotalSum(addTotalSum - 399);
      delete selectedItem.poyas;
    }
  };

  const handleBoxChange = () => {
    setBox(!box);
    if (!box) {
      setAddTotalSum(addTotalSum + 50);
      selectedItem.box = 'Подарочная упаковка';
    } else {
      setAddTotalSum(addTotalSum - 50);
      delete selectedItem.box;
    }
  };

  return (
    <div className={styles.contentWrap}>
      <div className={styles.leftImgBlock}>
        <ImgSlider imgItems={selectedItem.img} />
      </div>
      <div className={styles.rightInfoBlock}>
        <h1 className={styles.title}>{selectedItem.title}</h1>
        <h3 className={styles.price}>
          {selectedItem.price},00 грн {addTotalSum > 0 && <span className={styles}>+{addTotalSum} грн</span>}
        </h3>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>
                <label htmlFor="forColor">Тип лифчика</label>
              </td>
              <td className={styles.value}>
                <select  onChange={(e) => { console.log(e.target.value) }} className={styles.select} name="attributeColor" id="forColor">
                  <option value>Выберите опцию</option>
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
                <select  onChange={(e) => { console.log(e.target.value) }} className={styles.select} name="attributeSizeTop" id="forSizeTop">
                  <option value>Выберите опцию</option>
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
                <select  onChange={(e) => { console.log(e.target.value) }} className={styles.select} name="attributeUnderpants" id="forUnderpants">
                  <option value>Выберите опцию</option>
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
                <select onChange={(e) => { console.log(e.target.value) }} className={styles.select} name="attributeSizeBottom" id="forSizeBottom">
                  <option value=''>Выберите опцию</option>
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
              <td className={styles.additionItem}>
                <input
                  onChange={handleGarterChange}
                  checked={garter}
                  type="checkbox"
                  name="garter"
                  id="optionalGarter"
                />
                <label htmlFor="optionalGarter">Гартер <span className={styles}>(+199 грн)</span></label>
              </td>
              <td className={styles.additionItem}>
                <input
                  onChange={handlePoyasChange}
                  checked={poyas}
                  type="checkbox"
                  name="poyas"
                  id="optionalPoyas"
                />
                <label htmlFor="optionalPoyas">Пояс <span className={styles}>(+399 грн)</span></label>
              </td>
              <td className={styles.additionItem}>
                <input
                  onChange={handleBoxChange}
                  checked={box}
                  type="checkbox"
                  name="box"
                  id="optionalBox"
                />
                <label htmlFor="optionalBox">Подарочная упаковка <span className={styles}>(+50 грн)</span></label>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => {
          onAdd(selectedItem, addTotalSum)
        }} className={styles.addCartButton}> Добавить в корзину</button>
      </div>
    </div>
  )
}
