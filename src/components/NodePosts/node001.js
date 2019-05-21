import React, { Component } from "react";

export default class node001 extends Component {
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

        <p className="content1">
          In this tutorial, we will learn how to send pdf files from node to
          react end for viewing and downloading.
        </p>
        <div className="img-one">
          <img width="100%" src="/images/node001-01.png" alt="" />
        </div>
        <p className="seperator1">...</p>
        <ins
          class="adsbygoogle"
          style={{ display: "inline-block", width: "468px", height: "60px" }}
          data-ad-client="ca-pub-1381796141216228"
          data-ad-slot="9686871571"
        />
        <p className="content1">
          <br />
          Step 1 →
          <br />
          First lets make a server using node and express to serve a pdf file.
          <br />
          Create a folder called server and inside that folder “run npm” init to
          create package.json file.
          <br />
          Then lets install basic dependencies needed by running command
          <br />
          npm install express cors
          <br />
          cors package is used here to avoid cors related errors
          <br />
          Then create a file called app.js and keep it blank for now.
        </p>

        <p className="content1">
          <br />
          Step 2 →
          <br />
          Create a folder called public and inside that folder put a pdf file
          which you want to serve on react end (Note that this pdf file can be
          dynamic but for this tutorial purpose we will use static pdf file)
        </p>

        <p className="content1">
          <br />
          Step 3 →
          <br />
          Then open previously created app.js file and put below content in it
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 4000;
const cors = require("cors");
app.use(cors());
// Pdf route that will serve pdf
app.get("/pdf", (req, res) => {
    var file = fs.createReadStream("./public/sample.pdf");
    file.pipe(res);
});
app.listen(port, () => {
    console.log("Server listining on port ", port);
});`}
            </code>
          </pre>
        </div>

        <p className="content1">
          Here we are serving pdf file stored in public folder as a stream.
          <br />
          Now run the server with a command
          <br />
          node app.js
          <br />
          <br />
          Step 4 →
          <br />
          Now let's create our react end of the app
          <br />
          First run below command to create a basic react app
          <br />
          create-react-app client
          <br />
          (You can run this command inside server folder or outside server
          folder)
          <br />
          Lets install package axios (Below this tutorial there is fetch
          implementation of the same)
          <br />
          npm i axois
          <br />
          <br />
          Step 5 →
          <br />
          Inside client folder →src →App.js
          <br />
          Remove all code in app.js and put below code in it
        </p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
import React, {
    Component
} from "react";
import axios from "axios";
class App extends Component {
    viewHandler = async () => {
        axios(\`http://localhost:4000/pdf\`, {
                method: "GET",
                responseType: "blob" 
//Force to receive data in a Blob Format
            })
            .then(response => {
                //Create a Blob from the PDF Stream
                const file = new Blob([response.data], {
                    type: "application/pdf"
                });
                //Build a URL from the file
                const fileURL = URL.createObjectURL(file);
                //Open the URL on new Window
                window.open(fileURL);
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        return ( <
            div >
            <
            button onClick = {
                this.viewHandler
            } > View Pdf < /button> <
            /div>
        );
    }
}
export default App;
`}
            </code>
          </pre>
        </div>

        <p className="content1">
          The code above is commented with details of what it is doing.
          <br />
          Now run npm start to run client and “click view pdf” button
          <br />
          You may get below pop up , allow that to view pdf file
        </p>

        <div className="img-one">
          <img width="100%" src="/images/node001-02.png" alt="" />
        </div>

        <p className="content1">Fetch implementation of above code →</p>

        <div className="code-block">
          <pre>
            <code className="code">
              {`
fetch(\`http://localhost:4000/pdf\`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/pdf"
    }
}).then(res => res.blob())
.then(response => {
    //Create a Blob from the PDF Stream
    console.log(response);
    const file = new Blob(
        [response], {
            type: 'application/pdf'
        });
    //Build a URL from the file
    const fileURL = URL.createObjectURL(file);
    //Open the URL on new Window
    window.open(fileURL);
})
.catch(error => {
    console.log(error);
});
              `}
            </code>
          </pre>
        </div>

        <p className="content1">
          In this tutorial, we sent a pdf from the node as a stream and inside
          client i.e react, we are forcing to receive it as a blob, and after
          receiving blob we are building url out of it and opening it in a new
          window
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
