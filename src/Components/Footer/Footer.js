import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#03203C', color: 'white' }}>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <h2>Muscle <span style={{ color: '#E8BD0D' }}>Maniacs</span></h2>
                    </div>

                    {/* help section */}
                    <div className='col-lg-3 col-md-6 col-12'>
                        <p><strong>Need help?</strong></p>
                        <p>Email Support</p>
                        <p>Live Chat</p>
                        <p>Send Us Feedback</p>
                    </div>

                    {/* digital resources  */}
                    <div className='col-lg-3 col-md-6 col-12'>
                        <p><strong>Digital Resources?</strong></p>
                        <p>Article</p>
                        <p>Ebooks</p>
                        <p>Forum</p>
                    </div>

                    {/* contact section */}
                    <div className='col-lg-3 col-md-6 col-12'>
                        <p><strong>Contact Us?</strong></p>
                        <div className='d-flex justify-content-between'>
                            <img src="https://i.ibb.co/XYKZgKh/bxl-facebook.png" alt="icon" />
                            <img src="https://i.ibb.co/bgVqpWz/bxl-instagram.png" alt="icon" />
                            <img src="https://i.ibb.co/LrQB0YQ/bxl-twitter.png" alt="icon" />
                            <img src="https://i.ibb.co/gR7d5gc/bxl-whatsapp.png" alt="icon" />
                            <img src="https://i.ibb.co/WDbQ3hS/bxl-youtube.png" alt="icon" />
                        </div>
                    </div>
                </div>

                {/* author */}
                <p className='text-center mb-0 pb-3'>&copy; {new Date().getFullYear()} Mehedi Hassan Barat. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer