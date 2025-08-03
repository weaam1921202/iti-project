import React, { useContext } from 'react'
import './Home.css'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import Products from '../products/products'
import Service from '../Service/Service'
import Category from '../category/category'
import Names from '../Names/Names'


// export default function Home({ addcart , fav , load }) {

export default function Home({  fav , load }) {

    
    return (
        <div className='Home'>

            {/* <Nav /> */}
            <Header /> 
            <Category />
            <Names />
            {/* <Products addcart={addcart} fav={fav} load={load}  />    */}
            
            <Products load={load}  />   

            <Service />
                    
        </div>
    )
}
