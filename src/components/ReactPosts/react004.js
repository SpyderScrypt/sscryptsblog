import React, { Component } from "react";
import { firestore } from "../../firebase/firebase";
import { Helmet } from "react-helmet";

export default class react004 extends Component {
  componentDidMount = async () => {
    const doc = await firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .get();

    let allPostPageCount = doc.data().react004;

    firestore
      .collection("posts")
      .doc("R6yws2OQAuVNtF36PQgH")
      .update({
        react004: allPostPageCount + 1
      });
  };
  render() {
    return (
      <div className="inner-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Reusable component in react to check internet connection
          </title>
          <meta
            name="description"
            content="Create a reusable component in React to check internet connection"
          />
          <meta
            name="keywords"
            cpntent="react,echarts,javascript,react.js"
          />
        </Helmet>
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

        <p className="content1">
          In this tutorial, we will make a reusable component to check internet
          connection status in react.
        </p>

        <p className="seperator1">...</p>

        <p className="content1">
          First, let us understand how we can detect internet connection status
          in a browser.
          <br />
          <br />
          For that, we will use “navigator.online” property of the window. This
          property returns true or false depending on your internet status.
          <br />
          <br />
          To try it, just open developer tools and inside console type
          “navigator.online” , it will return true or false.
        </p>

        <div className="img-one">
          <img src="/images/react004-01.png" width="100%" alt="" />
        </div>

        <p className="content1">
          Now let's start making our reusable component
          <br />
          <br />
          First Step -
          <br />
          Create a new react app using create-react-app command
          <br />
          eg- create-react-app internet-check
          <br />
          Second Step-
          <br />
          After create new react app, open it in your code editor and inside src
          folder create a new folder called components and inside components
          create another folder called internetCheck , again inside
          internetCheck folder create a js file for our component called
          internetCheck.js
          <br />
          src → components → internetCheck →internetCheck.js
          <br />
          <br />
          Now copy following code in internetCheck.js
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
              import React from "react";
              const InternetCheck = ({ message, style }) => {
              // Create a variable called internetConnection and assign it the value of navigator.online,
              // you can also do it in componentDidMount by using class component
              var internetConnection = navigator.onLine;
              return (
              <div>
               {/* Conditionally render our "p" tag based on internetConnection   variable */}
               {!internetConnection && (
                <p
                 style={
                 style || {
                 backgroundColor: "red",
                 color: "#000",
                 textAlign: "center"
                  }
                 }
                >
              {message || "No Internet"}
                </p>
              )}
              </div>
              );
              };
              export default InternetCheck;
              `}
            </code>
          </pre>
        </div>

        <p className="content1">
          Here we are taking props called message and style and inside “p” tag
          we check if style and message are passed as props, if not, we have
          some default message and style.
          <br />
          <br />
          Step 3-
          <br />
          Inside app.js inside our project src folder, we use our component by
          first importing it and then using it,
          <br />
          First, we will use our code without passing any props
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
              import React, { Component } from “react”;
              import InternetCheck from “./components/InternetCheck/InternetCheck”;
              class App extends Component {
                render() {
                  return (
                    <div className=”App”>
                      <InternetCheck />
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
          Here if our internet status is offline, we get below output (Please
          disconnect internet to get output)
        </p>

        <div className="img-one">
          <img src="/images/react004-02.png" width="100%" alt="" />
        </div>

        <p className="content1">Now we will pass props i.e message and style</p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
              import React, { Component } from “react”;
              import InternetCheck from “./components/InternetCheck/InternetCheck”;
              class App extends Component {
                render() {
                  return (
                    <div className=”App”>
                      <InternetCheck
                        message=”No Connection”
                        style={{
                        color: “#fff”,
                        backgroundColor: “#000”,
                        textAlign: “center”
                        }}
                      />
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
          Again if our internet status is offline we get below output
        </p>

        <div className="img-one">
          <img src="/images/react004-03.png" width="100%" alt="" />
        </div>

        <p className="content1">
          Hope you get how to check internet status and make basic reusable
          component out of it.
          <br />
          <br />
          For more details on navigator.onLine -
          <br />
          https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/Online_and_offline_events
        </p>
        <ins
          class="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-fb+5w+4e-db+86"
          data-ad-client="ca-pub-1381796141216228"
          data-ad-slot="6474438773"
        />
      </div>
    );
  }
}
