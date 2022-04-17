import './Product.css'
import React from 'react'

const Product = (props) => {
    const { product } = props;
    const { name, image, price, details } = product;
    console.log(name)
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <img className='img-fluid' src={image} alt="product" />
            <p>{details}</p>
            <h4>{name}</h4>
            <h2>{price}</h2>
        </div>
    )
}

export default Product