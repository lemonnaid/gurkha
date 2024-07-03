import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';
import * as FaIcon from "react-icons/fa";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Sidebar({children}) {
    const menuItem = [
        { title: "Digital Marketing", path: "/dm" },
        { title: "Graphic Design", path: "/design" },
        { title: "Web Development", path: "/webdev" },
        { title: "Search Engine Optimization", path: "/seo" }
    ];

    const socialIcons = [
        { icon: <FaIcon.FaLinkedin/>, path: 'https://www.linkedin.com' },
        { icon: <FaIcon.FaFacebookSquare/>, path: 'https://www.facebook.com' },
        { icon: <FaIcon.FaTwitterSquare/>, path: 'https://www.twitter.com' }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='container'>
            <div className="bars" onClick={toggle}>
                {isOpen ? <FaTimes/> : <FaBars />}
            </div>
            <div className="sidebar" style={{display: isOpen ? "block" : ""}}>
                <div className="logo-container">
                    <img src={logo} className='logo' alt="Logo"/>
                    <h1>GURKHA TECHNOLOGY</h1>
                </div>
                <div className='menu'>
                    <Link to='/' className='menu-title'>Our Services</Link>
                    <div>
                        {menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" onClick={toggle}>
                                <div className='link-title'>
                                    {item.title}
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className='social-icons'>
                    {socialIcons.map((social, index) => (
                        <a href={social.path} key={index} className="social-icon" target="_blank" rel="noopener noreferrer">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
}
