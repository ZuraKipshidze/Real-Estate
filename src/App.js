import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Rentals from "./components/Rentals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import stateModified from "./Redux/Reducer";
import Contact from "./components/Contact";


function App() {
  const store = createStore(stateModified);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/rentals" component={Rentals} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
