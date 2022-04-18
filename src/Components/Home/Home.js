import React from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import Keys from '../Keys/Keys'
import Services from '../Services/Services'
import WhyUs from '../WhyUs/WhyUs'

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Keys></Keys>
            <Services></Services>
            <WhyUs></WhyUs>
        </div>
    )
}

export default Home