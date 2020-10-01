import React from 'react'
import NextLink from 'next/link'

function Logo() {
    return (
        <NextLink href="./">
            <a>
                <figure className="logo-container">
                    <img src="https://paras7vpn.fi/assets/img/logo.png" />
                    <h2>Paras7<strong>VPN</strong></h2>
                </figure>
            </a>
        </NextLink>
    )
}

export default Logo
