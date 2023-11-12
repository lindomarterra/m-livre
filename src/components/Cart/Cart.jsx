import React, { useContext } from 'react' 
import './Cart.css'
import CartItems from '../CartItems/CartItems'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'

function Cart() {

    const {cartItem, isVisibleCart}=useContext(AppContext)
    const totalPrice=cartItem.reduce( (acc, item)=> item.price + acc, 0 )

    return (

        <section  className={ `cart ${isVisibleCart ? 'cart-active' : ''  } ` } >

                <div className='info-products'>
                    {cartItem.map((eachItem)=> <CartItems key={eachItem.id} data={eachItem} /> )}
                </div>

                <div className='cart-resume' >
                    {formatCurrency(totalPrice, 'BRL')}
                </div>

        </section>
    )
}

export default Cart