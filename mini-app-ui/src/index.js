import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import { routes } from "./routes";
import store from "./store";
import * as serviceWorker from "./serviceWorker";
import HeaderTemplate from "./template/header";

class IndexApp extends Component {
  state = {
    navLinks: routes.navLinks
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <HeaderTemplate navLinks={this.state.navLinks} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<IndexApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
