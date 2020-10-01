import React from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderMenuItem from './HeaderMenuItem'
import Logo from './Logo'

function Header({ children }) {
    return (
        <header>
            <nav>
                <Logo />
                <HeaderMenu>
                    <HeaderMenuItem text="MEISTÄ" slug="meist_" />
                    <HeaderMenuItem text="OTA YHTEYTTÄ" slug="contact" />
                    <HeaderMenuItem text="TIETOSUOJAKÄYTÄNTÖ" slug="tietosuojak_yt_nt_" />
                </HeaderMenu>
            </nav>
        </header>
    )
}

export default Header
