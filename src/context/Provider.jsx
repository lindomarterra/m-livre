import React, { useState } from 'react' 
import AppContext from './AppContext'

function Provider({children}) {

  const [products, setProducts]=useState([])
  const [loading, setLoading]=useState(true)
  const [cartItem, setCartItem]=useState([])
  const [isVisibleCart, setIsVisibleCart]=useState(false)

  const value={
    products,
    setProducts,
    loading,
    setLoading,
    cartItem,
    setCartItem,
    isVisibleCart,
    setIsVisibleCart
  }
    
    return ( 
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}
export default Provider