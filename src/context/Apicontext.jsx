import React, { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";



export const apicontext= createContext()
export const Apicontextprovider=(props)=>{

    let fakeapi='https://fakestoreapi.com/products'
    
      let dummyapi='https://dummyjson.com/products'
    
      let [ load , setload ] = useState(false)
    
      let [fakepro ,setfakepro] = useState ([])
    
      async function getfake() {
        setload(true)
    
        let {data} = await axios.get(fakeapi)
        setfakepro( data)
        setload(false)
    
    
      }
    
    
    
      let [dummypro ,setdummypro] = useState ([])
    
      async function getdummy() {
        setload(true)
        let {data} = await axios.get(dummyapi)
        setdummypro( data.products)
        setload(false)
    
        
      }

      let[ dark , setdark] =useState(false)
      
            function darkmood() {
              setdark(!dark)
            }
    
       
      useEffect(()=>{
        getfake()
        getdummy()
    
      } , [])
    

    return(

        <apicontext.Provider value={{ fakepro , dummypro , getfake ,getdummy , dark , darkmood ,load }}>
            {props.children}
        </apicontext.Provider>
    )
}