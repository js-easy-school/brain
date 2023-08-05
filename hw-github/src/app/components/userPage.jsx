import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../api'
import { useHistory } from 'react-router-dom'
import QualitiesList from './qualitiesList'

const UserPage = ({ userId }) => {
    const history = useHistory()
    const [user, setUser] = useState()
    console.log(api.users)
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data))
    })
    const handleClick = () => {
        history.push('/users')
    }

    if (!user) return <span className="m-3">Loading...</span>
    return (
        <>
            {user && (
                <div className="m-3">
                    <h1>{user.name}</h1>
                    <h2>Профессия: {user.profession.name}</h2>
                    <p>
                        <QualitiesList qualities={user.qualities} />
                    </p>
                    <p>completedMeetings: {user.completedMeetings}</p>
                    <h2>Rate: {user.rate}</h2>
                    <button
                        className="btn btn-dark"
                        onClick={() => {
                            handleClick()
                        }}
                    >
                        Все пользователи
                    </button>
                </div>
            )}
        </>
    )
}

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
}

export default UserPage
