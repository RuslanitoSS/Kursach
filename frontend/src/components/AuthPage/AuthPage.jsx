import React from "react"
import { useState } from "react"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import AuthForm from './AuthForm/AuthForm'
import AxiosInstance from "../Axios/Axios"
import { useNavigate } from "react-router-dom"




const LoginPage = () => {
    const [type, setType] = useState('login')
    const navigate = useNavigate()

    const handeleSubmit = (e) => {
        e.preventDefault()

        const form = document.querySelector('.auth-form')
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)

        console.log(data)

        AxiosInstance.post(`student/`, data)
            .then(response => {
                console.log(response)
                navigate('/')
            })

    }

    let formContent;
    if (type == 'login') {
        formContent = (
            <fieldset>
                <div className="auth-form__username auth-form__row">
                    <label htmlFor="username">Логин</label>
                    <input type="text" id="username" name="username" className="username-field" />
                </div>
                <div className="auth-form__password auth-form__row">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" id="password" name="password" className="password-field" />
                </div>
                <button type="submit" className="auth-form__submit">
                    Войти
                </button>
            </fieldset>
        )
    } else if (type == 'register') {
        formContent = (
            <fieldset>
                <div className="auth-form__username auth-form__row">
                    <label htmlFor="login">Логин</label>
                    <input type="text" id="login" name="login" className="login-field" />
                </div>
                <div className="auth-form__firstname auth-form__row">
                    <label htmlFor="first_name">Имя</label>
                    <input type="text" id="first_name" name="first_name" className="firstname-field" />
                </div>
                <div className="auth-form__lastname auth-form__row">
                    <label htmlFor="last_name">Фамилия</label>
                    <input type="text" id="second_name" name="second_name" className="secondname-field" />
                </div>
                <div className="auth-form__middlename auth-form__row">
                    <label htmlFor="middle_name">Отчество</label>
                    <input type="text" id="middle_name" name="middle_name" className="middlename-field" />
                </div>
                <div className="auth-form__university auth-form__row">
                    <label htmlFor="university">ВУЗ</label>
                    <input type="text" id="university" name="university" className="university-field" />
                </div>
                <div className="auth-form__uni-year auth-form__row">
                    <label htmlFor="course">Курс</label>
                    <input type="number" step={1} max={4} id="course" name="course" className="course-field" />
                </div>
                <div className="auth-form__password auth-form__row">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" id="password" name="password" className="password-field" />
                </div>
                <button type="submit" className="auth-form__submit">
                    Зарегистрироваться
                </button>
            </fieldset>
        )
    }

    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <div className="wrapper">
                    <div className="auth-page">
                        <form onSubmit={handeleSubmit} className="auth-form">
                            <fieldset id="auth-form__type">
                                <button className={type === 'login' ? "auth-form__toggle active" : "auth-form__toggle "} onClick={(e) => (e.preventDefault(), setType('login'))}>
                                    Войти
                                </button>
                                <button className={type === 'register' ? "auth-form__toggle active" : "auth-form__toggle "} onClick={(e) => (e.preventDefault(), setType('register'))}>
                                    Зарегистрироваться
                                </button>
                            </fieldset>
                            {formContent}
                        </form>

                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default LoginPage