import React, { useState } from 'react'
import './CheckOut.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const CheckOut = () => {
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()

    // Submit function //
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        navigate('/')
        toast.success('Thank You. Order Place Successfully!', { id: 'order-success' })
    }
    return (
        <div className='container'>
            <div className='text-center'>
                <h1 className='my-3'>Please Checkout!</h1>
            </div>

            {/* form start */}
            <form onSubmit={handlePlaceOrder}>
                <div className="row mb-4">
                    <div className="col-md-6 col-lg-8 col-12 mx-auto">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control" required />
                            <label className="form-label" htmlFor="form6Example1">Your name</label>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <input type="text" id="form6Example4" className="form-control" required />
                        <label className="form-label" htmlFor="form6Example4">Address</label>
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <input type="email" id="form6Example5" className="form-control" required />
                        <label className="form-label" htmlFor="form6Example5">Email</label>
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <input type="number" id="form6Example6" className="form-control" required />
                        <label className="form-label" htmlFor="form6Example6">Phone</label>
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                        <label className="form-label" htmlFor="form6Example7">Additional information</label>
                    </div>
                </div>

                <div className='row'>
                    <div className="form-check d-flex justify-content-center mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <div onClick={() => setChecked(!checked)}>
                            <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" />
                        </div>
                        <label className="form-check-label" htmlFor="form6Example8"> Are You Sure? </label>
                    </div>
                </div>

                <div className='row'>
                    <button disabled={!checked} type="submit" className="btn btn-primary btn-block mb-4 col-4 mx-auto">Place order</button>
                </div>
            </form>
        </div>
    )
}

export default CheckOut