import React from 'react'

function PopupHeader({ text, state, handleClick }) {
    return (
        <div className="popup-header">
            <i className="fas fa-stopwatch"></i>
            {text}
            <i onClick={() => handleClick(!state)} className="fas fa-times exit-popup"></i>
        </div>
    )
}

export default PopupHeader
