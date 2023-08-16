import React from 'react'

export default function Item({ item }) {
    return (
        <div className='item'>
            <img src={"./product-images/"+item.img} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}₴</b>
            <div className="add-cart">+</div>
        </div>
    )
}
