import { Button, Input } from 'antd'
import Form, { useForm } from 'antd/lib/form/Form'
import FormItem from 'antd/lib/form/FormItem'
import React, { useEffect } from 'react'
import { sampleResquest } from '../../helpers/httpRequest'
import { User } from '../../models/user'

export const LoginForm = () => {

    let offsetButton : number = 0;
    let matches : boolean;
    const mediaQuery = window.matchMedia('(min-width: 500px)');

    mediaQuery.onchange = (event) => {
        if (event.matches) {
            /* the viewport is 500 pixels wide or more */
            matches=true;
            offsetButton = 4;
            console.log('> 500',offsetButton)
          } else {
            /* the viewport is less than 500 pixels wide */
            matches=false;
            offsetButton=0;
            console.log('< 500',offsetButton)
          }
    }

    console.log(mediaQuery.matches);
    

    console.log("static",offsetButton);
    




    const onFinish = async (values: User) => {
        console.table(values);

        const sample = await sampleResquest('post','/login', {...values});
        console.log('sample',sample);
        console.log('since button', offsetButton);

        
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        
    };

    const [form] = useForm()
    console.log(form);
    

    return (
        <Form
            form={form}
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

            <FormItem 
                wrapperCol={{offset: offsetButton, span: 16 }}
                
                >

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
