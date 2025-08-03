import React, { useContext, useEffect, useState } from 'react'
import loader from '../../assets/proimg/load.gif'
import { Link } from 'react-router-dom'
import { apicontext } from '../../context/Apicontext'
import { cartcontext } from '../../context/Cartcontext'
import { favcontext } from '../../context/Favcontext'

export default function Dummy({ load }) {
    const { dummypro } = useContext(apicontext)
    const { addcart } = useContext(cartcontext)
    const { fav } = useContext(favcontext)

    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [showAllBtn, setShowAllBtn] = useState(false)

    useEffect(() => {
        setAllProducts(dummypro)
        setProducts(dummypro)
        setCategories([...new Set(dummypro.map(item => item.category))])
    }, [dummypro])

    const filterByCategory = (cat) => {
        setProducts(allProducts.filter(item => item.category === cat))
        setShowAllBtn(true)
    }

    const showAll = () => {
        setProducts(allProducts)
        setShowAllBtn(false)
    }

    return (
        <div className='Api container my-5'>
            <strong className='h2 d-block text-center my-5 fs-1 fw-bold'>  Products </strong>
            <p className='text-muted lg-bg w-75 text-center mx-auto fs-5 fw-bold my-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!
            </p>

            
            <div className="mb-3 d-flex gap-2 flex-wrap justify-content-center">
                {categories.map(cat => (
                    <button key={cat} className="btn btn-success active" onClick={() => filterByCategory(cat)}>
                        {cat}
                    </button>
                ))}
                {showAllBtn &&
                    <button className="btn btn-secondary" onClick={showAll}>
                        All Products
                    </button>
                }
            </div>

            <div className="row g-2">
                {load === true ?
                    <div className='load w-100 d-flex align-items-center justify-content-center'>
                        <img src={loader} width='100%' height='800px%' alt="loading" />
                    </div>
                    :
                    products.map((val) => (
                        <div className='col-lg-3 col-md-6 col-sm-12' key={val.id}>
                            <div className="card p-3 bg-white">
                                <Link to={`/pro/${val.id}`} className="img d-flex align-items-center justify-content-between">
                                    <img src={val.thumbnail} style={{ height: '200px' }} className='img' alt='' />
                                </Link>
                                <p className='fs-5 fw-bold text-center my-2'>{val.title.split(' ').slice(0, 3).join(' ')}</p>
                                <p className='fs-5 fw-bold text-center my-2'>{val.price}</p>
                                <div className='procss d-flex align-items-center justify-content-between'>
                                    <i onClick={() => fav(val)} className='fa-solid fa-heart'></i>
                                    <i onClick={() => addcart(val)} className='fa-solid fa-cart-shopping'></i>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}