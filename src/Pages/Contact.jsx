import React, { useState } from 'react';
import './Contact.css';

export default function Contact({orderItems}) {
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

  return (
    <div className="container">
      <div className="contact-info">
        <h2>Контактная информация</h2>
        <p>Для связи с нами, пожалуйста, используйте следующие данные:</p>
        <p>Электронная почта: <a href="rdixlovest@gmail.com">rdixlovest@gmail.com</a></p>
        <p>Instagram: <a href="https://www.instagram.com/monika.lingeriee/">Monika.Lingeriee</a></p>
      </div>
      <div className="contact-form">
        <h2>Свяжитесь с нами</h2>
        <form action="обработчик_формы.php" method="post">
          <input placeholder='Имя' type="text" id="name" name="name" required />
          <input placeholder='Тема запроса' type="text" id="typeRequest" name="typeRequest" required />
          <input
            type="tel"
            placeholder="Номер тел."
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength='15'
            required
          />
          <input placeholder='Email' type="email" id="email" name="email" required />
          <textarea placeholder='Сообщение' id="message" name="message" rows="4" required />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}

