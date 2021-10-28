import React from 'react'
import Profile from './Profile';
import './Setting.css'
import *as ReactBootStrap from "react-bootstrap";

export default function Setting() {
    return (
        <div className="container1">
            <div>
                <Profile />
            </div>
            <div className="setting">
                <h6>Account Settings </h6>
                <hr/>
            </div>
        </div>
    )
}
