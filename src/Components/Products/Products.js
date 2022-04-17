import './Products.css'
import React from 'react'
import useProducts from '../../Hooks/useProducts'
import Product from '../Product/Product'

const Products = () => {
    const [products] = useProducts()
    return (
        <div className='container'>
            <h1>Products</h1>
            <p>Your body actually needs more than 40 different nutrients for good health, and there is not one single source for them.  Your daily food selection should include a balance of good carbs, protein, fruits, veggies, and dairy products. Check out those food.</p>
            <div className='row'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    )
}

export default Products