import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Play from '../Components/Play';

import AdiscoveredPlantText from '../img/carousel-img/AdiscoveredPlantText.jpg';
import Bconey from '../img/carousel-img/Bconey.jpg';
import Ccincinnatioh from '../img/carousel-img/Ccincinnatioh.jpg';
import Suspensionbridge from '../img/carousel-img/Suspensionbridge.jpg';
import DfountainSquare from '../img/carousel-img/DfountainSquare.jpg';
import Waterlights from '../img/carousel-img/Waterlights.jpg';
import SkyStar from '../img/carousel-img/SkyStar.jpg';
import ESkywheel  from '../img/carousel-img/ESkywheel.jpg';
import FShopKwmall from '../img/carousel-img/FShopkwmall.jpg';
import shopCincyPremiumMall from '../img/carousel-img/shopCincyPremiumMall.jpg';
import Gbigcincy from '../img/carousel-img/Gbigcincy.jpg';
import HeatAbigailStreet from '../img/carousel-img/HeatAbigailStreet.png';
import IEden2 from '../img/carousel-img/IEden2.jpg';
import JLion from '../img/carousel-img/JLion.jpg';
import KSkydiving from '../img/carousel-img/KSkydiving.jpg';


import AOS from 'aos';
import 'aos/dist/aos.css';

class CarouselNew extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 3000
        });
      }

    render() {
        return (
            
          <div>
          <Carousel data-aos="fade-right">

            <div>
                <img alt='' src= { AdiscoveredPlantText } />
                <p className="legend"></p>
            </div>
            

            <div>
              <div className="carousel-container">
                 <img alt='image' src= { Bconey } />
                     <p className="legend"> Coney Island</p>
            </div>
               
            </div>


            <div>
                <img alt='image' src= { Ccincinnatioh } />
                <p className="legend">Cincinnati-Covington Bridge was the longest suspension bridge in the world</p>
            </div>

            <div>
                <img alt='image' src= { Suspensionbridge } />
                <p className="legend">Cincinnati-Covington Bridge</p>
            </div>

            <div>
                <img alt='image' src= { DfountainSquare } />
                <p className="legend">Fountain Square</p>
            </div>

            <div>
                <img alt='image' src= { Waterlights } />
                <p className="legend">Smale River front park</p>
            </div>

            <div>
                <img alt='image' src= { SkyStar } />
                <p className="legend">Sky Star</p>
            </div>


            <div>
                <img alt='image' src= { ESkywheel } />
                <p className="legend">Sky Star</p>
            </div>

            <div>
                <img alt='image' src= { FShopKwmall } />
                <p className="legend">Kenwood Mall</p>
            </div>

            <div>
                <img alt='image' src= { shopCincyPremiumMall } />
                <p className="legend">Premium Outlet</p>
            </div>

            
            <div>
                <img alt='image' src= { Gbigcincy } />
                <p className="legend">Ohio River</p>
            </div>

            <div>
                <img alt='image' src= { HeatAbigailStreet } />
                <p className="legend">Abigail Street</p>
            </div>

            <div>
                <img alt='image' src= { IEden2 } />
                <p className="legend">Eden Park</p>
            </div>

            <div>
                <img alt='image' src= { JLion } />
                <p className="legend">Cincinnati Zoo</p>
            </div>

            <div>
                <img alt='image' src= { KSkydiving } />
                <p className="legend">Sky diving in Cincinnati</p>
            </div>

            
        
           
             </Carousel>
                 <div data-aos="fade-right"><Play /></div>
        </div>    
        );
    }
}
export default CarouselNew