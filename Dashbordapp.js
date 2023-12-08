import React, { useState } from "react";
import './Dashbordappstyle.css';
import './Homestyle.css';
import { AiFillFolderAdd } from "react-icons/ai";
import { FcBarChart} from "react-icons/fc";
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaBars,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Dashbordapp ({children}){
    const[num, setNum] = useState(0);

    const incNum = () =>
    {
        setNum(num + 1);
    };
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Home",
            name:"Home",
            icon:<FaUserAlt/>
        },
        {
            path:"/Dashbordapp",
            name:"Dashbord",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Requestform",
            name:"On Duty Requisition External-Event",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Internalevent",
            name:"On Duty Requisition Internal Event",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Eventlists",
            name:"Event-Lists",
            icon:<FaTh/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Portal</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
           <div className="attenevents">
              <h3>Event Attend So far <FcBarChart/><br/><br/>0</h3>
           </div>
           <div className="attened">
              <h3>Approved Od's <FcBarChart/><br/><br/>0</h3>
           </div>
           <div className="att">
              <h3>Pending Od's <FcBarChart/><br/><br/>0</h3>
           </div>
           <h2 className="titts">Dashbord</h2>
           <div className="numberone">
             <h3>Upload certificate<AiFillFolderAdd/></h3><br></br>
             <h4>{num}</h4>
             <button className="numberes" onClick={incNum}><a href="http://localhost:3000/">click Here</a></button>
           </div>
           
        </div>
        
    );
};
export default Dashbordapp;