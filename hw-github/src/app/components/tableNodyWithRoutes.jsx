import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, useHistory, useParams } from 'react-router-dom'
import TableBody from './tableBody'

const TableBodyWithRoutes = ({ data, columns }) => {
    const history = useHistory()
    const handleLinkClick = (id) => history.push(`/details/${id}`)

    return (
        <Switch>
            <Route exact path="/">
                <table>
                    <thead>
                        <tr>
                            {Object.keys(columns).map((column) => (
                                <th key={column}>{columns[column].label}</th>
                            ))}
                        </tr>
                    </thead>
                    <TableBody
                        data={data}
                        columns={columns}
                        onLinkClick={handleLinkClick}
                    />
                </table>
            </Route>
            <Route path="/details/:id">
                <DetailsPage />
            </Route>
        </Switch>
    )
}

const DetailsPage = () => {
    const { id } = useParams()
    return <h1>Details Page for ID: {id}</h1>
}

TableBodyWithRoutes.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableBodyWithRoutes
