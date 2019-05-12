import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ReactPostList from "./components/ReactPostList/ReactPostList";
import SinglePostContainer from "./components/SinglePostContainer/SinglePostContainer";
import AllPostsList from "./components/AllPostsList/AllPostsList";
import Footer from "./components/Footer/Footer";
// import { createBrowserHistory } from "history";
// const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    let titleObj = [
      {
        title: "React",
        link: "react"
      }
      // {
      //   title: "React Native",
      //   link: "#team"
      // },
      // {
      //   title: "Python",
      //   link: "#instagram"
      // },
      // {
      //   title: "Javascript",
      //   link: "#footer"
      // }
    ];
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar logoPath="./images/spider.png" title={titleObj} />
          </div>
          <Route path="/" exact component={AllPostsList} />

          <Route path="/react" exact component={ReactPostList} />
          <Route path="/react/:slug" exact component={SinglePostContainer} />
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
