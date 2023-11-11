import React from 'react' 
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './CartButton.css'

function CartButton() {
    return ( 
        <button 
        className='cart-btn'>
            <AiOutlineShoppingCart/>
            <span 
            className='cart-status' >
                5
            </span>
        </button>
    )
}

export default CartButton