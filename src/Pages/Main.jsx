import React from 'react'
import Category from '../components/Category/Category'
import ProductList from '../components/ProductList'

export default function Main({ colorCategory, onAdd, items }) {
  const wrapper = document.querySelector('.wrapper');
  if (wrapper) {
    wrapper.scrollTo(0, 0);
  }
  return (
    <div className='wrapper'>
      <Category colorCategory={colorCategory} />
      <ProductList onAdd={onAdd} items={items} />
    </div>

  )
}
