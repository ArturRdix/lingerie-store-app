import React from 'react'

export default function Item({ item }) {
    return (
        <div className='item'>
            <img src={"./product-images/" + item.img} />
            <h2>{item.title}</h2>
            <div className="bottom-block">
                <b>{item.price}₴</b>
                <div className="add-cart">+</div>
            </div>
        </div>
    )
}
