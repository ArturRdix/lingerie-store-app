import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductList from './components/ProductList';
import Popup from './components/Popup/Popup';
import Category from './components/Category/Category';

function App() {
  const originslItems = [
    {
      id: 1,
      title: 'Голубой комлпект белья',
      img: 'blueWhite_set_lingerie.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '1200',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Персиковый комлпект белья',
      img: 'peach_set1.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '980',
      color: 'pink'
    },
    {
      id: 3,
      title: 'Розовые трусы(на регуляторах)',
      img: 'pink_underpants.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '550',
      color: 'pink'
    },
    {
      id: 4,
      title: 'Крсаный комплект белья',
      img: 'red_set_lingerie.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '1050',
      color: 'red'
    },
    {
      id: 5,
      title: 'Лифчики',
      img: 'redBlack-brssiere.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '340',
      color: 'red'
    },
    {
      id: 6,
      title: 'Белый комплект белья',
      img: 'white_set_lingerie1.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '1140',
      color: 'white'
    },
  ]

  const [items, setItems] = useState(originslItems)
  const [orders, setOrders] = useState([]);
  const [popups, setPopups] = useState([]);

  const colorCategory = (category) => {
    if (category === 'all') {
      setItems(originslItems);
    } else {
      setItems(originslItems.filter(item => item.color === category));
    }
  };


  const updateQuantity = (itemId, newQuantity) => {
    const updatedOrders = orders.map(orderItem =>
      orderItem.id === itemId ? { ...orderItem, quantity: newQuantity } : orderItem
    );

    setOrders(updatedOrders);
  };

  const addToOrder = (item) => {
    const existingOrderItem = orders.find(orderItem => orderItem.id === item.id);

    if (existingOrderItem) {
      const updatedOrders = orders.map(orderItem =>
        orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      );

      setOrders(updatedOrders);
    } else {
      const updatedOrders = [...orders, { ...item, quantity: 1 }];
      setOrders(updatedOrders);
    }

    setPopups(prevPopups => [...prevPopups, `${item.title} добавлен в корзину`]);
  };

  const removeFromOrder = (item) => {
    const updatedOrders = orders.filter(orderItem => orderItem.id !== item.id);
    setOrders(updatedOrders);
  };

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

      <Header updateQuantity={updateQuantity} onRemove={removeFromOrder} orders={orders} />
      <Category colorCategory={colorCategory} />
      <ProductList onAdd={addToOrder} items={items} />
      <Footer />
    </div>
  );
}

export default App;