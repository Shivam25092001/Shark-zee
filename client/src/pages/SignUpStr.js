/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios'
import { Button, Radio, Form, Input, InputNumber, } from 'antd';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import './styles/signup.css'

const { Title } = Typography;


const SignUpStr = () => {

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
                about: values.about,
                equityLeft: values.equityLeft,
                demands: {
                    equity: values.equity,
                    investment: values.investment,
                }
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
            <div className='form-container' id='str-form-container'>
                <div className='title'>
                    <Title >Sign Up As Startup</Title>
                </div>
                <Form
                    name="basic"
                    className='str-form'
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

                    <Form.Item
                        name="about"
                        label="About"
                        rules={[{ required: true, message: 'Please input about' }]}
                    >
                        <Input.TextArea showCount maxLength={250} />
                    </Form.Item>

                    <Form.Item
                        name="equityLeft"
                        label="Equity Left"
                        rules={[{ required: true, message: 'Please input donation amount!' }]}
                    >
                        <InputNumber addonAfter="%" style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item label="Demands" style={{ marginBottom: 0 }}>
                        <Form.Item
                            name="equity"
                            rules={[{ required: true, message: 'Please input equity demands' }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <InputNumber addonAfter="%" placeholder="Equity" />
                        </Form.Item>
                        <Form.Item
                            name="investment"
                            rules={[{ required: true, message: 'Please input investment demands' }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                        >
                            <Input placeholder="Investment" />
                        </Form.Item>
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

export default SignUpStr