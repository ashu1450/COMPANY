import { Avatar } from '@material-ui/core'
import React from 'react';
import './Profile.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import *as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  

function Profile() {
  
    return (
      <div className="profile-page">
        <div className = "Profile">
            <div className = "body">
            <div className ="Heading">
            <Avatar style={{ height: '2.7vw', width: '2.7vw' }} />
            <ReactBootStrap.Nav.Link style={{paddingLeft: 13, textDecoration: 'none'}} as={Link} to="/MyProfile"><p className="text">My profile</p></ReactBootStrap.Nav.Link> 
            
            </div>
            <hr/>

              <div className="SideBarItem1">
                 <SettingsIcon className = "icon1"/>
                 <ReactBootStrap.Nav.Link style={{paddingLeft: 13, textDecoration: 'none'}} as={Link} to="/Setting"><p className="text">Setting</p></ReactBootStrap.Nav.Link>
              </div><hr/>
              <div className="SideBarItem1">
                 <LibraryBooksIcon className = "icon1"/>
                 <ReactBootStrap.Nav.Link style={{paddingLeft: 13, textDecoration: 'none'}} as={Link} to="/"> <p className="text">Your Content</p></ReactBootStrap.Nav.Link>
              </div><hr/>
              <div className="SideBarItem1">
                 <ExitToAppIcon className = "icon1"/>
                 <ReactBootStrap.Nav.Link style={{paddingLeft: 13, textDecoration: 'none'}} as={Link} to="/LogOut"><p className="text">Log Out</p></ReactBootStrap.Nav.Link>
              </div>
              </div>
              
        </div>

        <div className="left-body">
        </div>
        </div>
      
    );
}

export default Profile
