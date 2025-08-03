import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { createContext } from "react";




export const favcontext = createContext()
export function Favcontextprovider(props){


     let[list , setlist] =useState([])
    
    

    
      function fav(pro) {
    
        let selected = list.find(val=> val.title == pro.title)
          
        if( !selected){
          Swal.fire({
            title: `you product ( <span class='text-primary'> ${pro.title?.split(' ').slice(0,3).join(' ')} </span> ) added sucessfully to favourite list `,
            text: "",
            icon: "success" , 
            showConfirmButton: false ,
            timer : 1500
          });
          setlist( [ ...list , {...pro , amount : 1}])
        }
        else{
          Swal.fire({
            title: `you product ( <span class='text-primary'> ${pro.title?.split(' ').slice(0,3).join(' ')} </span> ) is alreadyadded to favourite list `,
            text: "",
            icon: "info" , 
            showConfirmButton: false ,
            timer : 1500
          });
        }
    
        
      }
    
    
        function deletelist(pro ) {

    
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
    
                let arr = list.filter(val=> val.title !== pro.title )
    
                setlist(arr)   
              }
            });
    
             
    
          }
    
          useEffect(()=>{
    
            if (localStorage.getItem('list') ){
              setlist(JSON.parse(localStorage.getItem('list')))
            }
            else{
              setlist([])
            }
          } , [])
    
          useEffect(()=>{
    
            localStorage.setItem('list' , JSON.stringify(list))
          } , [list])
    
    
       
    
    return(
         <favcontext.Provider value={{ list , fav , deletelist }}>
                    {props.children}
          </favcontext.Provider>

    )

}
