import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { createContext } from "react";




export const cartcontext= createContext()
export function Cartcontextprovider(props){


   // // ----------------cart-----------------//

    let[cart , setcart] =useState([])




    function addcart(pro) {

      let select = cart.find(val=> val.title == pro.title)
        
      if( !select){
        Swal.fire({
          title: `you product ( <span class='text-primary'> ${pro.title?.split(' ').slice(0,3).join(' ')} </span> ) added sucessfully `,
          text: "",
          icon: "success" , 
          showConfirmButton: false ,
          timer : 1500
        });
        setcart( [ ...cart , {...pro , amount : 1}])
      }
      else{
        Swal.fire({
          title: `you product ( <span class='text-primary'> ${pro.title?.split(' ').slice(0,3).join(' ')} </span> ) is alreadyadded  `,
          text: "",
          icon: "info" , 
          showConfirmButton: false ,
          timer : 1500
        });
      }

      
    }

    function deletepro(pro ) {
    

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });

            let newarr = cart.filter(val=> val.title !== pro.title )

            setcart(newarr)   
          }
        });

      }


      function plus(pro) {
        ++pro.amount
        setcart([...cart])
      }

      function minus(pro) {
        if(pro.amount>0){
          --pro.amount
          setcart([...cart])
        }

        else{
          deletepro(pro)

        }
       
      }

       useEffect(()=>{
              if (localStorage.getItem('cart') ){
                setcart(JSON.parse(localStorage.getItem('cart')))
              }
              else{
                setcart([])
              }
            } , [])
      
            useEffect(()=>{
              localStorage.setItem('cart' , JSON.stringify(cart))

            } , [cart ])
      
// //-------------------------------------------------end cart-------------------------------------
   

    return(
        <cartcontext.Provider value={{ cart , addcart , deletepro , plus ,minus}}>
            {props.children}
        </cartcontext.Provider>
    )
}