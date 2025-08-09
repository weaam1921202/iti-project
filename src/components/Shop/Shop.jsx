import React, { useContext } from 'react'
import '../Products/Products.css'
import loader from '../../assets/proimg/load.gif'

import apiProducts from '../Products/apiProducts.js'
import { cartcontext } from '../../context/Cartcontext.jsx'
import { favcontext } from '../../context/Favcontext.jsx'
import { UserContext } from './../../context/UserContext';


export default function Shop({ load }) {

    const { addcart } = useContext(cartcontext)

    const { fav } = useContext(favcontext)
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


    return (


        <div className='Products p-5 container'>


            <h2 className='h2 text-center my-5 fs-1 fw-bold'>  Products </h2>
            <div className='row g-2'>

                {load == true ?
                    <div className='load w-100 d-flex align-items-center justify-content-center'>
                        <img src={loader} width='100%' height='800px' />
                    </div>

                    :
                    <div className='bg-white w-100'>

                    </div>
                }

                {apiProducts.map((val, key) => {

                    return (
                        <div className=' col-lg-3 col-md-6 col-sm-12' key={key}>
                            <div className='one bg-white '>

                                <div className='w-100'>
                                    <img src={val.img} className='w-100' style={{ height: '300px' }} alt='' />
                                </div>

                                <div className='p-2 text-center mt-3 fw-bold d-flex flex-column gap-3'>
                                    <b className='title text-dark fs-3'>{val.title}</b>
                                    <p className='fs-5'>${val.price} <del className='text-muted ms-3'> ${val.sale} </del> </p>

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
                })}

            </div>


        </div>


    )
}