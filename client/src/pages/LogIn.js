import React from 'react'
import Navbar from '../components/navbar/Navbar'
import axios from 'axios'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Radio, Form, Input } from 'antd';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import './styles/login.css'

const { Title } = Typography;

const LogIn = () => {

    const [form] = Form.useForm();

    let navigate = useNavigate();

    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };

    const onFinish = (values) => {
        if (values.role === 'str') {
            axios.post(`${process.env.REACT_APP_API_URL}/startup/login`,
                {
                    email: values.username,
                    password: values.password
                }, config).then((result) => {
                    navigate('/startup-dashboard')
                    console.log(result)
                }).catch((err) => {
                    console.log(err)
                });

        } else {
            axios.post(`${process.env.REACT_APP_API_URL}/investor/login`,
                {
                    email: values.username,
                    password: values.password
                }, config)
                .then((result) => {
                    console.log(result)
                    navigate('/investor-dashboard')
                }).catch((err) => {
                    console.log(err)
                });
        }
        form.resetFields()

    };

    return (
        <div className='container'>
            <Navbar menu={true} />

            <div className='form-container'>
                <div className='title'>
                    <Title >Login</Title>
                </div>
                <Form
                    form={form}
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="role"
                        rules={[{ required: true, message: 'Please pick a role!' }]}
                        className='radio'
                    >
                        <Radio.Group>
                            <Radio.Button value="str">Startup</Radio.Button>
                            <Radio.Button value="inv">Investor</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>


    )
}

export default LogIn