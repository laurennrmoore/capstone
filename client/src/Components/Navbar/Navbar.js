import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import './navigation.css';







const Navbar = () => {
    // const handleClick = e => {
    //   e.preventDefault();
    //   document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
    //   document.getElementById('mainListDiv').classList.toggle('show_list');
    //   $('#mainListDiv').fadeIn();
    // }


    
    return (
        <header>
        <nav className= "navlinks">
            <div className="container">
                <div className="logo" id="title">
                    <NavLink style={{textDecoration: 'none'}}to="/" id="header">Cincinnati Tourism Group- Spring 2021</NavLink>
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className= "navlinks">
                    <li><NavLink style={{textDecoration: 'none'}}to="/Covid">Covid</NavLink></li>
                    <li><NavLink style={{textDecoration: 'none'}} to="/attractions">Attractions</NavLink></li>
                     <li><NavLink style={{textDecoration: 'none'}}to="/About">About</NavLink></li>
                    {/* <li><NavLink style={{textDecoration: 'none'}}to="/Our Story">Our Story</NavLink></li> */}
                    <li><NavLink style={{textDecoration: 'none'}}to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
             </div>
           </nav>
        </header>
    )
};

<Navbar fixed="top" />


export default Navbar