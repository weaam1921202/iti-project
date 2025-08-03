import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Apicontextprovider } from './context/Apicontext.jsx'
import { Cartcontextprovider } from './context/Cartcontext.jsx'
import { Favcontextprovider } from './context/Favcontext.jsx'
createRoot(document.getElementById('root')).render(

    <Cartcontextprovider>
        <Favcontextprovider>
     <Apicontextprovider>

        <App />


    </Apicontextprovider>
        </Favcontextprovider>
    </Cartcontextprovider>
    
    

   
    
)
