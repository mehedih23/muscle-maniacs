import './Service.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Service = (props) => {
    const navigate = useNavigate()
    const { service } = props;
    const { image, name, price, about } = service;

    return (
        <div className='service-container my-3 col-lg-4 col-md-6 col-12'>
            <div>
                <img className='img-fluid' src={image} alt="service" />
            </div>
            <div>
                <p>{about}</p>
            </div>
            <div>
                <h3>{name}</h3>
                <h2>{price}</h2>
            </div>
            <div className='service-btn text-center'>
                <button onClick={() => navigate('/checkout')} className=''>
                    Add <FontAwesomeIcon className='ms-1' icon={faCartShopping} />
                </button>
            </div>
        </div>
    )
}

export default Service