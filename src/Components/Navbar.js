import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const styles = {};

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand" to="/">
          ND Home Inprovment
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to={"/service"}>
                Service
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/gallery"}>
                Gallery
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/testimonial"}>
                Testimonial
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
