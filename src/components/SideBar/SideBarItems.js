import React from 'react'
import { Link } from 'react-router-dom';
import './SideBarItems.css';
import {Nav} from "react-bootstrap"

function SideBarItems() {
    return (
        <div className="SideBarItems">
           <h4> Quick Checkout....</h4>
           <hr/>
            <div className="SideBarItem">
               
             <img src="placement history.jpg" alt="" height="50" width="50"/>
              
             <Link  to="/"><p>Placement History</p> </Link> 
            </div> 
            <div className="SideBarItem">
                <img src="placement history.jpg" alt=""  height="50" width="50"/>
                <Link  to="/"><p>Placement Cell</p></Link>
            </div>
            <div className="SideBarItem">
                <img src="placement history.jpg" alt=""  height="50" width="50"/>
                <Link  to="/"> <p>College_Curriculum</p></Link>
            </div>
            <div className="SideBarItem">
                <img src="placement history.jpg" alt=""  height="50" width="50"/>
                <Link  to="/"><p>Clubs</p></Link>
            </div>

             {/* <div class="sidenav">
               
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/clients">Clients</Link>
                <Link href="/contact">Contact</Link>
            </div>
             */}
        </div>
    )
}

export default SideBarItems
