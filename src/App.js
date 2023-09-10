import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import Dostavka from './Pages/Dostavka';
import Main from './Pages/Main';
import Product from './Pages/Product';

function App() {
  const [originslItems, setOriginslItems] = useState([])
  const [items, setItems] = useState(originslItems)
  const [orders, setOrders] = useState([]);
  const [popups, setPopups] = useState([]);

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

  useEffect(() => {
    setItems(originslItems)
  }, [originslItems])

  
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

  const wrapper = document.querySelector('.wrapper');
  if (wrapper) {
    wrapper.scrollTo(0, 0);
  }
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