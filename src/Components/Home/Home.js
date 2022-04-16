import './Home.css'
import React from 'react'
import Banner from '../Banner/Banner'
import Keys from '../Keys/Keys'

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Keys></Keys>
        </div>
    )
}

export default Home