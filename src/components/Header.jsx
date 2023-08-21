import React, { useState, useEffect } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import OrderItem from './OrderItem';

export default function Header({ orders, onRemove, updateQuantity }) {
    const [cartState, setCartState] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {
        let calculatedTotalPrice = 0;

        for (const element of orders) {
            const price = parseFloat(element.price);
            const quantity = element.quantity || 1;
            if (!isNaN(price)) {
                calculatedTotalPrice += price * quantity;
            }
        }

        setTotalPrice(calculatedTotalPrice);
    }, [orders]);


    useEffect(() => {
        function handleDocumentClick(event) {
            if (
                (cartState && event.target.closest('.window-cart')) ||
                event.target.closest('.cart-icon') ||
                event.target.closest('.trash-icon')
            ) {
                return;
            }
            setCartState(false);
        }
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [cartState]);

    return (
        <header>.
            <div className="top-block">
                <h1 className="logo">Monika Lingerie</h1>
                <nav>
                    <a className='item-navigation' href="#">Каталог</a>
                    <a className='item-navigation' href="#">Про нас</a>
                    <a className='item-navigation' href="#">Контакты</a>
                    <BsFillCartFill
                        onClick={() => setCartState(cartState => !cartState)}
                        className={`cart-icon ${cartState && 'active'}`} />
                </nav>
                {cartState && (
                    <div className="window-cart">
                        {orders.length > 0 ? (
                            orders.map(element => (
                                <OrderItem
                                    key={element.id}
                                    item={element}
                                    onRemove={onRemove}
                                    onUpdateQuantity={updateQuantity}
                                />
                            ))
                        ) : (
                            <h3 className='empty'>Ваша корзина пуста</h3>
                        )}
                        {orders.length > 0 && (
                            <b className='total-price-text'>Итоговая сумма к оплате: {totalPrice} грн.</b>
                        )}
                    </div>
                )}
            </div>
            <div className="banner"></div>
        </header>
    )
    
}
