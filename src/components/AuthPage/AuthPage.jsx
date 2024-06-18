import React from "react"
import {useState} from "react"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import eyeSvg from './eye-svgrepo-com.svg'
import AuthForm from './AuthForm/AuthForm'


const LoginPage = () => {

    let [type, setType] = useState('login')
    console.log(type)
    
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <div className="wrapper">
                    <div className="auth-page">
                    <form action='' className="auth-form">
                        <fieldset id="auth-form__type">
                            <button className={type === 'login' ? "auth-form__toggle active" : "auth-form__toggle "} onClick={(e) => (e.preventDefault(), setType('login'))}>
                                Войти
                            </button>
                            <button className={type === 'register' ? "auth-form__toggle active" : "auth-form__toggle "} onClick={(e) => (e.preventDefault(), setType('register'))}>
                                Зарегистрироваться
                            </button>
                        </fieldset>
                    <AuthForm type={type}/>
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