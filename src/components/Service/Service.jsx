import React from 'react'
import './Service.css'
import Slider from "react-slick";

import img1 from '../../assets/proimg/download1.jpg'
import img2 from '../../assets/proimg/download2.jpeg'

import img3 from '../../assets/proimg/download3.jpeg'

import img4 from '../../assets/proimg/download4.jpg'

import img5 from '../../assets/proimg/download5.jpg'


export default function Service() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1 ,
        autoplay:true ,
        autoplayspeed:1000 ,
        arrows:false
      };

    return (
        <div className=' cont mb-3 mt-2 Service p-5 '>
            <div className='row justify-content-between p-5 px-5 '>

                <div className=' cont w-100 h-100 '>

                <Slider {...settings} className="sliderr">
                    
                    <div> <img src={img1} alt='' width='200px' height='200px' /> </div>
                    <div> <img src={img2} alt='' width='200px' height='200px' /> </div>
                    <div> <img src={img3} alt='' width='200px' height='200px'/> </div>
                    <div> <img src={img4} alt='' width='200px' height='200px'/> </div>
                    <div> <img src={img5} alt='' width='200px' height='200px'/> </div>


                </Slider>

                </div>
            </div>
         </div>
    )
}
