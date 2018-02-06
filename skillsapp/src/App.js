import React, { Component } from 'react';
import { withRouter, NavLink } from "react-router-dom"
import routes from './routes';
import axios from "axios"

import Footer from './components/footer/footer'


import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.retrieveUser = this.retrieveUser.bind(this)
  }

  componentDidMount() {
    this.retrieveUser();
  }

  retrieveUser() {
    console.log("I am mounting")
    axios
      .get("http://localhost:3001/api/me")
      .then(response => response.data)
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink activeClassName="navlink-active" exact to="/">
            Home
            </NavLink>
          <NavLink activeClassName="navlink-active" exact to="/products">
            Products
          </NavLink>
          <NavLink activeClassName="navlink-active" exact to="/cart">
            Cart
          </NavLink>
        </header>
        <div className="mainContentContainer">
          {routes}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter((App));
