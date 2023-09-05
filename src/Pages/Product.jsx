import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Product.module.css'

export default function Product({ item }) {
  const { id } = useParams()

  return (
    <div className={styles.contentWrap}>
      <div className={styles.leftImgBlock}>
        <div className={styles.mainImg}>
          <div className={styles.img}>
            <img className={styles.mainImg} src={"./../../product-images/" + item[id - 1].img} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.rightInfoBlock}>
        <h1 className={styles.title}>{item[id - 1].title}</h1>
        <h3 className={styles.price}>{item[id - 1].price},00 грн</h3>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>
                <label htmlFor="forColor">Тип лифчика</label>
              </td>
              <td className={styles.value}>
                <select className={styles.select} name="attributeColor" id="forColor">
                  <option value>Выберите опцию</option>
                  {item[id - 1].option && item[id - 1].option.typeTop.map((el) => (
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
                <select className={styles.select} name="attributeSizeTop" id="forSizeTop">
                  <option value>Выберите опцию</option>
                  {item[id - 1].option && item[id - 1].option.sizeTop.map((el) => (
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
                <select className={styles.select} name="attributeUnderpants" id="forUnderpants">
                  <option value>Выберите опцию</option>
                  {item[id - 1].option && item[id - 1].option.typeBottom.map((el) => (
                    <option key={el.value} value={el.value}>
                      {el.label}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr> <td className={styles.label}>
              <label htmlFor="forSizeBottom">Размер низа</label>
            </td>
              <td className={styles.value}>
                <select className={styles.select} name="attributeSizeBottom" id="forSizeBottom">
                  <option value>Выберите опцию</option>
                  {item[id - 1].option && item[id - 1].option.sizeBottom.map((el) => (
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
                <input type="checkbox" name="garter" id="optionalGarter" />
                <label htmlFor="optionalGarter">Гартер</label>
              </td>
              <td className={styles.additionItem}>
                <input type="checkbox" name="bell" id="optionalGarter" />
                <label htmlFor="optionalBelt">Пояс</label>
              </td>
              <td className={styles.additionItem}>
                <input type="checkbox" name="box" id="optionalBox" />
                <label htmlFor="optionalBox">Подарочная упаковка</label>
              </td>
            </tr>
          </tbody>
        </table>
        <button className={styles.addCartButton}> Добавить в корзину</button>
      </div>
    </div>
  )
}
