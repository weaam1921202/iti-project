import React from 'react'
import './Header.css'
import Slider from "react-slick";

export default function Header() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 ,
        autoplay:true ,
        autoplayspeed:1500 ,
        arrows:false
      };

    return (
        <div className=' cont mb-3 mt-2 Header'>
            <div className='row'>

                <div className='col-lg-8 col-md-12 cont'>


                    <Slider {...settings} className="sliderr">

                        <div className='men'>

                            <div className='details'>
                                <b> Men Fashion </b>
                                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quaerat, tempora, omnis assumenda temporibus repudiandae repellat nam iure consectetur quas iusto cupiditate expedita esse inventore eum ea reprehenderit! Tempore, cum. </p>

                                <button className='btn btn-info'> Shop Now </button>
                            </div>
                            
                        </div>


                        <div className='women'>
                            <div className='details'>
                                    <b> women Fashion </b>
                                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quaerat, tempora, omnis assumenda temporibus repudiandae repellat nam iure consectetur quas iusto cupiditate expedita esse inventore eum ea reprehenderit! Tempore, cum. </p>

                                    <button className='btn btn-info'> Shop Now </button>
                            </div>
                        </div>

                        <div className='kids'>
                             <div className='details'>
                                <b> kids Fashion </b>
                                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quaerat, tempora, omnis assumenda temporibus repudiandae repellat nam iure consectetur quas iusto cupiditate expedita esse inventore eum ea reprehenderit! Tempore, cum. </p>

                                <button className='btn btn-info'> Shop Now </button>
                            </div>
                        </div>


                    </Slider>
                </div>


                <div className='col-lg-4 col-md-12 cont'>

                    <div className='offer'>

                        <div>
                            <p> Save 20% </p>
                            <b> Special Offer</b>
                            <button className='btn btn-info'> Click </button>
                        </div>

                        <div>
                            <p> Save 20% </p>
                            <b> Special Offer</b>
                            <button className='btn btn-info'> Click </button>
                        </div>

                    </div>
                </div>

            </div>
            
        </div>
    )
}
