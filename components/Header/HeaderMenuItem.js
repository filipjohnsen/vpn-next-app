import React from 'react'
import NextLink from 'next/link'

function HeaderMenuItem({ text, slug }) {
    return (
        <li>
            <NextLink href={`/${slug}`}>
                <a>{text}</a>
            </NextLink>
        </li>
    )
}

export default HeaderMenuItem
