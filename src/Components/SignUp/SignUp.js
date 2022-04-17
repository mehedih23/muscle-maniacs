import './SignUp.css'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const handleSignUp = (e) => {
        e.preventDefault();
    }
    return (
        <div className='container'>
            <h1 style={{ color: '#120E43' }} className='text-center my-3'>Welcome To <span style={{ color: '#E8BD0D' }}>Muscle Maniacs</span></h1>
            <form action="" onSubmit={handleSignUp}>
                <div className='row'>
                    <div class="form-outline mb-4 col-lg-8 col-lg-6 col-12 mx-auto">
                        <label class="form-label" for="registerName">Name</label>
                        <input type="text" id="registerName" class="form-control" required />
                    </div>
                </div>

                <div className='row'>
                    <div class="form-outline mb-4 col-lg-8 col-lg-6 col-12 mx-auto">
                        <label class="form-label" for="registerUsername">Username</label>
                        <input type="text" id="registerUsername" class="form-control" required />
                    </div>
                </div>

                <div className='row'>
                    <div class="form-outline mb-4 col-lg-8 col-lg-6 col-12 mx-auto">
                        <label class="form-label" for="registerEmail">Email</label>
                        <input type="email" id="registerEmail" class="form-control" required />
                    </div>
                </div>

                <div className='row'>
                    <div class="form-outline mb-4 col-lg-8 col-lg-6 col-12 mx-auto">
                        <label class="form-label" for="registerPassword">Password</label>
                        <input type="password" id="registerPassword" class="form-control" required />
                    </div>
                </div>

                <div className='row'>
                    <div class="form-outline mb-4 col-lg-8 col-lg-6 col-12 mx-auto">
                        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                        <input type="password" id="registerRepeatPassword" class="form-control" required />
                    </div>
                </div>


                <div class="form-check d-flex justify-content-center mb-4">
                    <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="registerCheck"
                        aria-describedby="registerCheckHelpText"
                    />
                    <label class="form-check-label" for="registerCheck">
                        I have read and agree to the terms
                    </label>
                </div>
                <div className='row'>
                    <button type="submit" class="col-2 mx-auto btn-login mb-3">Sign Up</button>
                </div>


            </form>
            <div className='text-center'>
                <p > Already have an account? <strong><Link to='/login'>Login</Link></strong></p>
            </div>
            <div className="text-center">
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='line'>

                    </div>
                    <span className='mx-4'> or </span>
                    <div className='line'>

                    </div>
                </div>
                <button type="button" className="google">
                    <img style={{ height: '30px', width: '30px' }} src='https://i.ibb.co/pWwbH5K/google.png' alt="google" />
                </button>
            </div>
        </div>
    )
}

export default SignUp