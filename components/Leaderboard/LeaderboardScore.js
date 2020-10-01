import React from 'react'

function LeaderboardScore({children, score}) {
    return (
        <div className="leaderboard-score-container">
            <span>Arvostelu</span>
            <span className="score">{score}</span>
            <ul className="star-container">
                {children}
            </ul>
        </div>
    )
}

export default LeaderboardScore
