import React from 'react'
import { LoginForm } from '../../components/auth/loginForm'

export const Login2 = () => {
    return (
        <div className="centro">
            <div className="contenedor">
                <div className="contenedor__info">
                    <div className="info__layout">
                        <h2 className="elemento">item</h2>
                        <h2 className="elemento">Reporting</h2>
                        <h2 className="elemento">item</h2>

                    </div>
                </div>

                <div className="contenedor__form">
                    <div className="form__center">
                        <h1 className="form__titulo">Login</h1>
                        <div className="form__layout">
                            <LoginForm />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
