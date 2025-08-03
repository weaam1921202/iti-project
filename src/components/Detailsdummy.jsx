import React, { useEffect, useState, useContext } from 'react'
import './../components/Details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { cartcontext } from '../context/Cartcontext'
import { favcontext } from '../context/Favcontext' 

function Detailsdummy() {

    let {key}=useParams()
    let [pro , setpro] = useState( {} )
    const { addcart } = useContext(cartcontext)
    const { fav } = useContext(favcontext) 

    async function details(params) {
        let {data} = await axios.get( `https://dummyjson.com/products/${key}`)
        setpro(data)
    }

    useEffect(()=>{
        details()
    } , [])
    return (
        <div className='cont my-5 w-100'>
            <div className='row w-100 border '>
                <div className='col-lg-4 col-md-12 col-12 d-flex align-items-center justify-content-center m-auto  '>
                    <div className='p-5 bg-white'>
                        <img src={pro.thumbnail}  width='200px' height='250px'  />
                    </div>
                    <div className='col-lg-8 col-md-12 '>
                        <div className=' p-3'>
                            <h2 className='text-dark'> {pro.category}</h2>
                            <p className='text-success'> {pro.title}</p>
                            <p className='fs-4'> {pro.price}</p>
                            <p className=' text-muted'> {pro.description}</p>
                            <div className="d-flex gap-3">
                                <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2" onClick={()=> addcart(pro)}>
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

export default Detailsdummy