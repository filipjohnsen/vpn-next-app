import React from 'react'

export default function HeroList({ children }) {
    return (
        <ul className="hero-list">
            {children}
        </ul>
    )
}