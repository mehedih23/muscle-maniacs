import './Service.css'
import React from 'react'

const Service = (props) => {
    const { service } = props;
    const { image, name, price, about } = service;

    return (
        <div className='service-container my-3 text-center col-lg-4 col-md-6 col-12'>
            <div className='s-img'>
                <img className='img-fluid' src={image} alt="service" />
            </div>
            <div>
                <p>{about}</p>
            </div>
            <div className='text-center'>
                <h3>{name}</h3>
                <h2>{price}</h2>


            </div>
            <div className='service-btn text-center'>
                <button className=''>Add</button>
            </div>
        </div>
    )
}

export default Service