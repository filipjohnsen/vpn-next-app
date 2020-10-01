import React, { useState } from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderMenuItem from './HeaderMenuItem'
import Logo from './Logo'
import MobileToggle from './MobileToggle'

function Header({ children }) {
    const [mobileMenuShowing, setMobileMenuShowing] = useState(false)
    return (
        <header>
            <nav>
                <Logo />
                <HeaderMenu isMobileMenu={mobileMenuShowing}>
                    <HeaderMenuItem text="MEISTÄ" slug="meist_" />
                    <HeaderMenuItem text="OTA YHTEYTTÄ" slug="contact" />
                    <HeaderMenuItem text="TIETOSUOJAKÄYTÄNTÖ" slug="tietosuojak_yt_nt_" />
                </HeaderMenu>
                <MobileToggle state={mobileMenuShowing} handleClick={setMobileMenuShowing} />
            </nav>
        </header>
    )
}

export default Header
