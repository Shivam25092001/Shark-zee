import React from 'react'
import { Image } from 'antd';
import { Button } from 'antd';
import img from '../../assests/landingpage.jpg'
import { Link } from "react-router-dom";
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
                <Link to='/signup-inv'>
                    <Button className='button' type="primary" size='large' >
                        SIGN UP AS INVESTOR
                    </Button>
                </Link>
                <Link to='/signup-str'>
                    <Button className='button' type="primary" size='large' >
                        SIGN UP AS STARTUP
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default HeroSection