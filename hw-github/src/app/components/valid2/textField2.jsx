import React from 'react'
import PropTypes from 'prop-types'

const TextField2 = ({ label, type, name, value, onChange, error }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <p>{error}</p>}
        </div>
    )
}

TextField2.defaultProps = {
    type: 'text'
}

const { string, func } = PropTypes

TextField2.propTypes = {
    label: string,
    type: string,
    name: string,
    value: string,
    onChange: func,
    error: string
}

export default TextField2
