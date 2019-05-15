import React, { Component } from "react";
import "./stylesheet/NavbarStyle.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <div className="logoContainer" onClick={this.clickHandler}>
          <Link to="/">
            <img src="/images/spider.png" alt="" height="100%" width="100%" />
          </Link>
        </div>
        <div className="linksContainer">
          {this.props.title.map(title => {
            return (
              <p key={title.title} className="linksContainer">
                <Link
                  to={`${process.env.PUBLIC_URL}/${title.link}`}
                  className="links"
                >
                  {title.title}
                </Link>
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}
