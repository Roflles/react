import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa"
import Order from './Order'

const showOrders = (props) => {
  return(
    <div>
      {props.orders.map(el => (
          <Order key={el.id} item={el}/>
      ))}
    </div>
  )
}

const showNothing = () => {
  return(
    <div className='empty'>
      <h2>Нема товарів</h2>
    </div>
  )
}

const Header = (props) => {
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
            <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
            </div>
            )}
            
        </div>
        <div className='presentation'></div>
    </header>
  )
}

export default Header