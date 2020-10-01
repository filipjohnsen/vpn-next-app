import React from 'react'
import NextLink from 'next/link'

function LeaderboardItem({ provider, subid, children }) {
    return (
        <NextLink href={`/go/${provider}/${subid}`}>
            <a className="leaderbord-item-container">
                {children}
            </a>
        </NextLink>
    )
}

export default LeaderboardItem
