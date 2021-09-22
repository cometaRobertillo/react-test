import { Button, Col, Divider, Input, Row } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import './login.scss';
import {LoginForm} from './../components/auth/loginForm';

export const Login = () => {

    return (
        <>
            <div >
                <Row className="main__content">
                    <Col span={22} offset={1} className="item">
                        <Row>
                            <Col span={6} className="item">
                                <Row justify="center">item</Row>
                                <Row justify="center">item</Row>
                                <Row justify="center">item</Row>
                            </Col>

                            <Col span={18} className="form__login">
                                <Row>
                                    <Col>Log in</Col>
                                </Row>

                                <LoginForm/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
        </>
    )
}

