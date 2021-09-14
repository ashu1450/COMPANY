import React from 'react'
import Profile from './Profile';
import './Setting.css'

export default function Setting() {
    return (
        <div className="container1">
            <div>
                <Profile />
            </div>
            <div className="setting">
                <p>This is setting page</p>
            </div>
        </div>
    )
}
