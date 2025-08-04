import React from 'react';
import './Category.css';
import Heading from '../../Heading';

export default function Category() {
  return (
    <div className="Category py-5 text-center">
      <Heading title="Services" />

      <div className="row g-4 justify-content-center p-4">
        <div className="card col-lg-3 col-md-6 col-sm-12 border-0 shadow-sm">
          <div className="details d-flex flex-column align-items-center justify-content-center p-4">
            <i className="icons fa-solid fa-check  fs-2 mb-2"></i>
            <p className="fs-5 fw-semibold m-0">Quality Product</p>
          </div>
        </div>

        <div className="card col-lg-3 col-md-6 col-sm-12 border-0 shadow-sm">
          <div className="details d-flex flex-column align-items-center justify-content-center p-4">
            <i className="icons fa-solid fa-truck  fs-2 mb-2"></i>
            <p className="fs-5 fw-semibold m-0">Free Shipping</p>
          </div>
        </div>

        <div className="card col-lg-3 col-md-6 col-sm-12 border-0 shadow-sm">
          <div className="details d-flex flex-column align-items-center justify-content-center p-4">
            <i className="icons fa-solid fa-rotate-left  fs-2 mb-2"></i>
            <p className="fs-5 fw-semibold m-0">14-Day Return</p>
          </div>
        </div>

        <div className="card col-lg-3 col-md-6 col-sm-12 border-0 shadow-sm">
          <div className="details d-flex flex-column align-items-center justify-content-center p-4">
            <i className="icons fa-solid fa-headset  fs-2 mb-2"></i>
            <p className="fs-5 fw-semibold m-0">24/7 Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
