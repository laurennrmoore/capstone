import React, {Component} from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import './play.css';

import { BiHeartCircle } from "react-icons/bi";
import chilidish from '../img/body-img/chilidish.jpg';
import chiliver from '../img/body-img/chiliver.jpg';
import chilidinner from '../img/body-img/chilidinner.jpg';
import icecreamcups from '../img/body-img/icecreamcups.jpg';
import icecreamtruck from '../img/body-img/icecreamtruck.jpg';
import greatericecream from '../img/body-img/greatericecream.jpg';

import Shopcincyshirts from '../img/body-img/Shopcincyshirts.jpg';
import ShopLaneKate from '../img/body-img/ShopLaneKate.jpg';
import Shopoutlet2 from '../img/body-img/Shopoutlet2.jpg';
import shopping from '../img/body-img/shopping.jpg';

import playFlyer2 from '../img/body-img/playFlyer2.jpg';
import playRedStadium from '../img/body-img/playRedStadium.jpg';
import playriverboat from '../img/body-img/playriverboat.jpg';
import playGhostTour from '../img/body-img/playGhostTour.jpg';

import cheese from '../img/body-img/cheese.png';
import plate from '../img/body-img/plate.png';
import bbq from '../img/body-img/bbq.png';

import daffodil from '../img/body-img/daffodil.png';
import queencity from '../img/body-img/queencity.jpg';
import silhouetteShopping from '../img/body-img/silhouetteShopping.png';
import summerShopping from '../img/body-img/summerShopping.png';
import butterfly from '../img/body-img/butterfly.jpg';
import butterflies from '../img/body-img/butterflies.jpg';
import butterflyside from '../img/body-img/butterflyside.png';
import swirl from '../img/body-img/swirl.png';


import ornament from '../img/body-img/ornament.png';
import flora from '../img/body-img/flora.png';
import spring from '../img/body-img/spring.png';
import tree from '../img/body-img/tree.png';
import orchids from '../img/body-img/orchids.png';
import ferriswheel from '../img/body-img/ferriswheel.png';
import abstract from '../img/body-img/abstract.png';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default class Play extends Component{
  render(){
    return (
     <div className="body-container" data-aos="fade-right"> 

       <div className="border-container">
         <div className="border-bg-text">
        <h1 className="queenCity"><BiHeartCircle color="grey" width="1.8em"></BiHeartCircle>
        The Queen city. Be sure to <span> eat, shop & play</span><BiHeartCircle color="grey" width="1.8em"></BiHeartCircle></h1>
        </div>
       </div> 

          <div className="eat-container">
            <img className="body-img" id="swirl" data-aos="fade-left" alt='' src= { swirl} />
            <h1 className="easy-header" data-aos="fade-left"><br/>EAT</h1>
            <p>Enjoy a traditional lei greeting and experience a luau on Oahu. Hosted by Chief Sielu, Original World Fire Knife Dance Champion, this event provides the ideal opportunity to immerse yourself in island culture. Watch a Polynesian show, learn headband weaving, or take a hula lesson, before indulging in a Hawaiian feast, including pineapple glazed chicken and kalua pork. Upgrade to include priority access and convenient pickup, for a hassle-free experience.</p>

               <img className="body-img" id="A" alt='' src= { chilidish } />
               <img className="body-img" id="B" alt='' src= { chiliver } />
               <img className="body-img" id="C" alt='' src= { icecreamcups } />
               <img className="body-img" id="D" alt='' src= { icecreamtruck } />
               <img className="body-img" id="E" alt='' src= { greatericecream  } />
               <img className="body-img" id="cheese" alt='' src= { cheese } />
               <img className="body-img" id="plate" alt='' src= { plate } />
               <img className="body-img" id="bbq" alt='' src= { bbq } />


          </div>

          <div className="shop-container">
             
          <div data-aos="fade-right">
               <img className="body-img" id="butterflyside" alt='' src= { butterflyside } />
               <img className="body-img" id="butterflyside2" alt='' src= { butterflyside } />
               <img className="body-img" id="butterflyside3" alt='' src= { butterflyside } />
          </div>
          
          <div data-aos="fade-left">
          <h1 data-aos="fade-up">SHOP</h1>
          <p>Enjoy a traditional lei greeting and experience a luau on Oahu. Hosted by Chief Sielu, Original World Fire Knife Dance Champion, this event provides the ideal opportunity to immerse yourself in island culture. Watch a Polynesian show, learn headband weaving, or take a hula lesson, before indulging in a Hawaiian feast, including pineapple glazed chicken and kalua pork. Upgrade to include priority access and convenient pickup, for a hassle-free experience.</p><br/>

               <img className="body-img" id="F" alt='' src= { Shopcincyshirts } />
               <img className="body-img" id="G" alt='' src= { ShopLaneKate } />
               <img className="body-img" id="H" alt='' src= { Shopoutlet2 } />
               <img className="body-img" id="I" alt='' src= { shopping } />
          </div>
               <div className="graphics" id="graphics">
                   <img className="body-img" id="queencity" alt='' src= { queencity } />
                   <img className="body-img" id="daffodil" alt='' src= { daffodil } />
                   <img className="body-img" id="silhouetteShopping" alt='' src= { silhouetteShopping } />
                   <img className="body-img" id="summerShopping" alt='' src= { summerShopping } />
                   <img className="body-img" id="butterfly" alt='' src= { butterfly } />
                   <img className="body-img" id="butterflies" alt='' src= { butterflies } />
                  
               </div>
              

          </div>
      <div data-aos="fade-left">
          <div className="play-container">
          <div className="flowerstext" data-aos="fade-left">
               <img className="body-img" id="abstract" alt='' src= { abstract } />
               <img className="body-img" id="abstract" alt='' src= { abstract } />
               <img className="body-img" id="abstract" alt='' src= { abstract } />
         </div>
               <h1 className="play-header" data-aos="fade-up">PLAY</h1>

               <p>Enjoy a traditional let greeting and experience a luau on Oahu. 
               Hosted by Chief Sielu, Original World Fire Knife Dance Champion, this event provides 
               the ideal opportunity to immerse yourself in island culture. Watch a Polynesian show, 
               learn headband weaving, or take a hula lesson, before indulging in a Hawaiian feast, 
               including pineapple glazed chicken and kalua pork. Upgrade to include priority access 
               and convenient pickup, for a hassle-free experience.
              </p>

               <img className="body-img" id="ornament" alt='' src= { ornament } />
               <img className="body-img" id="J" alt='' src= { playFlyer2 } />
               <img className="body-img" id="K" alt='' src= { playGhostTour } />
               <img className="body-img" id="L" alt='' src= { playriverboat } />
               <img className="body-img" id="flora" alt='' src= { flora } />
               <img className="body-img" id="orchids" alt='' src= { orchids } />
               <img className="body-img" id="M" alt='' src= { playRedStadium } />
               <img className="body-img" id="ferriswheel" alt='' src= { ferriswheel } />
               <img className="body-img" id="tree" alt='' src= { tree } />
               <img className="body-img" id="spring" alt='' src= { spring } />
        </div>


  
               
               
               

          </div>

        
        
        </div>


    )}
};


