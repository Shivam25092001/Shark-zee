import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Typography } from 'antd';
import './styles/login.css'

const { Title } = Typography;

const LogIn = () => {
    return (
        <div>
            <Navbar menu={true} />
            <div className='title'>
                <Title >Login</Title>
            </div>
        </div>
    )
}

export default LogIn