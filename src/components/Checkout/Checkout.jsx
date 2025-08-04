import React, { useContext } from "react";
import Swal from "sweetalert2";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
import { cartcontext } from "../../context/Cartcontext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart } = useContext(cartcontext);

  // ✅ Calculate subtotal dynamically
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
      navigate("/"); // Redirect after alert
    });
  };

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
