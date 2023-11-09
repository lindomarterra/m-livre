import React from 'react'
import {BsSearch} from 'react-icons/bs'

function SearchBar() {
    return (
        <form>
            <input 
                type='search'
                placeholder='prod...'
                required  
            />
            <button type='button' >
                <BsSearch/>
            </button>
        </form>
    )
}

export default SearchBar;