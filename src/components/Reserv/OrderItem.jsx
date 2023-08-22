import React, { useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';

export default function OrderItem({ item, onRemove, onUpdateQuantity }) {
    const [inputQuantity, setInputQuantity] = useState(item.quantity);

    const handleQuantityChange = (event) => {
        let newQuantity = parseInt(event.target.value, 10);

        if (newQuantity <= 0) {
            newQuantity = 1;
        } if (newQuantity >= 99) {
            newQuantity = 99;
        }

        setInputQuantity(newQuantity);
        onUpdateQuantity(item.id, newQuantity);
    };

    return (
        <div className="item-order">
            <img src={"./product-images/" + item.img} />
            <div className="right-block">
                <h2>{item.title}</h2>
                <b>
                    {inputQuantity > 1
                        ? `${item.price}₴ x ${inputQuantity} = ${item.price * inputQuantity}₴`
                        : `${item.price}₴`}
                </b>
                <div className="quantity-controls">
                    <button className='btn-cart'
                        onClick={() => {
                            if (inputQuantity > 1) {
                                const newQuantity = inputQuantity - 1;
                                setInputQuantity(newQuantity);
                                onUpdateQuantity(item.id, newQuantity);
                            }
                        }}>-</button>
                    <input
                        className='input-cart'
                        type="number"
                        value={inputQuantity}
                        min={1}
                        max={99}
                        onChange={handleQuantityChange}
                    />
                    <button className='btn-cart'
                        onClick={() => {
                            if (inputQuantity < 99) {
                                const newQuantity = inputQuantity + 1;
                                setInputQuantity(newQuantity);
                                onUpdateQuantity(item.id, newQuantity);
                            }
                        }}>
                        +
                    </button>
                </div>
            </div>
            
            <div className="trash-icon-block">
            <BsTrashFill onClick={() => onRemove(item)} className='trash-icon' />
            </div>
        </div>
    );
}
