import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Typography } from 'antd';
import './styles/signup.css'

const { Title } = Typography;


const SignUp = () => {
    return (
        <div>
            <Navbar menu={true} />
            <div className='title'>
                <Title >Sign Up</Title>
            </div>
        </div>
    )
}

export default SignUp