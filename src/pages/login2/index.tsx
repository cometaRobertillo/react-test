import React from 'react'
import { LoginForm } from '../../components/auth/loginForm'
import './login.scss'

export const Login2 = () => {
    return (
        <div className="centro">
            <div className="contenedor">
                <div className="contenedor__info">
                    <div className="info__layout">
                        <h2>item</h2>
                        <h2>Name App</h2>
                        <h2>This is the app description</h2>
                    </div>
                </div>

                <div className="contenedor__form">
                    <div className="form__center">
                        <h2 className="form__titulo">Login</h2>
                        <div className="form__layout">
                            <LoginForm />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
