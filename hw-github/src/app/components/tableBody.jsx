import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component
            if (typeof component === 'function') {
                return component(item)
            }
            return component
        }
        return _.get(item, columns[column].path)
    }
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableBody

// import React from 'react'
// import PropTypes from 'prop-types'
// import _ from 'lodash'
// import { Link } from 'react-router-dom'

// const TableBody = ({ data, columns }) => {
//     const renderContent = (item, column) => {
//         if (columns[column].component) {
//             const component = columns[column].component
//             if (typeof component === 'function') {
//                 return component(item)
//             }
//             return component
//         }
//         return _.get(item, columns[column].path)
//     }

//     return (
//         <tbody>
//             {data.map((item) => {
//                 const linkCell =
//                     columns.name && columns.name.path === 'name'
//                         ? (
//                             <td key={columns.name.path}>
//                                 <Link to={`${item._id}`}>
//                                     {_.get(item, columns.name.path)}
//                                 </Link>
//                             </td>
//                         )
//                         : null
//                 const otherCells = Object.keys(columns)
//                     .filter((column) => column !== 'name')
//                     .map((column) => (
//                         <td key={column}>{renderContent(item, column)}</td>
//                     ))
//                 return (
//                     <tr key={item._id}>
//                         {linkCell}
//                         {otherCells}
//                     </tr>
//                 )
//             })}
//         </tbody>
//     )
// }

// TableBody.propTypes = {
//     data: PropTypes.array.isRequired,
//     columns: PropTypes.object.isRequired
// }

// export default TableBody
