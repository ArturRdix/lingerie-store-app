import React from 'react'
import styles from './Product.module.css'

export default function Product() {
  return (
    <div className={styles.contentWrap}>
      <div className={styles.leftImgBlock}>
        <div className={styles.mainImg}>
          <div className={styles.img}></div>
        </div>
      </div>
      <div className={styles.rightInfoBlock}>
        <h1 className={styles.title}>Нормальное название товара, Оле - не нравится</h1>
        <h3 className={styles.price}>1999,00 грн</h3>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>
                <label htmlFor="forColor">Тип лифчика</label>
              </td>
              <td className={styles.value}>
                <select className={styles.select} name="attributeColor" id="forColor">
                  <option value>Выберите опцию</option>
                  <option value="">Класический</option>
                  <option value="">Бралет</option>
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
                  <option value="">XS</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
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
                  <option value="">Бразильяны</option>
                  <option value="">Бразильяны на регуляторах</option>
                  <option value="">Стринги</option>
                  <option value="">Стринги на регуляторах</option>
                </select>
              </td>
            </tr>
            <tr> <td className={styles.label}>
              <label htmlFor="forSizeBottom">Размер низа</label>
            </td>
              <td className={styles.value}>
                <select className={styles.select} name="attributeSizeBottom" id="forSizeBottom">
                  <option value>Выберите опцию</option>
                  <option value="">XS</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
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
