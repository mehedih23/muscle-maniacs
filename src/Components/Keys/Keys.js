import './Keys.css'
import React, { useEffect, useState } from 'react'
import Key from '../Key/Key'

const Keys = () => {
    const [keys, setKeys] = useState([])
    useEffect(() => {
        fetch('keys.json')
            .then(response => response.json())
            .then(data => setKeys(data))
    }, [])
    console.log(keys)
    return (
        <div className='container'>
            <div className='row'>
                {
                    keys.map(key => <Key
                        key={key.id}
                        single={key}
                    ></Key>)
                }
            </div>
        </div>
    )
}

export default Keys