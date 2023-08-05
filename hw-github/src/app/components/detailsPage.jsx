import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

const DetailsPage = ({ data }) => {
    const { id } = useParams()
    const person = data.find((item) => item._id === id)

    if (!person) {
        return <h1>Person with ID {id} not found</h1>
    }

    const { name, image, gender, species } = person

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p>
                <strong>Gender:</strong> {gender}
            </p>
            <p>
                <strong>Species:</strong> {species}
            </p>
        </div>
    )
}

DetailsPage.propTypes = {
    data: PropTypes.array.isRequired
}

export default DetailsPage
