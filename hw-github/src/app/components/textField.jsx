// Импортируем библиотеки React и PropTypes
import React, { useState } from "react"
import PropTypes from "prop-types"

// Определяем компонент TextField, принимающий несколько пропсов
const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }
    // Определяем компонент TextField, принимающий несколько пропсов
    return (
        <div className='form-group row m-2'>
            <label htmlFor={name}>{label}</label>
            <div className='input-group col-sm-0 has-validation'>
                <input
                    className={`border-2 form-control${
                        error ? " is-invalid" : ""
                    }`}
                    type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                {type === "password" && (
                    <button
                        className='btn btn-outline-secondary'
                        type='button'
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" + (showPassword ? "-slash" : "")
                            }
                        ></i>
                    </button>
                )}

                {/* Рендерим сообщение об ошибке, если оно есть */}
                {error && <div className='invalid-feedback'>{error}</div>}
            </div>
        </div>
    )
}

// Устанавливаем значение по умолчанию для пропса type, если он не передан
TextField.defaultProps = {
    type: "text",
}

// Описываем, какие пропсы принимает компонент TextField и какого типа они должны быть
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
}

// Экспортируем компонент TextField для его использования в других частях приложения
export default TextField
