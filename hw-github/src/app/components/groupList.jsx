import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
    items,
    onItemSelect,
    selectedItem,
    valueProperty,
    contentProperty
}) => {
    if (!Array.isArray(items)) {
        console.log(!Array.isArray(items))
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            'list-group-item' +
                            (items[item] === selectedItem ? ' active' : '')
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        )
    }
    // console.log(items)
    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    key={item[valueProperty]}
                    className={
                        'list-group-item' +
                        (item === selectedItem ? ' active' : '')
                    }
                    onClick={() => onItemSelect(item)}
                    role="button"
                >
                    {item[contentProperty]}
                </li>
            ))}
        </ul>
    )
}
GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name'
}
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired
}

export default GroupList
