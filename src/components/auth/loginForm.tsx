import { Button, Input } from 'antd'
import Form from 'antd/lib/form/Form'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'
import { loginRequest } from '../../helpers/httpRequest'
import { User } from '../../models/user'

export const LoginForm = () => {

    const onFinish = (values : any) => {
        console.table(values);
        
        loginRequest(
            {
                ...values,
                password: parseInt(values.password)
            }
        );
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <label>Email</label>
            <FormItem
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input 
                    placeholder="Email"
                    className="form__input"
                    size="large"
                />
            </FormItem>

            <label>Password</label>
            <FormItem
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password
                    placeholder="Password"
                    size="large"
                    className="form__input"
                    type="number"
                />
            </FormItem>

            <FormItem wrapperCol={{ offset: 4, span: 16 }}>
                <Button 
                    type="primary"
                    htmlType="submit"
                    size={"large"}
                    block
                    className="btn"
                >
                    Login
                </Button>
            </FormItem>
        </Form>
    )
}
