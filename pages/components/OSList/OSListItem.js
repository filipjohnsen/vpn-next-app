import React from 'react'

function OSListItem({ url }) {
    
    return (
        <li className="os-list-item">
            <img width="25px" src={url} />
        </li>
    )
}

export default OSListItem
