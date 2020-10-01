import React, { useState } from 'react'
import DisclaimerContent from './DisclaimerContent'

function Disclaimer({ children }) {
    const [toggled, setToggled] = useState(false)
    return (
        <>
            <i onClick={() => setToggled(!toggled)} class="fas fa-info-circle"></i>
            {toggled ?
                <DisclaimerContent content={children} handleClick={setToggled} state={toggled} /> : null
            }
        </>
    )
}

export default Disclaimer
