import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import Dostavka from './Pages/Dostavka';
import Main from './Pages/Main';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import ProNas from './Pages/ProNas';

function App() {
  // Инициализация переменных состояния
  const [originslItems, setOriginslItems] = useState([]); // Исходные товары из API
  const [items, setItems] = useState(originslItems); // Отфильтрованные товары, отображаемые на странице
  const [orders, setOrders] = useState([]); // Товары в корзине пользователя
  const [popups, setPopups] = useState([]); // Всплывающие сообщения
  const [selectedColor, setSelectedColor] = useState('all'); // Выбранный цвет товара
  const [selectedType, setSelectedType] = useState('all'); // Выбранный тип товара

  // Загрузка данных с сервера при загрузке компонента
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3030/api/products');
        const data = await response.json();
        setOriginslItems(data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // Обновление списка товаров при изменении исходных товаров
  useEffect(() => {
    setItems(originslItems);
  }, [originslItems]);

  // Фильтрация товаров по выбранным параметрам (цене,цвету и типу)
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/') { // Проверьте, что это не главная страница
      setSelectedColor('all');
      setSelectedType('all');
    }

    const filteredItems = originslItems.filter(item => {

      const isColorMatch = selectedColor === 'all' || item.color === selectedColor;
      const isTypeMatch = selectedType === 'all' || item.type === selectedType;

      return isColorMatch && isTypeMatch;
    });

    setItems(filteredItems);
  }, [selectedColor, selectedType, originslItems]);

  // Обновление количества товара в корзине
  const updateQuantity = (itemId, newQuantity) => {
    const updatedOrders = orders.map(orderItem =>
      orderItem.id === itemId ? { ...orderItem, quantity: newQuantity } : orderItem
    );

    setOrders(updatedOrders);
  };

  // Добавление товара в корзину
  const addToOrder = (item, addSum) => {
    console.log(item);
    const existingOrderItem = orders.find(orderItem => orderItem.id === item.id);

    if (existingOrderItem) {
      const updatedOrders = orders.map(orderItem =>
        (orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
      );

      setOrders(updatedOrders);
    } else {
      const updatedItem = { ...item, price: item.price + addSum };

      const updatedOrders = [...orders, { ...updatedItem, quantity: 1 }];

      setOrders(updatedOrders);
    }

    setPopups(prevPopups => [...prevPopups, `${item.title} добавлен в корзину`]);
  };

  // Удаление товара из корзины
  const removeFromOrder = (item) => {
    const updatedOrders = orders.filter(orderItem => orderItem.id !== item.id);
    setOrders(updatedOrders);
  };

  // Закрытие всплывающего окна
  const closePopup = (index) => {
    setPopups(prevPopups => prevPopups.filter((_, i) => i !== index));
  };

  return (
    <div className="wrapper">
      {popups.map((popup, index) => (
        <Popup
          key={index}
          message={popup}
          onPopupClose={closePopup}
          index={index}
        />
      ))}

      <main className='main-container'>
        <Header
          updateQuantity={updateQuantity}
          onRemove={removeFromOrder}
          orders={orders}
        />
        <Routes>
          <Route path='/product/:id'
            element={
              <Product
                onAdd={addToOrder}
                item={items}
              />
            }
          />
          <Route path='/'
            element={
              <Main
                typeCategory={setSelectedType}
                colorCategory={setSelectedColor}
                items={items}
              />
            }
          />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pro-nas' element={<ProNas />} />
          <Route path='/dostavka' element={<Dostavka />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
