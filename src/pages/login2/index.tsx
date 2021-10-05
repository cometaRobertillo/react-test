import { SwapOutlined } from '@ant-design/icons'
import React from 'react'
import { LoginForm } from '../../components/auth/loginForm'

export const Login2 = () => {
    return (
        <div className="centro">
            <div className="contenedor">
                <div className="contenedor__info">
                    <div className="info__layout">
                        <SwapOutlined className="icon elemento"/>
                        <h2 className="elemento title">Reporting</h2>
                        <SwapOutlined className="icon elemento"/>
                    </div>
                </div>

                <div className="contenedor__form">
                    <div className="form__center">
                        <h1 className="form__titulo title">Login</h1>
                        <div className="form__layout">
                            <LoginForm />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
