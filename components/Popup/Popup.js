import React from 'react'
import PopupContent from './PopupContent';

function Popup({ subid, state, handleClick }) {

    return (
        <div onClick={() => handleClick(!state)} className="popup-overlay">
            <PopupContent subid={subid} state={state} handleClick={handleClick} />
        </div>
    )

}

export default Popup
