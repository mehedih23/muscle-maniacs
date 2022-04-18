import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (

        // Not found section //
        <div className='not-found'>
            <div>
                <img className='img-fluid' src="https://i.ibb.co/NKRMRxQ/404.png" alt="404-page not found" />
            </div>
            <div>
                <Link className='button404' to='/'>Back To Home</Link>
            </div>
        </div>
    )
}

export default NotFound