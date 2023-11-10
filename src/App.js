import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import Dostavka from './Pages/Dostavka';
import Main from './Pages/Main';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import ProNas from './Pages/ProNas';
import Checkout from './Pages/Checkout';
import { observer } from 'mobx-react-lite';
import originsItemsStore from './store/originsItemsStore';
import filterItemsStore from './store/filterItemsStore';
import popupStore from './store/popupStore';
import products from "./network/propducts";

products.get().then(data => originsItemsStore.setItem(data));

const App = () => {
  return (
    <div className="wrapper">
      {popupStore.popups.map((popup, index) => (
        <Popup
          key={index}
          message={popup}
          index={index}
        />
      ))}

      <main className='main-container'>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pro-nas' element={<ProNas />} />
          <Route path='/dostavka' element={<Dostavka />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default observer(App);
