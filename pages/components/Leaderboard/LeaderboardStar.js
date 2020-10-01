import React from 'react'

function LeaderboardStar({starType = "full"}) {
    let star = <i class="fas fa-star"></i>
    
    if(starType === "border") {
        star = <i class="far fa-star"></i>
    }else if(starType === "half") {
        star = <i class="fas fa-star-half-alt"></i>
    }

    return star
}

export default LeaderboardStar
