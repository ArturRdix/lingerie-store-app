import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import Dostavka from './Pages/Dostavka';
import Main from './Pages/Main';
import Product from './Pages/Product';

function App() {
  const originslItems = [
    {
      id: 1,
      title: 'Голубой комлпект белья',
      img: ['blueWhite_set_lingerie.heic'],
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: 1200,
      color: 'blue',
      option: {
        typeTop: [
          {
            value: 'classic',
            label: 'Классический'
          }, {
            value: 'bralet',
            label: 'Бралет'
          },
        ],
        sizeTop: [
          {
            value: 'xs',
            label: 'XS'
          }, {
            value: 's',
            label: 'S'
          }, {
            value: 'm',
            label: 'M'
          }, {
            value: 'l',
            label: 'L'
          },
        ],
        typeBottom: [
          {
            value: 'stringi',
            label: 'Стринги'
          }, {
            value: 'stringiRegul',
            label: 'Стринги на регуляторах'
          }, {
            value: 'brasilian',
            label: 'Бразильяны'
          }, {
            value: 'brasilianRegul',
            label: 'Бразильяны на регуляторах'
          },
        ],
        sizeBottom: [
          {
            value: 'xs',
            label: 'XS'
          }, {
            value: 's',
            label: 'S'
          }, {
            value: 'm',
            label: 'M'
          }, {
            value: 'l',
            label: 'L'
          },
        ]
      }
    }
    ,
    {
      id: 2,
      title: 'Персиковый комлпект белья',
      img: ['peach_set1.heic','peach_set2.heic','peach_set3.heic'],
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: 980,
      color: 'pink'
    },
    {
      id: 3,
      title: 'Розовые трусы(на регуляторах)',
      img: ['pink_underpants.heic'],
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: 550,
      color: 'pink'
    },
    {
      id: 4,
      title: 'Крсаный комплект белья',
      img: ['red_set_lingerie.heic'],
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: 1050,
      color: 'red'
    },
    {
      id: 5,
      title: 'Лифчики',
      img: ['redBlack-brssiere.heic'],
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: 340,
      color: 'red'
    },
    {
      id: 6,
      title: 'Белый комплект белья',
      img: ['white_set_lingerie1.heic', 'white_set_lingerie2.heic', 'white_set_lingerie3.heic'],
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: 1140,
      color: 'white'
    },
    {
      id: 7,
      title: 'Черный комплект белья',
      img: ['black_set.heic'],
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: 1140,
      color: 'black'
    },
    {
      id: 8,
      title: 'Розовый комплект белья',
      img: ['pink_set.heic'],
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: 1140,
      color: 'pink'
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

  const addToOrder = (item, addSum) => {
    console.log(item);
    const existingOrderItem = orders.find(orderItem => orderItem.id === item.id);

    if (existingOrderItem) {
      const updatedOrders = orders.map(orderItem =>
        (orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
      );

      setOrders(updatedOrders);
    }
    else {
      // Создаем новый объект item с обновленным значением price
      const updatedItem = { ...item, price: item.price + addSum };

      const updatedOrders = [...orders, { ...updatedItem, quantity: 1 }];

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

      <main className='main-container'>
        <Header
          updateQuantity={updateQuantity}
          onRemove={removeFromOrder}
          orders={orders} />
        <Routes>
          <Route path='/product/:id'
            element={
              <Product
                onAdd={addToOrder}
                item={items} />
            }
          />
          <Route path='/'
            element={
              <Main
                colorCategory={colorCategory}
                items={items} />
            }
          />
          <Route path='/dostavka' element={<Dostavka />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;