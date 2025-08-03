import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <div className='Contact'>
            <div className="cont col-12 p-5 d-flex align-items-center justify-content-center flex-row g-5">
                <form className=" p-4 rounded-4 col-12 p-5 ">
                    <input type='text' placeholder='Name'></input>
                    <input type='email' placeholder='Email'></input>
                    <input type='text' placeholder='Subject'></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" className='btn'> Send Message </button>             
                </form>

                <div className='map'>
                    <div className='frame'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6868.700654904473!2d31.50628790259361!3d30.595880426721738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f147e5fe7337%3A0x27ea7767255ccbe!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNiq2LnZhNmK2YUg2KfZhNio2LHZhdis2Kk!5e0!3m2!1sar!2seg!4v1733209846715!5m2!1sar!2seg" width='350px' height='300px'/>
                    </div>


                    <div>
                        <p><i class="fa-solid fa-location-crosshairs"/> Egypt - Sharkia - Zagazig </p> 
                        <p><i class="fa-regular fa-message"></i> bravocoading123@gmail.com </p> 
                        <p><i class="fa-solid fa-phone"></i> +0123456789 </p> 

                    </div>
                </div>
            </div>
            
        </div>
    )
}

