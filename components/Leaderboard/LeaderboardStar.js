import React from 'react'

function LeaderboardStar({starType = "full"}) {
    let star = <i className="fas fa-star"></i>
    
    if(starType === "border") {
        star = <i className="far fa-star"></i>
    }else if(starType === "half") {
        star = <i className="fas fa-star-half-alt"></i>
    }

    return star
}

export default LeaderboardStar
