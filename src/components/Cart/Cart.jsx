import React, { useContext, useState } from "react";
import "./Cart.css";
import axios from "axios";
import { cartcontext } from "../../context/Cartcontext";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, addcart, deletepro, plus, minus } = useContext(cartcontext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleBuyNow = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  // export default function Cart({cart , deletepro , plus , minus}) {

  let total = 0;

  return (
    <div className="Cart container my-5">
      <div className="row gy-3 d-flex justify-content-center">
        {cart.length > 0 ? (
          <>
            {cart.map((value, index) => {
              total += value.price * value.amount;
              return (
                <div className="col-12" key={index}>
                  <div className="pro py-3 d-flex align-items-center justify-content-around rounded bg-white ">
                    {/* <img src={value.img ? value.img : value.image ? value.image : value.thumbnail } style={{width : '80px'}} alt=''/> */}

                    <img
                      src={value.img || value.image || value.thumbnail}
                      style={{ width: "80px" }}
                      alt=""
                    />

                    <b className="fs-5 text-dark">
                      {" "}
                      {value.title?.split(" ").slice(0, 2).join(" ")}
                    </b>
                    <div>
                      <p className=" text-dark"> price : $ {value.price} </p>
                      <p className="text-success fw-bold">
                        {" "}
                        total price : ${" "}
                        {(value.price * value.amount).toFixed(2)}
                      </p>{" "}
                      {/* علامه عشريه واحدة*/}
                    </div>

                   <div className='d-flex align-items-center gap-2'>
                        <button className='btn btn-dark btn-sm' onClick={()=> plus(value)}> + </button>
                        <span className=' mx-2 fs-5 text-dark'> {value.amount}</span>
                        <button className='btn btn-dark btn-sm' onClick={()=> minus(value)}> - </button>
                        </div>

                        <button className='btn btn-danger w-auto' onClick={()=>deletepro(value , index)}> remove products </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className=" text-danger text-center fs-1 fw-bold my-5">
            <p> there is no products </p>
          </div>
        )}

        <div className="col-8">
          <div className="total py-4 d-flex align-items-center justify-content-around rounded bg-white">
            <b className="fs-4 text-dark"> Total</b>
            <b className=" fs-4 text-dark"> $ {total.toFixed(2)}</b>
          </div>

          {/* Buy Now Button */}
          <div className="text-center mt-4">
            <button
              onClick={handleBuyNow}
              className="btn px-4 py-2"
              style={{
                backgroundColor: "#cece2b",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
