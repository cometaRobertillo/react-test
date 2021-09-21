import React from 'react'
import './login.scss'

export const Login = () => {
    return (
        <div className="login__main">
            <div className="login__box-container">
                <div className="box-container__info">

                    <div className="info__item">Info</div>
                    <div className="info__item">Info</div>
                    <div className="info__item">Info</div>

                </div>

                <div className="box-container__form">

                    <h2 className="form__title">Log in</h2>
                    <form>
                        <label>
                            Email
                        </label>
                        <input
                            className="form--input"
                            placeholder="email"
                            name="email"
                            autoComplete="off"
                        />

                        <label>
                            Password
                        </label>

                        <input
                            className="form--input"
                            placeholder="password"
                            name="password"
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

