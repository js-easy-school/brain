import React, { useEffect, useState } from "react"

const FormUlbi = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState("Емейл не может быть пустым")
    const [passwordError, setPasswordError] = useState(
        "Пароль не может быть пустым"
    )
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const filter =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!filter.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный емейл")
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError("Пароль должен быть длинее 3 и меньше 8")
            if (!e.target.value) {
                setPasswordError("Пароль не может быть пустым")
            }
        } else {
            setPasswordError("")
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email":
                console.log(e.target.name)
                setEmailDirty(true)
                break
            case "password":
                setPasswordDirty(true)
                break
            default:
                break
        }
    }

    return (
        <form>
            <div className='mb-3'>
                <h1>Регистрация</h1>
                {emailDirty && emailError && (
                    <div style={{ color: "red" }}>{emailError}</div>
                )}
                <div>
                    <input
                        className='form-control'
                        value={email}
                        onChange={(e) => emailHandler(e)}
                        onBlur={(e) => blurHandler(e)}
                        name='email'
                        type='text'
                        placeholder='Enter your email...'
                    />
                </div>
                {passwordError && passwordDirty && (
                    <div style={{ color: "red" }}>{passwordError}</div>
                )}
                <div>
                    <input
                        className='form-control'
                        value={password}
                        onChange={(e) => passwordHandler(e)}
                        onBlur={(e) => blurHandler(e)}
                        name='password'
                        type='password'
                        placeholder='Enter your passwors...'
                    />
                </div>
            </div>
            <button
                disabled={!formValid}
                type='submit'
                className='btn btn-primary'
            >
                Registration
            </button>
        </form>
    )
}

export default FormUlbi
