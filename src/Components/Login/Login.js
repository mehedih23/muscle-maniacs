import './Login.css'
import React, { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { ClipLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    <Toaster></Toaster>
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const emailRef1 = useRef('')
    const passwordRef1 = useRef('')

    // Email and password login //

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Google Sign In //

    const [signInWithGoogle, googleUser2, googleLoading2, googleError2] = useSignInWithGoogle(auth);


    // Users start //

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, user])

    if (user) {
        navigate(from, { replace: true });
        toast.success('Login Successfully', { id: 'success' })
    }
    if (googleUser2) {
        navigate(from, { replace: true });
        toast.success('Login Successfully', { id: 'success' })
    }

    // Users end  //


    // Loading start //

    if (loading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'><ClipLoader loading={loading} size={100} /></div>
    }
    if (googleLoading2) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'><ClipLoader loading={googleLoading2} size={100} /></div>
    }

    // Loading End //


    // Errors start //
    if (error) {
        toast.error(error?.message, { id: 'error' })
    }
    if (googleError2) {
        toast.error(googleError2?.message, { id: 'googleError2' })
    }
    // Errors end  //

    // Event Handler //
    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef1.current.value;
        const password = passwordRef1.current.value;
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='container'>
            <h1 style={{ color: '#120E43' }} className='text-center my-3'>Welcome Back To <span style={{ color: '#E8BD0D' }}>Muscle Maniacs</span></h1>
            <form onSubmit={handleLogin}>

                <div className='row'>
                    <div className="form-outline mb-4 col-lg-8 col-md-6 col-12 mx-auto">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input ref={emailRef1} type="email" id="form2Example1" className="form-control" required />
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-lg-8 col-md-6 col-12 mx-auto">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input ref={passwordRef1} type="password" id="form2Example2" className="form-control" required />
                    </div>
                </div>


                <div className="row mb-4">
                    <div className="col-auto mx-auto">
                        <p>New to Muscle Maniacs? <strong><Link to='/signup'>Sign Up</Link></strong></p>
                    </div>

                    <div className="col-auto mx-auto">
                        <Link to="/forgot-password">Forgot password?</Link>
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
                <button onClick={() => signInWithGoogle()} type="button" className="google">
                    <img style={{ height: '30px', width: '30px' }} src='https://i.ibb.co/pWwbH5K/google.png' alt="google" />
                </button>
            </div>
        </div>
    )
}

export default Login