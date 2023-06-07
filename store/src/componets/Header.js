import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa"


const Header = () => {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакти</li>
              <li>Кабінет</li>
            </ul>
            <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-botton ${cartOpen && 'active'}`} />

            <div className='shop-cart'>

            </div>
        </div>
        <div className='presentation'></div>
    </header>
  )
}

export default Header