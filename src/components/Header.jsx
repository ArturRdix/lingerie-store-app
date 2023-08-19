import React, { useState } from 'react'
import { BsFillCartFill } from 'react-icons/bs'

export default function Header() {
    const [cartState, setCartState] = useState(false);

    return (
        <header>
            <div className="top-block">
                <h1 className="logo">Monika Lingerie</h1>
                <nav>
                    <a href="#">Каталог</a>
                    <a href="#">Про нас</a>
                    <a href="#">Контакты</a>
                <BsFillCartFill onClick={() => setCartState(cartState => !cartState)} className={`cart-icon ${cartState && 'active'}`} />
                </nav>

                {cartState && (
                    <div className="window-cart">

                    </div>
                )}
            </div>
            <div className="banner"></div>
        </header>
    )
}
