import React from 'react'

function HeaderMenu({ children, isMobileMenu }) {
    return (
        <ul className={isMobileMenu ? "show" : null}>
            {children}
        </ul>
    )
}

export default HeaderMenu
