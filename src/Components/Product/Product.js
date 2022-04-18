import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const navigate = useNavigate();
    const { product } = props;
    const { name, image, price, details } = product;
    return (
        <div className='product-div my-3 col-lg-4 col-md-6 col-12'>
            {/* product image */}
            <div>
                <img className='img-fluid' src={image} alt="product" />
            </div>
            {/* product details */}
            <div>
                <p>{details.length > 215 ? details.slice(0, 215) : details}.....</p>
                <h4>{name}</h4>
                <h2>{price}</h2>
            </div>
            <button onClick={() => navigate('/checkout')} className='product-btn'>Add <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    )
}

export default Product