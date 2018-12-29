import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/service" component={Service} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
