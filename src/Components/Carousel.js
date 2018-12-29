import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class PhotoCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
          <p className="legend">Renovations</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          <p className="legend">Custom Homes</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80" />
          <p className="legend">Kitchen Tiling</p>
        </div>
      </Carousel>
    );
  }
}

export default PhotoCarousel;
