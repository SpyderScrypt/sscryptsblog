import React, { Component } from "react";

export default class react001 extends Component {
  render() {
    return (
      <div className="inner-container">
        <p className="title"> {this.props.postDetails.title}</p>
        <p className="date">Published on: {this.props.postDetails.date}</p>
        <p className="tags">
          Tags :
          {this.props.postDetails.tags.map((tag, index) => {
            return (
              <span key={index}>
                <span className="tag">{tag}</span>
                <span> </span>
              </span>
            );
          })}
        </p>

        <div className="img-one">
          <img src="/images/react001-01.png" alt="" />
        </div>
        <p className="content1">
          In this tutorial, we will understand 3 different ways to use SVG in
          react app.
        </p>
        <p className="seperator1">...</p>
        <p className="content1">
          First way → First way is pretty simple, the way react does it by
          importing SVG and then using it in an img tag. When we create a react
          app with create-react-app, we get basic app setup which has SVG image
          rotating, we can see in App.js how it is imported
        </p>
        <div className="code-block">
          <pre>
            <code className="code">
              {`
import React, { Component } from ‘react’;
// First import svg
import logo from ‘./logo.svg’;
import ‘./App.css’;
class App extends Component {
 render() {
  return (
   <div className=”App”>
    <header className=”App-header”>
    {/* Use imported SVG directly inside image tag */}
    <img src={logo} className=”App-logo” alt=”logo” />
    </header>
   </div>
  );
 }
}
export default App;`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Second Way → Second way need some editing in the SVG file, first open
          SVG in some text editor like notepad, for this tutorial we will use
          SVG from below link
          <br />
          <a href="https://pixabay.com/vectors/animal-butterfly-chromatic-colorful-1769728/">
            Link To SVG
          </a>
          <br />
          (You can draw a custom image from adobe illustrator for this) after
          opening SVG in notepad, copy all code and paste it inside react render
          methods return like below code. After pasting code, we have to edit
          SVG code for JSX format. To do so first remove XML and doctype tag
          which looks like this
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
<?xml version=”1.0" encoding=”UTF-8"?>
<!DOCTYPE svg PUBLIC ‘-//W3C//DTD SVG 1.1//EN’ ‘http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Then replace all xml:space and other tags to camel case format like
          xmlSpace. To do this you can also use online tools to convert SVG to
          JSX but I would prefer it to do manually.
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
import React, { Component } from “react”;
// First import svg
import “./App.css”;
class App extends Component {
 render() {
  return (
   <svg
   enable-background=”new -47 -32.3 2494 1714.6"
   version=”1.1"
   viewBox="-47 -32.3 2494 1714.6"
   xmlSpace="preserve"
   xmlns="http://www.w3.org/2000/svg"
  >
  <g stroke-width=".3">
  <path
  d="m2353 0h20.1c4.7 5.2 9.4 10.5 12.6 16.7 9.2 17.1 12 36.8 13.9    55.9v34.9c-2.6 35.7-9.8
  stroke="#fff"
  ... SVG CODE
  />
  </g>
</svg>
);
}
}
export default App;
              `}
            </code>
          </pre>
        </div>

        <p className="content1">
          Third way → We can also use SVG inside object tag like below code
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
import React, { Component } from “react”;
import “./App.css”;
class App extends Component {
render() {
 return (
  <div>
  <object
  id=”svgObject”
  // Import svg below
  data={require(“./logo.svg”)}
  type=”image/svg+xml”
 >
  {/* Alternative text if svg is not supported byu browser */}
 Your browser doesn’t support SVG
  </object>
 </div>
 );
}
}
export default App;
                `}
            </code>
          </pre>
        </div>
        <p className="content1">
          Now we have learned all 3 ways to use SVG in react. If you know some
          other ways then please share it in the comments section.
        </p>
      </div>
    );
  }
}
