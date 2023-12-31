import React, { useContext } from 'react' 
import './ProductCard.css'
import {BsCartPlusFill} from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'
import AppContext from '../../context/AppContext'


function ProductCard({data}) {

    const {thumbnail, title, price}=data
    
    const {cartItem, setCartItem}=useContext(AppContext)

    const handleAddProd=()=> setCartItem([...cartItem, data])

    return (
        <section className='prod-item' >
        
               <img 
               src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
               alt="product" 
               className='prod-item-img'
                /> 

               <div className='prod-item-infos' >
                    <h3 className='prod-item-title' > {title} </h3>
                    <h3 className='prod-item-price' > {formatCurrency(price, 'BRL') } </h3>
               </div>

               <button type='button' className='prod-item-add-btn' onClick={handleAddProd} >
                    <BsCartPlusFill/>
               </button>
        
        </section>
    )
}
export default ProductCard

