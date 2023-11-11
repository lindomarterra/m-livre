import React, { useContext, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import './SearchBar.css'
import AppContext from '../../context/AppContext'
import fetchProducts from '../../api/fetchProducts'

function SearchBar() {

    const {setProducts, setLoading}=useContext(AppContext)
    const [searchValue, setSearchValue] = useState('')

    const handleSearch= async (event)=>{

        event.preventDefault()
        setLoading(true)

        const getProducts= await fetchProducts(searchValue)

        setProducts(getProducts)    
        setLoading(false)
        setSearchValue('')
    }

    return (

        <form className='search-form' onSubmit={handleSearch}  >
            <input 
                className='search-input'
                type='search'
                placeholder='choose any product!'
                required  
                value={searchValue}
                onChange={({target})=> setSearchValue(target.value) }
            />
            <button 
            className='search-btn' type='button' >
                <BsSearch/>
            </button>

        </form>
    )
}

export default SearchBar;