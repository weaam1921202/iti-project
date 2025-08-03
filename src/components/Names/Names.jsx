import React from 'react'
import './Names.css'
import  apipro from './apinames'
import Heading from '../../Heading'

export default function Names() {

       return(
        <div className='Names p-5 container w-100 '>

        <Heading title ={'Category' } />
        {/* <h2 className='h2 text-center my-5 fs-1 fw-bold text-dark'>  Category </h2> */}
    <div className='row g-2'>
        
            
        {apipro.map((val, index)=>{
    
            return (
                <div className='pro col-lg-3 col-md-6 col-sm-12  ' key={index} >
                   <div className="one  p-3 d-flex align-align-items-center gap-2 bg-white">
                    
                   
                        {/* <div className='d-flex align-items-center ' style={{width:'100px' , height:'100px'}}>
                            <img src={val.img} className='w-100' style={{height:'100px'}} alt='' />
                        </div> */}
                        
                         <img src={val.img} className='w-25' alt='' />

    
                        <div className='d-flex flex-column justify-content-center align-items-center '>
                            <b className='fs-3 text-dark'>Category Name </b>
                            <p className='fs-5 text-dark'> 100 Products </p>
    
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