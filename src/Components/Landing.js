import React, { Component } from "react";
import Carousel from "./Carousel";
import { Animated } from "react-animated-css";

class Landing extends Component {
  render() {
    return (
      <div>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDelay={500}
        >
          <h4>With over 30 years of industry experience.</h4>
        </Animated>
        <Carousel />
        <section class="service-display">
          <h4>Services Provided</h4>
          <ul class="service-list">
            <li>Custom Homes</li>
            <li>Interior/Exterior Painting</li>
            <li>Renovations</li>
            <li>Kitchen/Bath Tiling</li>
            <li>Tile Work</li>
            <li>Finish Carpentry</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Landing;
