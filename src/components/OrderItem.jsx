import React from 'react'
import { BsTrashFill } from 'react-icons/bs'

export default function OrderItem({ item, onRemove }) {
    return (
        <div className="item-order">
            <img src={"./product-images/" + item.img} />
            <div className="right-block">
                <h2>{item.title}</h2>
                <b>{item.price}₴</b>
                <BsTrashFill onClick={() => onRemove(item)} className='trash-icon' />
            </div>

        </div>
    )
}
