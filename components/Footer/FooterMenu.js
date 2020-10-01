import React from 'react'
import FooterMenuItem from './FooterMenuItem'

function FooterMenu() {
    return (
        <ul className="footer-menu">
            <FooterMenuItem text="Tietosuojakäytäntö" href="./tietosuojak_yt_nt_"/>
            <FooterMenuItem text="Cookies" href="./cookies"/>
        </ul>
    )
}

export default FooterMenu
