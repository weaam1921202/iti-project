// import React, { useContext } from 'react'
import React, { useContext } from 'react'
import './Nav.css'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { apicontext } from '../../context/Apicontext';
import { cartcontext } from '../../context/Cartcontext';
import { favcontext } from '../../context/Favcontext';


    export default function Nav( ) {

  const {  darkmood , dark } = useContext(apicontext)
  const {  cart } = useContext( cartcontext )
  const {  list } = useContext( favcontext )

  


  // export default function Nav({cart , list , darkmood , dark}) {

    return (
        <nav className="navbar navbar-expand-lg px-4 sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand fs-4" href="#">Media <span>Shop</span></a>
    <button className="navbar-toggler toggler btn btn-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon toggler text-light bg-light "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/about'} className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/shop'} className="nav-link">Shop</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to={'contact'} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to={'/fake'} className="dropdown-item">Fake API</NavLink></li>
            <li><NavLink to={'/dummy'} className="dropdown-item">Dummy API</NavLink></li>

          </ul>
        </li>

        <li className="nav-item">
          <NavLink to={'/contact'} className="nav-link">Contact</NavLink>
        </li>
        <li className="nav-item ms-3 fs-2" onClick={darkmood}>
          {dark ?  <i className="fa-solid fa-sun mood"></i> : <i className="fa-solid fa-moon mood"/> }
        </li>
      </ul>
   
   <div className='d-flex gap-3 justify-content-center'>

   

    <Link to={'favlist'} className='fs-5'>
        <i className='icon fa-solid fa-heart' />
        <sub>({list.length})</sub>
    </Link>


    <Link to={'cart'} className='fs-5'>
        <i className='icon fa-solid fa-cart-shopping' />
        <sub>({cart.length})</sub>
    </Link>

     </div>
    </div>
  </div>
</nav>

    )
}


