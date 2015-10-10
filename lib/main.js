import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link} from 'react-router';

import App from "./components/App";
import About from "./components/About";

let RouterContainer = React.createClass({
  render() {
    return(
      <div>
       {this.props.children}
      </div>
    );
  }
})


ReactDOM.render(
  <Router>
    <Route component={RouterContainer}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById("react-root")
);


