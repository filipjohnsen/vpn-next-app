import React from 'react'

function MobileToggle({ state, handleClick }) {
    
    return <i onClick={() => handleClick(!state)} className={`mobile-menu ${!state ? "fas fa-bars" : "fas fa-times"}`}></i>
}

export default MobileToggle
