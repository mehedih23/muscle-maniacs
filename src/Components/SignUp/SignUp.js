import './SignUp.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import toast from 'react-hot-toast';
import ClipLoader from "react-spinners/ClipLoader";

const SignUp = () => {
    const navigate = useNavigate();
    const [fill, setFill] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user0,
        loading0,
        error0,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [user, loading, error] = useAuthState(auth);

    if (error0 || error) {
        return (
            <div>
                <p>Error: {error?.message}</p>
            </div>
        );
    }
    if (loading0 || loading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'><ClipLoader loading={loading0 || loading} size={100} /></div>
    }
    console.log(user0)
    if (user || user0) {
        user.displayName = name;
        console.log(user?.displayName)
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            toast.error('Password Mismatched!', { id: 'error' })
        }
        else {
            toast.success('Account Created Successfully!')
            createUserWithEmailAndPassword(email, password)
            navigate('/login');
        }

    }
    return (
        <div className='container'>
            <h1 style={{ color: '#120E43' }} className='text-center my-3'>Welcome To <span style={{ color: '#E8BD0D' }}>Muscle Maniacs</span></h1>
            <form onSubmit={handleSignUp}>
                <div className='row'>
                    <div className="form-outline mb-4 col-lg-8 col-lg-6 col-12 mx-auto">
                        <label className="form-label" htmlFor="registerName">Name</label>
                        <input onBlur={(e) => setName(e.target.value)} type="text" id="registerName" className="form-control" required />
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-lg-8 col-lg-6 col-12 mx-auto">
                        <label className="form-label" htmlFor="registerEmail">Email</label>
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" id="registerEmail" className="form-control" required />
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-lg-8 col-lg-6 col-12 mx-auto">
                        <label className="form-label" htmlFor="registerPassword">Password</label>
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" id="registerPassword" className="form-control" required />
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-lg-8 col-lg-6 col-12 mx-auto">
                        <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                        <input onBlur={(e) => setRepeatPassword(e.target.value)} type="password" id="registerRepeatPassword" className="form-control" required />
                    </div>
                </div>


                <div className="form-check d-flex justify-content-center mb-4">
                    <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="registerCheck"
                        aria-describedby="registerCheckHelpText"
                        onClick={() => setFill(!fill)}
                    />
                    <label className="form-check-label" htmlFor="registerCheck">
                        I have read and agree to the terms
                    </label>
                </div>
                <div className='row'>
                    <button
                        type="submit"
                        className={`col-2 mx-auto btn-login mb-3`}
                        disabled={!fill}
                    >Sign Up</button>
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