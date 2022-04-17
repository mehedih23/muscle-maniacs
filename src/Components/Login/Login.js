import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
    }
    return (
        <div className='container'>
            <h1 style={{ color: '#120E43' }} className='text-center my-3'>Welcome Back To <span style={{ color: '#E8BD0D' }}>Muscle Maniacs</span></h1>
            <form onSubmit={handleLogin}>

                <div className='row'>
                    <div className="form-outline mb-4 col-lg-8 col-md-6 col-12 mx-auto">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" className="form-control" required />
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-lg-8 col-md-6 col-12 mx-auto">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control" required />
                    </div>
                </div>


                <div className="row mb-4">
                    <div className="col-auto mx-auto">
                        <p>New to Muscle Maniacs? <strong><Link to='/signup'>Sign Up</Link></strong></p>
                    </div>

                    <div className="col-auto mx-auto">
                        <Link to="/reset-password">Forgot password?</Link>
                    </div>
                </div>


                <div className='row'>
                    <button type="submit" className="btn-login col-lg-2 col-md-2 col-2 mx-auto mb-4">Login</button>
                </div>


            </form>
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

export default Login