import './Home.css'
import React from 'react'
import Banner from '../Banner/Banner'
import Keys from '../Keys/Keys'
import Services from '../Services/Services'

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Keys></Keys>
            <Services></Services>
        </div>
    )
}

export default Home