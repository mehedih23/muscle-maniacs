import './WhyUs.css'
import React, { useEffect, useState } from 'react'

const WhyUs = () => {
    const [us, setUs] = useState([])
    useEffect(() => {
        fetch('whyus.json')
            .then(response => response.json())
            .then(data => setUs(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center text-decoration-underline mt-5'><span style={{ color: '#E8BD0D' }}>Why</span> Choose Us</h1>
            <div>
                {
                    us.map(item => <div className='my-3 d-md-flex flex-lg-row flex-md-row justify-content-lg-around align-items-md-center align-items-lg-center' key={item.id}>
                        <div className='w-100 w-md-50 text-center'>
                            <img className='img-fluid' src={item.image} alt="whyus" />
                        </div>
                        <div className='w-100 w-md-50'>
                            <h3>{item.name}</h3>
                            <p>{item.about}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default WhyUs