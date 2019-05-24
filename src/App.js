import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ReactPostList from "./components/ReactPostList/ReactPostList";
import SinglePostContainer from "./components/SinglePostContainer/SinglePostContainer";
import AllPostsList from "./components/AllPostsList/AllPostsList";
import Footer from "./components/Footer/Footer";
import NodePostsList from "./components/NodePostsList/NodePostsList";
import AlgoPostsList from "./components/AlgoPostsList/AlgoPostsList";
// import { createBrowserHistory } from "history";
// const customHistory = createBrowserHistory();
import ReactGA from "react-ga";

class App extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-1381796141216228",
      enable_page_level_ads: true
    });

    (function initializeReactGA() {
      ReactGA.initialize("UA-140827642-1");
      ReactGA.pageview("/anypagevisit");
    })();
  }

  render() {
    let titleObj = [
      {
        title: "React",
        link: "react"
      },
      {
        title: "Node",
        link: "node"
      },
      {
        title: "Algorithms",
        link: "algo"
      }
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
            <Navbar title={titleObj} />
          </div>
          <Route path="/" exact component={AllPostsList} />

          <Route path="/react" exact component={ReactPostList} />
          <Route path="/node" exact component={NodePostsList} />
          <Route path="/algo" exact component={AlgoPostsList} />

          <Route path="/algo/:slug" exact component={SinglePostContainer} />
          <Route path="/react/:slug" exact component={SinglePostContainer} />
          <Route path="/node/:slug" exact component={SinglePostContainer} />
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
