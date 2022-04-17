import './Login.css'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { ClipLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        <>
            {toast.error(error.message, { id: 'userError' })}
        </>
    }
    if (loading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'><ClipLoader loading={loading} size={100} /></div>
    }
    if (user) {
        navigate(from, { replace: true });
        toast.success('Login Successfully')
    }


    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='container'>
            <h1 style={{ color: '#120E43' }} className='text-center my-3'>Welcome Back To <span style={{ color: '#E8BD0D' }}>Muscle Maniacs</span></h1>
            <form onSubmit={handleLogin}>

                <div className='row'>
                    <div className="form-outline mb-4 col-lg-8 col-md-6 col-12 mx-auto">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" id="form2Example1" className="form-control" required />
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-lg-8 col-md-6 col-12 mx-auto">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" id="form2Example2" className="form-control" required />
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