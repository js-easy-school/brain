import React, { useEffect, useState } from 'react'
import TextField2 from './textField2'
import { validator } from './utils2/validator2'

const Login2 = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})
    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        // for (const fieldName in data) {
        //     if (data[fieldName].trim() === '') {
        //         errors[fieldName] = `${fieldName} обязательно для заполнения`
        //     }
        // }
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязательна для заполнения'
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }
    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log(e.target.name)
    }

    const { email, password } = data

    return (
        <div>
            <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            <form onSubmit={handleSubmit}>
                <TextField2
                    label="Электронная почта"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField2
                    label="Пароль"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login2
