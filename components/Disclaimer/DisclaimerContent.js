import React from 'react'

function DisclaimerContent({ content, state, handleClick }) {
    return (
        <div onClick={() => handleClick(!state)} className="disclaimer-overlay">
            <div className="disclaimer-container">
                {content}
            </div>
        </div>
    )
}

export default DisclaimerContent
