import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./stylesheet/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footerContainer" id="footer">
        <div className="contactContainer">
          <div className="contactField">
            <i class="fa fa-envelope fa-2x" aria-hidden="true" />
            <p className="contactText">spiderscrypt@gmail.com</p>
          </div>
          <div className="contactField">
            <i class="fa fa-phone-square fa-2x" aria-hidden="true" />

            <p className="contactText">7021889082</p>
          </div>
          <div className="contactField">
            <i class="fa fa-instagram fa-2x" aria-hidden="true" />

            <a
              className="instagramLink"
              href="https://www.instagram.com/spiderscrypt"
            >
              <p className="contactText">spiderscrypt</p>
            </a>
          </div>
        </div>
        <div className="aboutContainer">
          <p>About Us -</p>
          <p>
            We help clients bring their product concepts to life. Whether you’re
            a startup creating a proof of concept to help with funding or just
            owns a business that needs a website or just a computer science
            student that need help with their project and project idea.
          </p>
        </div>
      </div>
    );
  }
}
