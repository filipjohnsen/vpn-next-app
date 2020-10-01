import React from 'react'
import OSListItem from './OSListItem'

export default function OSList({ children, text }) {
    return (
        <div className="os-list-container">
            <span>{text}</span>
            <ul className="os-list">
                <OSListItem url="https://paras7vpn.fi/assets/img/windows.svg" />
                <OSListItem url="https://paras7vpn.fi/assets/img/apple.svg" />
                <OSListItem url="https://paras7vpn.fi/assets/img/001-android-logo.svg" />
                <OSListItem url="https://paras7vpn.fi/assets/img/linux.svg" />
            </ul>
        </div>
    )
}