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
            <h1 className='text-center mt-5'><span style={{ color: '#E8BD0D' }}>Why</span> Choose Us</h1>
            <div className='row'>
                {
                    us.map(item => <div className=' col-lg-4 col-md-6 col-12' key={item.id}>
                        <div className='text-center'>
                            <img className='img-fluid' src={item.image} alt="whyus" />
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.about}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default WhyUs