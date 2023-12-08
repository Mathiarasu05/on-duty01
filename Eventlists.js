import React, { useState } from "react";
import './Eventlistsstyle.css';
import './Homestyle.css';
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaBars,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Eventlists({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/Home",
            name: "Home",
            icon: <FaUserAlt />
        },
        {
            path: "/Dashbordapp",
            name: "Dashbord",
            icon: <FaRegChartBar />
        },
        {
            path: "/Requestform",
            name: "On Duty Requisition External-Event",
            icon: <FaCommentAlt />
        },
        {
            path: "/Internalevent",
            name: "On Duty Requisition Internal Event",
            icon: <FaCommentAlt />
        },
        {
            path: "/Eventlists",
            name: "Event-Lists",
            icon: <FaTh />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Portal</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
      
            <h2 className="fffs">Events </h2>
            
            <div className="events">
            
                <h1>Refer<br />knowafest for Events</h1>
                <button className="eventlink"><a href="https://www.knowafest.com/explore/events#">click Here</a></button>
                <div className="events">
                    <h1>Upcoming Events...!</h1>
                    <button className="eventlink"><a href="https://www.knowafest.com/explore/upcomingfests">click Here</a></button>
                </div>
                
            </div>
            
        </div>
    );
};

export default Eventlists;