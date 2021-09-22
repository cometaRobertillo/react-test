import { Col, Row } from 'antd';
import React from 'react';
import './login.scss';
import { LoginForm } from './../components/auth/loginForm';

export const Login = () => {

    return (
        <>
            <div >
                <Row className="main__content">
                    <Col span={14} offset={5} className="border-shadow">
                        <Row justify="space-between">
                            <Col span={6} className="info__container">
                                <div className="info__layout">
                                    <Row justify="center" className="item">
                                        <img
                                            src="./assets/paper-plane.png"
                                            width="80"
                                            height="80"
                                            alt="paper plane"
                                        />
                                    </Row>
                                    <Row justify="center" className="item">App Name</Row>

                                    <Row justify="center" className="item">
                                        <p className="info--title">
                                            welcome to images sending app
                                        </p>
                                    </Row>
                                </div>

                            </Col>

                            <Col span={18}  className="test">
                                <Row justify="center" className="form__title">
                                    <Col>
                                        <h2 >
                                            Log in
                                        </h2>
                                    </Col>
                                </Row>

                                <Row>
                                    
                                    <Col span={17} offset={3} className="form__container">
                                        <LoginForm />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
        </>
    )
}

