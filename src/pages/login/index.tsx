import { Col, Row } from 'antd';
import React from 'react';
import { LoginForm } from '../../components/auth/loginForm';

export const Login = () => {

    return (
        <>
            <div>
                <Row justify="center" className="main__content">
                    <Col span={14} className="border-shadow">

                        <Row >
                            <Col span={6} className="info__container">
                                <div className="info__layout">
                                    <div className="info__layout--center">
                                        <Row justify="center" className="item">
                                            <img
                                                src="./assets/paper-plane.png"
                                                width="80"
                                                height="80"
                                                alt="paper plane"
                                            />
                                        </Row>
                                        <Row justify="center" className="item">App Name</Row>

                                        <Row className="item">
                                            <p className="info--title go">
                                                welcome to images sending app
                                            </p>
                                        </Row>
                                    </div>

                                </div>

                            </Col>

                            <Col span={18}>
                                <Row justify="center" className="form__title">
                                    <Col>
                                        <h2 >
                                            Log in
                                        </h2>
                                    </Col>
                                </Row>

                                <Row>

                                    <Col span={17} offset={3}>
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

