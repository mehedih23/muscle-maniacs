import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (

        // Banner //
        <div className='banner'>
            <div className='container'>
                <h1 className='banner-title'>Power in every step</h1>
                <p className='banner-description'>We offer quality dietary supplements made with special care to anybody who wants to reach their body's fullest potential.</p>
                <Link className='join' to='/'>Join us</Link>
            </div>
        </div>
    )
}

export default Banner