import React, { useState, useEffect } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import OrderItem from './OrderItem';

export default function Header({ orders, onRemove }) {
    const [cartState, setCartState] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {
        let calculatedTotalPrice = 0;

        for (const element of orders) {
            const price = parseFloat(element.price);
            if (!isNaN(price)) {
                calculatedTotalPrice += price;
            }
        }

        setTotalPrice(calculatedTotalPrice);
    }, [orders]);

    return (
        <header>.
            <div className="top-block">
                <h1 className="logo">Monika Lingerie</h1>
                <nav>
                    <a href="#">Каталог</a>
                    <a href="#">Про нас</a>
                    <a href="#">Контакты</a>
                    <BsFillCartFill
                        onClick={() => setCartState(cartState => !cartState)}
                        className={`cart-icon ${cartState && 'active'}`} />
                </nav>

                {(cartState && (orders.length > 0)) && (
                    <div className="window-cart">
                        {orders.map(element => (
                            <OrderItem
                                onRemove={onRemove}
                                key={element.id}
                                item={element} />
                        ))}
                        <b className='total-price-text'>Итоговая сумма к оплате: {totalPrice} грн.</b>
                    </div>
                )}
            </div>
            <div className="banner"></div>
        </header>
    )
}
