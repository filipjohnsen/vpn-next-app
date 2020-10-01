import React from 'react'
import NextLink from 'next/link'
import PopupHeader from './PopupHeader'
import PopupImageSection from './PopupImageSection'
import PopupInfoSection from './PopupInfoSection'

function PopupContent({ subid, state, handleClick }) {
    return (
        <div className="popup-container">
            <PopupHeader state={state} handleClick={handleClick} text="Saat 49% alennuksen nyt" />
            <NextLink href={`/go/expressvpn/${subid}`}>
                <a className="popup-content">
                    <PopupImageSection />
                    <PopupInfoSection />
                </a>
            </NextLink>
        </div>
    )
}

export default PopupContent
