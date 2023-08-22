import React from 'react'

export default function ProductItem({ item, onAdd }) {
    return (
        <div className='item'>
            <div className="image-block">
                <img src={"./product-images/" + item.img} /></div>
            <h2>{item.title}</h2>
            <div className="bottom-block">
                <b>{item.price}₴</b>
                <div className="add-cart"
                    onClick={() => onAdd(item)}
                >+</div>
            </div>
        </div>
    )
}
