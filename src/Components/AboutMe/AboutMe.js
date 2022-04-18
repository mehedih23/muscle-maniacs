import React from 'react'
import './AboutMe.css'
import Logo from '../../images/mf-avatar.svg'

const AboutMe = () => {
    return (
        <div className='container h-100'>
            <div className='d-md-flex justify- content-center align-items-center my-5'>

                {/* text */}

                <div className='row'>
                    <div className='col-md-8 col-12'>
                        <h1>Hi, I'm Mehedi.<br /> Nice to meet you.</h1>
                        <p>I want to be a Web Developer. Now I am learning React, as a frontend library. Following my dream, By working hard, I reached that position today. In the 4 months of hard work, I learned <strong>HTML-5, CSS-3, BOOTSTRAP-5, JAVASCRIPT, ES6, REACT, REACT, REACT-ROUTER-DOM, FIREBASE AUTHENTICATION</strong> and so many things. Though, I am not a student of Computer Science, I tried to reach my goal. Because, Be a Web Developer is my goal and  I want to conquer the world with my goal. </p>
                    </div>
                </div>

                {/* logo */}
                <div className='w-md-25'>
                    <div className='row'>
                        <div className='col-md-4 col-12 text-center'>
                            <img src={Logo} alt="Author" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe