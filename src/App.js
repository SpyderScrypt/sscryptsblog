import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Page 1</Link>
              </li>
              <li>
                <Link to="/p2/">Page 2</Link>
              </li>

            </ul>
          </nav>

          <Route path="/" exact component={Page1} />
          <Route path="/p2" exact component={Page2} />

        </div>
      </Router>
    </div>
  );
}

export default App;
