import React from 'react'
import styles from './Dostavka.module.css'

export default function Dostavka() {
  return (
    <div className={styles.wrapper}>
      <p className={styles}>Наш інтернет-магазин MONIKA LENGERIE надсилає покупки по всій території України.</p>
      <p className={styles}>
        Ми доставляємо замовлення кур’єрськими службами «Нова пошта». Уважно перевіряйте ваше замовлення на цілісність і кількість одиниць товару на пошті.
        Після отримання вами посилки, наша компанія відповідальності за посилку не несе.
      </p>
      <p className={styles}>
        Поняття мінімальне замовлення для нас не існує. Доставка здійснюється за ваш рахунок, згідно діючих тарифів перевізників.
      </p>
      <p className={styles}>
        Варіанти оплати:
        <ul>
          <li>при оформленні замовлення на сайті передоплата 100%.</li>
          <li>при оформленні замовлення на сторінці в Інстаграм мінімальна передоплата 50% на картку ПриватБанку.
            Залишок оплачується при отриманні товару післяплатою на пошті.
          </li>
        </ul>
      </p>
      <p className={styles}>
        Якщо ви візуально оцінили товар і зрозуміли, що він вам не подобається, або відчули дискомфортні відчуття під
        примірки, ви завжди можете сказати нам про це, і ми постараємося вирішити цю проблему разом з вами.
      </p>
      <p className={styles}>
        Нижня білизна, купальні костюми, піжами, панчохи, згідно з постановою Кабінету Міністрів України обміну та поверненню не підлягають.
      </p>
    </div>

  )
}