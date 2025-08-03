// import React, { useContext } from 'react'
import React, { useContext } from 'react'

import '../Favlist/Favlist.css'
import img3 from '../../assets/proimg/product-8.jpg'
import { FaSquareXmark } from "react-icons/fa6";
import { cartcontext } from '../../context/Cartcontext';
import { favcontext } from '../../context/Favcontext';



    export default function Favlist() {

        const {addcart} =useContext (cartcontext)
       const {list , deletelist } = useContext(favcontext)



    // export default function Favlist({list , deletelist , addcart }) {

    let total=0
    
        return (
        <div className='list container my-5'>
            <div className="row gy-3 d-flex justify-content-center">
                {list.length > 0 ?
                    <>
                        {list.map((value, index) => {
                            total += (value.price * (value.amount || 1))
                            return (
                                <div className="col-12" key={index}>
                                    <div className="pro py-3 d-flex align-items-center justify-content-around rounded bg-white">
                                        <img src={value.img || value.image || value.thumbnail} style={{ width: '80px' }} alt='' />
                                        <b className='fs-5 text-dark'>{value.title?.split(' ').slice(0, 2).join(' ')}</b>
                                        <div>
                                            <p className='text-dark'>price : $ {value.price}</p>
                                            <p className='text-success fw-bold'>total price : $ {(value.price * (value.amount || 1)).toFixed(2)}</p>
                                        </div>
                                        <button className='btn btn-primary' onClick={() => addcart(value)}>
                                            <i className='fa-solid fa-cart-shopping'></i> Add to Cart
                                        </button>
                                        <button className='btn btn-danger' onClick={() => deletelist(value, index)}>
                                            <i className="fa-solid fa-xmark"></i> Remove
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                    :
                    <div className='text-danger text-center fs-1 fw-bold my-5'>
                        <p> there is no products </p>
                    </div>
                }
            </div>
        </div>
    )
}