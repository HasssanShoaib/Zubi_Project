import React, { Component } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Header />
            <Sidebar />
            <Dashboard/>
            <Footer year="2020"/>
          </div>
        </Switch>
      </Router>
    );
  }
}