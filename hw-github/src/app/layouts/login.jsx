// Импортируем необходимые модули
import React, { useEffect, useState } from "react"
import TextField from "../components/textField"
import { validator } from "../utils/validator"

// Определяем компонент формы для входа
const Login = () => {
    // Используем хук useState для управления внутренним состоянием
    const [data, setData] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({})

    // Обработчик изменения поля ввода
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
        console.log(target.value)
    }

    // Конфигурация для валидатора
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения",
            },
            isEmail: {
                message: "Email введен некорректно",
            },
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения",
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглваную букву",
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру",
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8,
            },
        },
    }

    // Используем хук useEffect для валидации данных при каждом изменении состояния
    useEffect(() => {
        validate()
    }, [data])

    // Функция валидации
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }

    // Рендерим форму с помощью компонента TextField
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 shadow p-0'>
                    <h3 className='ms-4 mb-4'>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label='Электронная почта'
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            label='Пароль'
                            type='password'
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                            error={errors.password}
                        />
                        <button
                            className='btn btn-outline-secondary m-3 border-2'
                            type='submit'
                            disabled={!isValid}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
