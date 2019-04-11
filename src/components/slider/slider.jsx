import React, { Component } from 'react'
import "./slider.scss";

import Slide from "../slide/slide";

let interval;
export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/784707/pexels-photo-784707.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
        "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      ],
      currentIndex: 0,
      translateValue:0
    };
  }

  goToNextSlide = () => {
    //expensive, find other way
    let newImageArray = this.state.images.concat(this.state.images[this.state.currentIndex]);
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth()),
      images: newImageArray
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  timer = () => {
   interval = setInterval(this.goToNextSlide, 2000);
  }

  componentWillMount = () => {
    this.timer()
  }
  
  componentWillUnmount = () =>{
    clearInterval(interval)
  }

  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            { 
              this.state.images.map((image, i) => (
                <Slide key={i} image={image}/>
              ))
            }
        </div>

      </div>
    );
  }
}
