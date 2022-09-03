import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import Navbar from '../components/navbar/Navbar'
import "../index.css"

const LandingPage = () => {
    return (
        <div className='landingPage'>
            <Navbar menu={true} />
            <HeroSection />
        </div>
    )
}

export default LandingPage