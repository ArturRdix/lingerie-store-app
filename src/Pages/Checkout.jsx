import React, { useState } from 'react'
import styles from './Checkout.module.css'
import { Link } from 'react-router-dom';
import ordersStore from '../store/ordersStore';

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    region: '',
    postOffice: '',
    phoneNumber: '',
    comment: '',
  });
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');

    let formattedNumber = '';

    for (let i = 0; i < input.length; i++) {
      if (i === 0) {
        formattedNumber = `(${input[i]}`;
      } else if (i === 3) {
        formattedNumber += `) ${input[i]}`;
      } else if (i === 6 || i === 8 || i === 10) {
        formattedNumber += ` ${input[i]}`;
      } else {
        formattedNumber += input[i];
      }
    }

    setPhoneNumber(formattedNumber);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для отправки данных заказа
  };

  return (
    <>
      <h1>Оформление заказа</h1>
      {ordersStore.orders.length === 0 ? (
        <p>Ваша корзина пуста. <Link to="/">Вернуться к покупкам</Link></p>
      ) : (<div className={styles.orderForm}>
        <form className={styles.formBlock} onSubmit={handleSubmit}>
          <div className={styles.formItems}>
            <input
              placeholder='Имя'
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              placeholder='Фамилия'
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formItems}>
            <input
              placeholder='Область'
              type="text"
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              required
            />
            <input
              placeholder='Город'
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              placeholder='Номер отделения'
              type="text"
              id="postOffice"
              name="postOffice"
              value={formData.postOffice}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formItems}>
            <input
              type="tel"
              placeholder="Номер телефона"
              value={phoneNumber}
              onChange={(e) => {
                handlePhoneNumberChange(e);
                handleChange(e);
              }}
              maxLength="15"
              required
            />
            <input
              placeholder='Email'
              type="email"
              id="email"
              name="email" r
              equired />
          </div>

          <textarea
            placeholder='Комментарий к заказу'
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
          <button type="submit" className={styles.submitButton}>
            Оформить заказ
          </button>
        </form>
      </div>)}
    </>
  );
}