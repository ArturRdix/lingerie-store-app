import React from 'react'
import Category from '../components/Category/Category'
import ProductList from '../components/ProductList'

export default function Main({colorCategory,onAdd,items }) {
  return (
    <>
        <Category colorCategory={colorCategory}/>
        <ProductList  onAdd={onAdd} items={items}/>
    </>
  )
}
