import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemsProduct from "./components/ItemsProduct";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Голубой комлпект белья',
      img: 'blueWhite_set_lingerie.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '1200'
    },
    {
      id: 2,
      title: 'Персиковый комлпект белья',
      img: 'peach_set1.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '980'
    },
    {
      id: 3,
      title: 'Розовые трусы(на регуляторах)',
      img: 'pink_underpants.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '550'
    },
    {
      id: 4,
      title: 'Крсаный комплект белья',
      img: 'red_set_lingerie.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '1050'
    },
    {
      id: 5,
      title: 'Лифчики',
      img: 'redBlack-brssiere.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '340'
    },
    {
      id: 6,
      title: 'Белый комплект белья',
      img: 'white_set_lingerie1.heic',
      desc: 'Тут какое-то краткое описание, материалы белья и прочее-прочее',
      price: '1140'
    },
  ])
  const [orders, setOrders] = useState([])

  const updateQuantity = (itemId, newQuantity) => {
    const updatedOrders = orders.map(orderItem => {
        if (orderItem.id === itemId) {
            return { ...orderItem, quantity: newQuantity };
        }
        return orderItem;
    });

    setOrders(updatedOrders);
};

  const addToOrder = (item) => {
    let isInArray = false;
    let updatedOrders = orders.map(orderItem => {
      if (orderItem.id === item.id) {
        isInArray = true;
        return { ...orderItem, quantity: orderItem.quantity + 1 };
      }
      return orderItem;
    });

    if (!isInArray) {
      updatedOrders.push({ ...item, quantity: 1 });
    }

    setOrders(updatedOrders);
  };

  const removeFromOrder = (item) => {
    const updatedOrders = orders.filter(orderItem => orderItem.id !== item.id);
    setOrders(updatedOrders);
  };
  return (
    <div className="wrapper">
      <Header updateQuantity={updateQuantity} onRemove={removeFromOrder} orders={orders} />
      <ItemsProduct onAdd={addToOrder} items={items} />
      <Footer />
    </div>
  );
}

export default App;
