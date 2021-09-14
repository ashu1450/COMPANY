import React from 'react';
import NavBar from '../../NavBar';
import Profile from './Profile';
import './MyProfile.css';

function MyProfile() {
    return (
        <div className="container1">
            <div>
                <Profile />
            </div>
            <div className="myProfile">
                <p> My profilej page </p>
            </div>
        </div>
    );
}
export default MyProfile;