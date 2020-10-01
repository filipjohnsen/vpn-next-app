import React from 'react'

function LeaderboardImage({ url, children }) {
    return (
        <figure>
            <img src={url} />
            {children}
        </figure>
    )
}

export default LeaderboardImage
