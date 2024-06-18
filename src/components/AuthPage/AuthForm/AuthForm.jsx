import React from "react"


const AuthForm = ({ type }) => {
    let formContent = null;
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
                    <label htmlFor="username">Логин</label>
                    <input type="text" id="username" name="username" className="username-field" />
                </div>
                <div className="auth-form__firstname auth-form__row">
                    <label htmlFor="firstname">Имя</label>
                    <input type="text" id="firstname" name="firstname" className="firstname-field" />
                </div>
                <div className="auth-form__lastname auth-form__row">
                    <label htmlFor="lastname">Фамилия</label>
                    <input type="text" id="lastname" name="lastname" className="lastname-field" />
                </div>
                <div className="auth-form__middlename auth-form__row">
                    <label htmlFor="middlename">Отчество</label>
                    <input type="text" id="middlename" name="middlename" className="middlename-field" />
                </div>
                <div className="auth-form__university auth-form__row">
                    <label htmlFor="university">ВУЗ</label>
                    <input type="text" id="university" name="university" className="university-field" />
                </div>
                <div className="auth-form__uni-year auth-form__row">
                    <label htmlFor="uni-year">Курс</label>
                    <input type="text" id="uni-year" name="uni-year" className="uni-year-field" />
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