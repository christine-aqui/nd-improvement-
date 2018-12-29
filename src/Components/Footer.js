import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="pv4 ph3 ph5-m ph6-l mid-gray text-white bg-primary">
        <h1>Noel DeAgrella</h1>
        <a href="mailto:" className="link b f3 f2-ns dim black-70 lh-solid">
          hello@email.com
        </a>
        <p href="mailto:" className="link b f3 f2-ns dim black-70 lh-solid">
          Number: 647-825-9064
        </p>
        <div>
          <small className="f6 db tc">
            © 2019 <b className="ttu">ND Home Inprovment</b>., All Rights
            Reserved
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
