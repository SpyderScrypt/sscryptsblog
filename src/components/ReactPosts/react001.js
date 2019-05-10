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
              <>
                <span className="tag" key={index}>
                  {tag}
                </span>
                <span> </span>
              </>
            );
          })}
        </p>

        <div className="img-one">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
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
