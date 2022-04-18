import React, { useState } from 'react'
import './Key.css'

const Key = (props) => {
    const { single } = props;
    const { name, image, about } = single;
    const [text, setText] = useState(name)
    const handleText = () => {
        setText(about)
    }
    const handleName = () => {
        setText(name)
    }

    return (
        <div onMouseEnter={handleText} onMouseLeave={handleName} className='key-container col-lg-4 col-md-6 col-12 my-4'>
            <img className='img-fluid' src={image} alt="key" />
            <div>
                <p className={`key-title`}>{text}</p>
            </div>
        </div>
    )
}

export default Key