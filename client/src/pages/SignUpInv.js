/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios'
import { Button, Radio, Form, Input } from 'antd';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import './styles/signup.css'

const { Title } = Typography;


const SignUpInv = () => {

    const [form] = Form.useForm();

    let navigate = useNavigate();

    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };

    const onFinish = (values) => {
        axios.post(`${process.env.REACT_APP_API_URL}/investor/new`,
            {
                name: values.name,
                email: values.email,
                password: values.password,
                feild_Of_interest: values.feild_Of_interest,
            }, config).then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });

        form.resetFields()

    };

    return (
        <div>
            <Navbar menu={true} />
            <div className='form-container' id='inv-form-container'>
                <div className='title'>
                    <Title >Sign Up As Investor</Title>
                </div>
                <Form
                    name="basic"
                    className='inv-form'
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ type: "email", required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Field Of Interest"
                        name="feild_Of_interest"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default SignUpInv