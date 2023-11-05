import React, { useEffect, useState } from 'react';
import Category from '../components/Category/Category';
import ProductList from '../components/ProductList';
import ReactPaginate from 'react-paginate';

export default function Main({ priceFilter, typeCategory, colorCategory, onAdd, items }) {
  const [currentPage, setCurrentPage] = useState(0); // Текущая страница
  const [itemsPerPage, setItemsPerPage] = useState(12); // Количество товаров на странице

  // Прокрутка страницы в начало
  const wrapper = document.querySelector('.wrapper');
  if (wrapper) {
    wrapper.scrollTo(0, 0);
  }

  // useEffect для сброса фильтров при монтировании компонента
  useEffect(() => {
    typeCategory('all'); // Сброс типа товара
    colorCategory('all'); // Сброс цвета товара
   setCurrentPage(0); // Сброс текущей страницы
  }, []);

  // Разделение списка товаров на страницы
  const offset = currentPage * itemsPerPage;
  const currentPageItems = items.slice(offset, offset + itemsPerPage);

  // Обработчик изменения страницы
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="wrapper">
      <Category priceFilter={priceFilter} typeCategory={typeCategory} colorCategory={colorCategory} />
      <ProductList onAdd={onAdd} items={currentPageItems} />

    <ReactPaginate
        className='pagination'
        pageCount={Math.ceil(items.length / itemsPerPage)}
        pageRangeDisplayed={2} // Устанавливаем значение 2 для отображения только текущей и соседних страниц
        marginPagesDisplayed={2} // Устанавливаем значение 2 для отображения только двух страницы слева и справа от текущей
        onPageChange={handlePageChange}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
        breakLabel="..."
        previousLabel="< Перед."
        nextLabel="След. >"
      />

    </div>
  );
}
