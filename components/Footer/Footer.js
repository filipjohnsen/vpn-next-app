import React from 'react'
import { Logo } from '../Header'
import CompanyDetails from './CompanyDetails'
import FooterMenu from './FooterMenu'
import FooterText from './FooterText'

function Footer() {
    return (
        <footer>
            <div className="inner-footer">
                <Logo />
                <FooterMenu />
                <CompanyDetails />
                <FooterText />
            </div>
        </footer>
    )
}

export default Footer
