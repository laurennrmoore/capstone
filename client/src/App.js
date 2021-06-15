import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./index.css";
import './carousel.css';
import ContactForm from './pages/ContactForm';
import Footer from './Components/Footer';
import About from './pages/About';
import Covid from './Components/Covid';
import CarouselNew from './pages/carouselnew';
import Attractions from './pages/attractions';

// import orangeLogoFav from "../img/carousel-img/orangeLogoFav.jpg";



export default class App extends Component {
  render() {
    return (
      
      <div>
      <BrowserRouter>
      <Navbar />
      {/* <CarouselNew/>      */}
      {/* <Route exact path='/' component= { DemoCarousel } /> */}
      <Route path='/about' component= { About } />
      <Route path='/Covid' component= { Covid } />
      <Route path='/new' component= { CarouselNew } />
      <Route path='/contact' component= { ContactForm }/>
      <Route path= '/attractions' component= { Attractions }/>
      <Footer/>
      </BrowserRouter>
      </div>
    )
  }
}