import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
import { cartcontext } from "../../context/Cartcontext";

import visa_logo from "../../assets/payment/Visapng.png";
import mastercard_logo from "../../assets/payment/Mastercard.png";
import paypal_logo from "../../assets/payment/paypal.png";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart } = useContext(cartcontext);

  const [paymentMethod, setPaymentMethod] = useState("");

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );
  const shipping = 5;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Purchase Successful!",
      text: "Thank you for your order.",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      navigate("/");
    });
  };

  console.log(cart);

  return (
    <div className="checkout container py-5">
      <h2 className="text-dark text-center mb-5 fw-bold">Checkout</h2>

      <div className="row">
        {/* Billing Form */}
        <div className="col-md-7">
          <div className="card shadow-sm p-4 mb-4">
            <h4 className="mb-3 fw-semibold">Billing Information</h4>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">ZIP Code</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mt-4">
                <label className="form-label fw-semibold">
                  Choose Payment Method
                </label>
                <div className="d-flex gap-3 flex-wrap">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="visa"
                      value="visa"
                      checked={paymentMethod === "visa"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      required
                    />
                    <label className="form-check-label" htmlFor="visa">
                      <img
                        src={visa_logo}
                        alt="Visa"
                        width="60"
                        height="40"
                        style={{ objectFit: "contain" }}
                      />
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="mastercard"
                      value="mastercard"
                      checked={paymentMethod === "mastercard"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="mastercard">
                      <img
                        src={mastercard_logo}
                        alt="MasterCard"
                        width="60"
                        height="40"
                        style={{ objectFit: "contain" }}
                      />
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="paypal"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      <img
                        src={paypal_logo}
                        alt="PayPal"
                        width="60"
                        height="40"
                        style={{ objectFit: "contain" }}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Conditionally Render Payment Form */}
              {paymentMethod === "visa" || paymentMethod === "mastercard" ? (
                <div className="mt-4">
                  <label className="form-label">Card Number</label>
                  <input type="text" className="form-control" required />
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="form-label">Expiry Date</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">CVV</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                </div>
              ) : paymentMethod === "paypal" ? (
                <div className="mt-4">
                  <label className="form-label">PayPal Email</label>
                  <input type="email" className="form-control" required />
                </div>
              ) : null}

              <button
                type="submit"
                className="btn btn-lg w-100 mt-4 text-dark"
                style={{ backgroundColor: "#cece2b", fontWeight: "bold" }}
              >
                Confirm Purchase
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="summary col-md-5">
          <div className="card shadow-sm p-4">
            <h4 className="mb-3 fw-semibold">Your Items</h4>
            {cart.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              <ul className="list-group mb-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex align-items-center gap-3"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      width="60"
                      height="60"
                      style={{ objectFit: "contain" }}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold">{item.title}</div>
                      <small>Quantity: {item.amount}</small>
                    </div>
                    <strong>${(item.price * item.amount).toFixed(2)}</strong>
                  </li>
                ))}
              </ul>
            )}

            <h4 className="mb-3 fw-semibold">Order Summary</h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Shipping</span>
                <strong>${shipping.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </li>
            </ul>
            <p className="text-muted small">
              * Prices include taxes where applicable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
