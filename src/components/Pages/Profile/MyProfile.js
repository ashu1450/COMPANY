import React from 'react';
import NavBar from '../../NavBar';
import Profile from './Profile';
import './MyProfile.css';
import { Avatar } from '@material-ui/core'
import *as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';


import logo from './images/pro.png';
console.log(logo);


function MyProfile() {
    return (
      <>
        <div className="container1">
            <div>
                <Profile />
            </div>

            <div className="myProfile">
            <Avatar style={{ height: '7.7vw', width: '7.7vw', position:'relative',left:'20px',bottom:'2px' }} />


         <ReactBootStrap.Nav.Link as={Link} to="/" className="add-pro col" eventKey="link-0">Add profile credential</ReactBootStrap.Nav.Link>
          <div className="navbar navbar-expand-lg  mypro">
 <ReactBootStrap.Nav.Link as={Link} to="/" className="add-pro col" eventKey="link-0">followers</ReactBootStrap.Nav.Link>

 <ReactBootStrap.Nav.Link as={Link} to="/" className="add-pro col fol" eventKey="link-0">following</ReactBootStrap.Nav.Link>
 </div>
            <ReactBootStrap.Form className="form-des">
            <ReactBootStrap.Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <ReactBootStrap.Form.Label as={Link} to="/MyProfile" className="prof col" eventKey="link-1" >Write a description about yourself</ReactBootStrap.Form.Label>
    <ReactBootStrap.Form.Control as="textarea" rows={3} />
  </ReactBootStrap.Form.Group>
</ReactBootStrap.Form>

< ReactBootStrap.Button as={Link} to="/" className="btn btn-primary mx-2" type="submit">Update</ReactBootStrap.Button>
  < ReactBootStrap.Button as={Link} to="/MyProfile" className="btn btn-secondary mx-2" type="submit">Cancel</ReactBootStrap.Button>
  <hr/>

            <div className="navbar navbar-expand-lg  mypro">
            <ReactBootStrap.Nav.Link as={Link} to="/MyProfile" className="prof col" eventKey="link-2">Profile</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/MyProfile" className="ans col" eventKey="link-3">Answers</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/MyProfile" className="ques col" eventKey="link-4">Questions</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/MyProfile" className="share col" eventKey="link-5">Shares</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/MyProfile" className="pos col" eventKey="link-6">Posts</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/MyProfile" className="topic col " eventKey="link-7">Archives</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/MyProfile" className="edit col" eventKey="link-8">Edits</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/MyProfile" className="act col" eventKey="link-9">Activity</ReactBootStrap.Nav.Link>

</div>
<img src={logo} alt="Logo" className="img" style={{ height: '7.7vw', width: '7.7vw', margin:'5rem 0 5rem 24rem',position:'relative',bottom:'30px' }} />
<div class="container">
  <div class="center">
   < ReactBootStrap.Button as={Link} to="/" className="button btn btn-primary" type="submit">Answer Question</ReactBootStrap.Button>
   </div>

   </div>

     </div>

        </div>

        </>
    );
}
export default MyProfile;
