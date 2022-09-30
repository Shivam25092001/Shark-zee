import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import './navbar.css'

const { Header } = Layout;

const Navbar = (props) => {
    return (
        <div>
            <Layout className="layout">
                <Header className='header'>
                    <Link to='/'>
                        <div className="logo" >
                            Shark-EZ
                        </div>
                    </Link>
                    {props.menu ? <div><Menu
                        className='menu'
                        theme="dark"
                        mode="horizontal"
                    >
                        <Menu.Item key='home'>
                            <Link to='/'>
                                <span>Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='startup'>
                            <Link to='/'>
                                <span>Startup</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='investor'>
                            <Link to='/'>
                                <span>Investor</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='login'>
                            <Link to='/login'>
                                <span>Log In</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                    </div> : <></>
                    }

                </Header>
            </Layout>
        </div>
    )
}

export default Navbar