import './ForgotPassword.css'
import React, { useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ClipLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    if (error) {
        return toast.error(error.message, { id: 'Password Error' })
    }

    if (sending) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'><ClipLoader loading={sending} size={100} /></div>
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordReset = (e) => {
        e.preventDefault()
        sendPasswordResetEmail(email);
        toast.success('Please Check Your Email!', { id: 'Password Reset' })
    }

    return (
        <div className='container forgot-container'>
            <div className='col-lg-8 col-md-6 col-12 mx-auto'>
                <form onSubmit={handlePasswordReset} class="form-floating mt-5 mb-4">
                    <input onBlur={handleEmail} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                    <button type='submit' className='reset-btn'>Reset</button>
                </form>
            </div>

        </div>
    )
}

export default ForgotPassword