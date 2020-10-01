import React from 'react'

function LeaderboardPros({ title, children }) {
    return (
        <div className="leaderboard-item-pros">
            <h3>{title}</h3>
            <ul className="leaderboard-pros-list">
                {children}
            </ul>
        </div>
    )
}

export default LeaderboardPros
