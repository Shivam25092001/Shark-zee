import React from 'react'
import { Image } from 'antd';
import { Button } from 'antd';
import img from '../../assests/landingpage.jpg'
import "./herosection.css"

const HeroSection = () => {
    return (
        <div>
            <Image
                width={"101%"}
                preview={false}
                src={img}
            />
            <div className='head'>
                Get Started!!!
            </div>
            <div className='buttonContainer'>
                <Button className='button' type="primary" size='large' >
                    INVESTOR
                </Button>
                <Button className='button' type="primary" size='large' >
                    STARTUP
                </Button>
            </div>

        </div>
    )
}

export default HeroSection