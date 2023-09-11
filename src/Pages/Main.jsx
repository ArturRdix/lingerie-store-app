import React, { useEffect } from 'react'
import Category from '../components/Category/Category'
import ProductList from '../components/ProductList'

export default function Main({ typeCategory, colorCategory, onAdd, items }) {

  // Прокрутка страницы в начало
  const wrapper = document.querySelector('.wrapper');
  if (wrapper) {
    wrapper.scrollTo(0, 0);
  }

  // useEffect для сброса фильтров при монтировании компонента
  useEffect(() => {
    typeCategory('all'); // Сброс типа товара
    colorCategory('all'); // Сброс цвета товара
  }, []);

  return (
    <div className='wrapper'>
      <Category
        typeCategory={typeCategory}
        colorCategory={colorCategory} />
      <ProductList onAdd={onAdd} items={items} />
    </div>

  )
}
