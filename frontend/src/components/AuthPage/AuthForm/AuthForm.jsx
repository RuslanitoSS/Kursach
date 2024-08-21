import React from "react"


const AuthForm = ({ type }) => {
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
           {formContent}
        </>
     


    )
}

export default AuthForm