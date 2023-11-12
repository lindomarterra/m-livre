import React, { useContext } from 'react' 
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './CartButton.css'
import AppContext from '../../context/AppContext'

function CartButton() {

    const {cartItem, isVisibleCart, setIsVisibleCart}=useContext(AppContext)

    return ( 
        <button 
        type='button'
        className='cart-btn'  
        onClick={ ()=> setIsVisibleCart(!isVisibleCart) }
        >
            <AiOutlineShoppingCart/>
            
            {cartItem.length > 0 && <span  className='cart-status'> {cartItem.length} </span> }
            
        </button>
    )
}

export default CartButton