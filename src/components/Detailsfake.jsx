import React, { useContext, useEffect, useState } from 'react'
import './../components/Details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { cartcontext } from '../context/Cartcontext'
import { favcontext } from '../context/Favcontext' 
import './Details.css'

function Detailsfake() {

     const { addcart } = useContext(cartcontext)
     const { fav } = useContext(favcontext) 

    let { id } = useParams()
    let [pro, setpro] = useState({})
    async function Details(params) {
        let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setpro(data)
    }

    useEffect(() => {
        Details()
    }, [])
    return (
        <div className='cont my-5 w-100'>
            <div className='row w-100'>
                <div className='col-lg-4 col-md-12 col-12 d-flex align-items-center justify-content-center m-auto'>
                    <div className='p-5 bg-white'>
                        <img src={pro.image} width='200px' height='250px' />
                    </div>
                    <div className='col-lg-8 col-md-12 '>
                        <div className=' p-3'>
                            <h2 className='text-info bg-light'> {pro.category}</h2>
                            <p className='text-success'> {pro.title}</p>
                            <p className='fs-4 text-dark'> {pro.price}</p>
                            <p className=' text-muted text-dark'> {pro.description}</p>
                            <div className="d-flex gap-3">
                                <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2" onClick={() => addcart(pro)}>
                                    <i className="fa-solid fa-cart-plus"></i>
                                    <span>Add To Cart</span>
                                </button>
                                <button className="btn btn-light d-flex align-items-center justify-content-center" onClick={() => fav(pro)}>
                                    <i className="fa-solid fa-heart text-danger fs-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailsfake