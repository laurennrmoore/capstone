import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import Cincinnati from "../img/footer-img/KrogerLogo.png";
import CBell from "../img/footer-img/CincinnatiBell-logo.png";
import FifthThird from "../img/footer-img/fifththirdbanklogo.png";
import Kao from "../img/footer-img/Kao-corp-logo.png";
import PandG from "../img/footer-img/PG.png";
import UC from "../img/footer-img/ucwobg.jpg";
import Macy from "../img/footer-img/Macy-logo.jpg";
import CincinnatiRed from "../img/footer-img/cincinRed.jpg";
import cincyZoo from "../img/footer-img/cincyZoo.png";
import Skylinechili from "../img/footer-img/skyline_logo.png";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { MdFavorite} from "react-icons/md";
import orangeLogofinal from "../img/carousel-img/orangeLogofinal.jpg";




const Footer = () => (
   <div className="footer-container">
   <div className="container" id="sponsor-container">
           <img className="sponsor-logo" alt='' src= { Cincinnati } /> 
           <img className="sponsor-logo" alt='' src= { CBell } /> 
           <img className="sponsor-logo" alt='' src= { FifthThird } /> 
           <img className="sponsor-logo" alt='' src= { Kao } />
           <img className="sponsor-logo" alt='' src= { Macy } />  
           <img className="sponsor-logo" alt='' src= { PandG } /> 
           <img className="sponsor-logo" alt='' src= { UC } /> 
           <img className="sponsor-logo" alt='' src= { CincinnatiRed } /> 
           <img className="sponsor-logo" alt='' src= { cincyZoo } />
           <img className="sponsor-logo" alt='' src= { Skylinechili } />
       
</div>
        <h2 id="creators">CREATORS</h2>
    <div className="grid-container">
      <div className='name1'>
            <h4 className="Lauren">Lauren Moore </h4>
            <a id="Lauren" href="https://www.linkedin.com/in/lauren-m-a233b321/"><TiSocialLinkedin color="blue" size="3em"></TiSocialLinkedin></a>
      </div> 
      
      <div className='name2'>
            <h4 className='Marquis'>Marquis Jarman</h4>
            <a id="Marquis" href="https://www.linkedin.com/in/marquis-jarman-9a1113210//"><TiSocialLinkedin color="blue" size="3em" ></TiSocialLinkedin></a>
      </div>  

      <div className='name3'>     
            <h4 className='Mona'>Mona Jira</h4>
            <a id="Mona" href="https://www.linkedin.com/in/mona-jiravirotekul-26347768/"><TiSocialLinkedin color="blue" size="3em" ></TiSocialLinkedin></a>
    </div>
      </div> 
            <p id="footer-text">We devoted our time and <MdFavorite color="red" size="1em"></MdFavorite>
            hearts to create the content of our beloved city.
             We hope you guys find that it's useful infomation when you travel in our hometown. 
             Let us know.<TiSocialFacebookCircular color="blue" size="1.8em"></TiSocialFacebookCircular></p>
             <Link to="/"><img className="orangeLogofinal" alt='' src= { orangeLogofinal } /></Link>
      
     
      </div>
  
  );
  


export default Footer;
