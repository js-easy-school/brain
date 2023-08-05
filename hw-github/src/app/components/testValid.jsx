import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    // Обработчик ввода почты
    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value)
    // }
    const handleEmailChange = (event) => {
        const emailValue = event.target.value
        const emailErrors = !emailValue.includes('@')
            ? { email: 'Некорректный адрес почты' }
            : { email: null } // изменение здесь
        setErrors({ ...errors, ...emailErrors })
        setEmail(emailValue)
    }

    // Обработчик ввода пароля
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    // Обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault()

        // Валидация полей формы
        const errors = {}
        if (!email.includes('@')) {
            errors.email = 'Некорректный адрес почты'
        }
        if (password.trim().length < 6) {
            errors.password = 'Пароль должен быть не менее 6 символов'
        }
        setErrors(errors)

        // Отправка данных на сервер, если нет ошибок валидации
        if (Object.keys(errors).length === 0) {
            console.log('Данные валидны, отправляем форму')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Почта</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit">Войти</button>
        </form>
    )
}

export default LoginForm
