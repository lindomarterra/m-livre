import React, { useContext }  from 'react' 
import {BsCartXFill} from 'react-icons/bs'
import './CartItems.css'
import formatCurrency from '../../utils/formatCurrency'
import AppContext from '../../context/AppContext'

function CartItems({data}) {

    const {cartItem, setCartItem}=useContext(AppContext)
    const { id, thumbnail, title, price } = data
    const removeItem=()=>{
        const updateItems= cartItem.filter((item)=> item.id !== id )
        setCartItem(updateItems)
    }

    return (  
        <section  >
              <div className='cart-item' >

                  <img src={thumbnail}
                  alt="product"
                  className='cart-item-image'
                  />

                  <div className='cart-item-infos'>
                       <p className='cart-item-title'> {title} </p>
                       <p className='cart-item-price'> { formatCurrency(price, 'BRL') }  </p>
                  </div>

                  <button className='cart-item-btn-remove' onClick={removeItem} >
                            <BsCartXFill/>
                  </button>

              </div>

        </section>
    )
}

export default CartItems


