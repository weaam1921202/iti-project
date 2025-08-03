import React from 'react'
import './Footer.css'
import img1 from '../../assets/proimg/visa.png'
export default function Footer() {
    return (
        <div className='Footer'>
            
           <div className='cont col-12'>
                <div className="card get">
                    <b>Get In Touch</b>
                    <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>

                </div>

                <div className=" card quick">

                    <b>QUICK SHOP</b>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>

                </div>

                <div className="card media">

                <b>Shop Media</b>
                    <ul>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-linkedin"></i></li>
                        <li><i className="fa-brands fa-github"></i></li>
                    </ul>

                </div>

                <div className=" card news">

                    <b>NEWSLETTER</b>
                    <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                    <div className='col-8'>

                    <input type='text' placeholder='your email address'></input>
                    <button className='btn btn-light'> button </button>

                    </div>
                </div>


           </div>

           <div className='down col-12'>
                <p className='text-light'>@ copywrite By Media Team , All Right Reserved</p>
                <img src={img1} alt=''/>

            </div>
            
        </div>
    )
}
