import React from 'react'
import './ContactForm.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const ContactForm = () => {
    const navigate = useNavigate();

    // submit function //
    const handleContact = (e) => {
        e.preventDefault()
        navigate('/')
        toast.success('Thank You For Contact Me!', { id: 'contact' })
    }

    return (
        <div className='container'>
            <div className='text-center my-3'>
                <h2>Anything To Say? Please <strong style={{ color: '#E8BD0D' }}> Contact</strong></h2>
            </div>

            {/* form */}

            <form onSubmit={handleContact}>
                <div className='row'>
                    <div class="form-outline mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <input type="text" id="form4Example1" class="form-control" required />
                        <label class="form-label" for="form4Example1">Name</label>
                    </div>
                </div>

                <div className='row'>
                    <div class="form-outline mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <input type="email" id="form4Example2" class="form-control" required />
                        <label class="form-label" for="form4Example2">Email address</label>
                    </div>
                </div>

                <div className='row'>
                    <div class="form-outline mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <textarea class="form-control" id="form4Example3" rows="4" required></textarea>
                        <label class="form-label" for="form4Example3">Message</label>
                    </div>
                </div>
                <div className='row'>
                    <button type="submit" class="btn btn-primary btn-block mb-4 col-2 mx-auto">Send</button>
                </div>
            </form>

        </div>
    )
}

export default ContactForm