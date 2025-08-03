import React from 'react'
import './Category.css'
import Heading from '../../Heading'
export default function Category() {
    return (
        <div className='Category '>

            
        <Heading title ={'Services' } />

            {/* <h2 className='h2 text-center my-5 fs-1 fw-bold text-dark'> Services </h2> */}

            <div className='row g-4 d-flex align-items-center justify-content-center p-4'>

                <div className='card col-lg-3 col-md-6 col-sm-12 bg-white '>
                    
                    <div className='details d-flex align-items-center justify-content-center flex-row p-4 g-5 text-black text-center'>

                        <i className=" icons fa-solid fa-check text-gold fs-4"></i>
                        <p className=' fs-5 fw-5'>Quality Product</p>
                    </div>

                </div>

                <div className='card col-lg-3 col-md-6 col-sm-12 bg-white '>
                    <div className='details d-flex align-items-center justify-content-center flex-row p-4 g-5 text-black text-center'>

                        <i className=" icons fa-solid fa-truck text-gold fs-4 "></i>
                        <p className=' fs-5 fw-5'>Free Shipping</p>

                    </div>
                </div>

                <div className='card col-lg-3 col-md-6 col-sm-12 bg-white '>
                    <div className='details d-flex align-items-center justify-content-center flex-row p-4 g-5 text-black text-center'>
                        <i className=" icons fa-solid fa-check text-gold fs-4 "></i>
                        <p className=' fs-5 fw-5'>14-Day Return</p>
                    </div>
                </div>

                <div className='card col-lg-3 col-md-6 col-sm-12 bg-white '>
                    <div className='details d-flex align-items-center justify-content-center flex-row p-4 g-5 text-black text-center'>

                        <i className="icons fa-solid fa-truck text-gold fs-4"></i>
                        <p className='fs-5 fw-5'>24/7 Support</p>

                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
