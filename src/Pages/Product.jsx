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
        <h1 className={styles.title}>Неебический комлпект белья для товей шлюхи</h1>
        <h3 className={styles.price}>999999грн</h3>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>
                <label htmlFor="forColor">Цвет</label>
              </td>
              <td className={styles.value}>
                <select className={styles.select} name="attributeColor" id="forColor">
                  <option value>Выберите опцию</option>
                  <option value="">Красный</option>
                  <option value="">Синий</option>
                  <option value="">Чёрный</option>
                  <option value="">Белый</option>
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
          </tbody>
        </table>
      </div>
    </div>
  )
}
