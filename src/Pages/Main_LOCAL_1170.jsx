import React, { useEffect, useState } from 'react';
import Category from '../components/Category/Category';
import ProductList from '../components/ProductList';
import ReactPaginate from 'react-paginate';
import originsItemsStore from '../store/originsItemsStore';

export default function Main() {
  const [currentPage, setCurrentPage] = useState(0); // Текущая страница
  const [itemsPerPage, setItemsPerPage] = useState(12); // Количество товаров на странице

  // Прокрутка страницы в начало
  const wrapper = document.querySelector('.wrapper');
  if (wrapper) {
    wrapper.scrollTo(0, 0);
  }

  // useEffect для сброса фильтров при монтировании компонента
  useEffect(() => {
    setCurrentPage(0); // Сброс текущей страницы
  }, []);

  // Разделение списка товаров на страницы
  const offset = currentPage * itemsPerPage;
  const currentPageItems = originsItemsStore.items.slice(offset, offset + itemsPerPage);

  // Обработчик изменения страницы
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="wrapper">
      <Category/>
      <ProductList items={currentPageItems} />

     <ReactPaginate
        className='pagination'
        pageCount={Math.ceil(originsItemsStore.items.length / itemsPerPage)}
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
