import React from 'react'
import NextLink from 'next/link'

function FooterMenuItem({ href, text }) {
    return (
        <li className="footer-menu-item">
            <NextLink href={href}>
                <a>{text}</a>
            </NextLink>
        </li>
    )
}

export default FooterMenuItem
