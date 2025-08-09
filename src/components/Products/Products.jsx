import React, { useContext } from 'react'
import loader from '../../assets/proimg/load.gif'

import './Products.css'
import apiProducts from './apiProducts'
import { cartcontext } from '../../context/Cartcontext'
import { favcontext } from '../../context/Favcontext'
import { UserContext } from '../../context/UserContext'
import Heading from '../../Heading'

     export default function Products({  load }) {

        const {addcart} =useContext (cartcontext)
        const {fav} =useContext (favcontext)
        const { user } = useContext(UserContext)


    const handleAddToCart = (val) => {
        const token = localStorage.getItem('userToken');
        if (user) {
            addcart(val);
        } else {
            alert('You must log in to add products to your cart');
            window.location.href = '/login';
        }
    }

    const handleAddToFav = (val) => {
        const token = localStorage.getItem('userToken');
        if (user) {
            fav(val);
        } else {
            alert('You must log in to add products to your favorites');
            window.location.href = '/login';
        }
    }


    return(


    <div className='Products p-5 container w-100 '>


        <Heading title ={'Products' } />


        <div className='row g-2'>
            
        {load==true ? 
                    <div className='load w-100 d-flex align-items-center justify-content-center'>
                        <img src={loader} width='100%' height='800px%'/>
                    </div>

                    :
                    <div className='bg-white w-100'>
                        
                    </div>
                }
                
            {apiProducts.map((val , key )=>{
        
                return (
                    <div className='pro col-lg-3 col-md-6 col-sm-12 p-2 g-3  ' key={key}>
                       <div className='one bg-white '>
        
                            <div className='w-100'>
                                <img src={val.img} className='w-100' style={{height:'300px'}} alt='' />
                            </div>
        
                            <div className='p-2 text-center mt-3 fw-bold d-flex flex-column gap-3'>
                                <b className='fs-2 text-dark'>{val.title}</b>
                                <p className='fs-5 text-dark'>${val.price} <del className='text-muted ms-3'> ${val.sale} </del> </p>
        
                                <div>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
        
                                </div>
                                <div className='procss d-flex align-items-center justify-content-between'>

                                   <i onClick={() => handleAddToFav(val)} className='fa-solid fa-heart'></i>
                                    <i onClick={() => handleAddToCart(val)} className='fa-solid fa-cart-shopping'></i>

                                </div>
        
                            </div>
        
                       </div>
                        
                    </div>
                )
            })
            }

        </div>            
    </div>
      
    
    )
}